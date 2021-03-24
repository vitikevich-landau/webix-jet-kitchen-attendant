import {JetView} from "webix-jet";
import {data} from "models/records";

export default class DataView extends JetView {
  config() {
    return {
      view: "datatable",
      // data,
      // autoConfig: true,
      columns: [
        {id: "FULLNAME", header: "Наименование", adjust: "data"},
        {id: "IS_ACTIVE", header: "Дежурный", adjust: "header", css:{'text-align':'center'}},
        {id: "SKIPPED", header: "Освобождение от дежурства _", adjust: "header", css:{'text-align':'center'}},
        {id: "LAST_ACTIVE", header: "Последнее дежурство", adjust: "header"},
      ],
      footer: true,
      autowidth: true,
      autoheight: true,
      css: "webix_shadow_medium",
      scheme:{
        $change:function(item) {
          console.log(item);
          if (item.SKIPPED)
            item.$css = "highlight";
        }
      }
    };
  }
  
  init(view) {
    view.parse(data);
  }
}