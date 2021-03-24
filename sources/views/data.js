import {JetView} from "webix-jet";
import {data} from "models/records";

export default class DataView extends JetView {
  config() {
    return {
      view: "datatable",
      data,
      columns: [
        {id: "index", header: "#", width: 50},
        {id: "FULLNAME", header: "ФИО", minWidth: 250, fillspace: true},
        {id: "IS_ACTIVE", editor: "text", header: "Дежурный", width: 120},
        {id: "SKIPPED", editor: "text", header: "Освобождение от дежурства", width: 250},
        {id: "LAST_ACTIVE", header: "Последнее дежурство", width: 200},
      ],
      editable: true,
      select: true,
      footer: true,
      autoheight: true,
      css: "webix_shadow_medium",
    };
  }

  init(view) {
    view.parse(data);
  }
}