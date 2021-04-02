import {JetView, plugins} from "webix-jet";


export default class TopView extends JetView {
  config() {
    var header = {
      type: "header", template: this.app.config.name, css: "webix_header app_header"
    };
    
    var menu = {
      view: "menu", id: "top:menu",
      css: "app_menu",
      width: 180, layout: "y", select: true,
      template: "<span class='webix_icon #icon#'></span> #value# ",
      data: [
        {value: "Dashboard", id: "start", icon: "wxi-columns"},
        {value: "Data", id: "data", icon: "wxi-pencil"}
      ]
    };
    
    var ui = {
      type: "space",
      css: "app_layout",
      cols: [
        // {
        //   rows: [
        //     {css: "webix_shadow_medium", rows: [header, menu]}
        //   ]
        // },
        // {width: 75},
        {
          padding: {
            top: 5,
            left: 25,
            right: 25
          },
          rows: [
            {
              cols: [
                {
                  
                  type: "header",
                  template: "График дежурства",
                  css: "chart-title"
                },
                {
                  view: "toolbar",
                  cols: [
                    {
                      view: "icon",
                      icon: "wxi wxi-download",
                      tooltip: "Скачать PDF",
                      click: () => {
                        // webix.message("awefaw");
                        webix.toPDF("dt", {
                          // title:true,
                          filterHTML: false,
                          styles: true,
                          autowidth: true,
                          docHeader: "График дежурства по кухне на " + new Date().toLocaleDateString(),
                          ignore: {
                            IS_ACTIVE: true,
                            SKIPPED: true,
                          },
                          columns: {
                            NUM: true,
                            FULLNAME: {
                              width: 350
                            },
                            LAST_ACTIVE: {
                              width: 150
                            }
                          },
                          filename: "График дежурства"
                        });
                      }
                    }
                  ],
                  css: "chart-title",
                }
              ]
            },
            {$subview: true}
          ]
        },
        // {width: 75}
      ]
    };
    
    return ui;
  }
  
  _init(view, url) {
    super._init(view, url);
    
    // this.use(plugins.Menu, "top:menu");
  }
}