import Helper from "./helper";

class Data {
  static min = 0;
  static max = 100;
  static data = [
    { label: "January", value: Helper.getRandomInt(Data.min, Data.max) },
    { label: "February", value: Helper.getRandomInt(Data.min, Data.max) },
    { label: "March", value: Helper.getRandomInt(Data.min, Data.max) },
    { label: "April", value: Helper.getRandomInt(Data.min, Data.max) },
    { label: "May", value: Helper.getRandomInt(Data.min, Data.max) },
    { label: "June", value: Helper.getRandomInt(Data.min, Data.max) },
    { label: "July", value: Helper.getRandomInt(Data.min, Data.max) },
  ];
}

export default Data;
