import {JetView} from "webix-jet";
import {employees} from "models/records";

export default class DataView extends JetView {
  config() {
    return {
      view: "datatable",
      id: "dt",
      // data: employees,
      url: "rest->http://192.168.1.35:3000/api/employees",
      // save: "rest->http://192.168.1.35:3000/api/",
      columns: [
        {id: "index", header: "#", width: 50},
        {
          id: "NUM",
          header: "Очередь",
          width: 95,
          sort: "int"
        },
        {
          id: "FULLNAME",
          header: ["ФИО"/*, {content: "textFilter"}*/],
          minWidth: 270,
          fillspace: true,
          editor: "text",
          sort: "string",
        },
        {
          id: "IS_ACTIVE",
          header: "Дежурный",
          width: 110,
          template: "{common.radio()}",
          sort: "int",
        },
        {
          id: "SKIPPED",
          editor: "text",
          header: "Освобождение от дежурства",
          width: 240,
          sort: "int",
          template: "{common.checkbox()}"
        },
        {
          id: "LAST_ACTIVE",
          header: "Последнее дежурство",
          width: 200,
          format: function (value) {
            const splitted = value ? value.split("T") : [];

            if (splitted.length) {
              const parsed = new Date(splitted[0]);
              return parsed.toLocaleDateString();
            }
            
            return "";
          }
        },
        /*{
          template: "<span class='webix_icon wxi-trash' style='cursor: pointer; color: darkred'></span>",
          // tooltip: "Удалить",
          width: 50,
          css: {"text-align": "center"}
        }*/
      ],
      select: true,
      footer: true,
      css: "webix_shadow_medium webix_header_border ",
      editable: true,
      editaction: "dblclick",
      drag: "order",
      dragColumn: "order",
      resizeColumn: {size: 12},
      on: {
        onBeforeLoad() {
          webix.extend(this, webix.ProgressBar);
          this.showProgress();
        },
        onAfterLoad() {
          this.hideProgress();
          
          /***
           *  Set datatable rows color
           * */
          $$("dt").eachRow(function (row) {
            const current = this.getItem(row);
            const {IS_ACTIVE, SKIPPED} = current;
            
            if (IS_ACTIVE) {
              this.addRowCss(row, "datatable-active");
            }
            if (SKIPPED) {
              this.addRowCss(row, "datatable-skipped");
            }
          });
        },
        onItemClick(id, e, node) {
        },
        onCheck(row, column, state) {
          /***
           *  Set rows color
           * */
          switch (column) {
            case "IS_ACTIVE":
              webix.dp(this).save(row);
              /***
               *  Delete previous classes
               * */
              this.eachRow(r => {
                this.removeCss(r, "datatable-active");
              });
              
              this.addRowCss(row, "datatable-active");
              
              break;
            case "SKIPPED":
              if (state) {
                this.addRowCss(row, "datatable-skipped");
              } else {
                this.removeRowCss(row, "datatable-skipped");
              }
              
              break;
          }
        },
        onHeaderClick(id, e, target) {
          let state = this.getState().sort;
          if (state && state.dir === "desc") {
            // this.sort("id", "asc");
            this.sort({
              as: "int",
              dir: "asc",
              by: "NUM" // имя поля
            });
            this.markSorting();
            this.setState(state);
            
            return false;
          }
        },
        "data->onStoreUpdated"() {
          /***
           *  Dynamic indexes
           * */
          this.data.each(function (obj, i) {
            obj.index = i + 1;
          });
        },
        onBeforeDrag(ctx, ev) {
        },
        onAfterDrop(ctx, ev) {
          const row = this.getItem(ctx.start);
          const {NUM, index} = row;
          
          if (NUM !== index) {
            this.data.each(v => {
              this.updateItem(v.id, {...v, NUM: v.index});
            });
  
            webix.ajax()
              .post(
                "http://192.168.1.35:3000/api/employees/change-order",
                {NUM, index}
              )
              .then(response => {
                return response.json();
              })
              .then(json => {
                console.log(json);
              });
            
          }
        },
      },
    };
  }
  
  init(_$view, _$) {
    super.init(_$view, _$);
    
    
  }
}