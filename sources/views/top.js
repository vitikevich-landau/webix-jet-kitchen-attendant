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
        {
          rows: [
            {css: "webix_shadow_medium", rows: [header, menu]}
          ]
        },
        {
          padding: {
            right: 15
          },
          rows: [{$subview: true},]
        },
        // {width: 75}
      ]
    };
    
    return ui;
  }
  
  init() {
    this.use(plugins.Menu, "top:menu");
  }
}