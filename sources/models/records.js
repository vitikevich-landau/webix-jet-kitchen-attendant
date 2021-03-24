export const data = new webix.DataCollection({
  data: [
    {NUM: 1, FULLNAME: "Балахнина Екатерина Сергеевна", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 2, FULLNAME: "Болдузев Денис Вячеславович", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 3, FULLNAME: "Векессер Павел Владимирович", IS_ACTIVE: 0, SKIPPED: 1, LAST_ACTIVE: null,},
    {NUM: 4, FULLNAME: "Венерцева Наталья Викторовна", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null,},
    {NUM: 5, FULLNAME: "Даминов Владислав Валитович", IS_ACTIVE: 1, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 6, FULLNAME: "Иванов Павел Нугзарович", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 7, FULLNAME: "Кулиш Виктор Владимирович", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 8, FULLNAME: "Кебереков Игорь Павлович", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 9, FULLNAME: "Манышев Руслан Григорьевич", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 10, FULLNAME: "Крюкова Елена Александровна", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 11, FULLNAME: "Курносова Ирина Ивановна", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 12, FULLNAME: "Лесников Максим Александрович", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 13, FULLNAME: "Молодых Кристина Валерьевна", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 14, FULLNAME: "Старовойтов Алексей Борисович", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 15, FULLNAME: "Тайлунов Алан Артурович", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 16, FULLNAME: "Трашева Ирина Александровна", IS_ACTIVE: 0, SKIPPED: 1, LAST_ACTIVE: null},
    {NUM: 17, FULLNAME: "Трашева Ирина Юрьевна", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 18, FULLNAME: "Тибереков Леонид Евгеньевич", IS_ACTIVE: 0, SKIPPED: 1, LAST_ACTIVE: null},
    {NUM: 19, FULLNAME: "Чиндашев Юрий Иосифович", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 20, FULLNAME: "Шипкова Кристина Александровна", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
    {NUM: 21, FULLNAME: "Челтушева Регина Артуровна", IS_ACTIVE: 0, SKIPPED: null, LAST_ACTIVE: null},
  ],
  scheme: {
    $change(item) {
      if (item.SKIPPED) {
        item.$css = "datatable-skipped";
      }
    }
  }
});