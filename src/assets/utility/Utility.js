module.exports.zero_padding = (pad, num) => ("0000000" + num).substr(-pad);

module.exports.datetime_converter = (datetime, date_sep = "/") => {
  const dt_obj = new Date(datetime);
  const ret_string =
    this.zero_padding(2, dt_obj.getDate()) +
    date_sep +
    this.zero_padding(2, dt_obj.getMonth() + 1) +
    date_sep +
    dt_obj.getFullYear() +
    " " +
    this.zero_padding(2, dt_obj.getHours()) +
    ":" +
    this.zero_padding(2, dt_obj.getMinutes()) +
    ":" +
    this.zero_padding(2, dt_obj.getSeconds());
  return ret_string;
};

module.exports.get_color_by_index = (index) => {
  const color_data = {
    0: "#ff1597",
    1: "#1a322d",
    2: "#696969",
    3: "#ffbb42",
    4: "#4286ff",
    5: "#ff5010",
    6: "#469f70",
    7: "#700808",
    8: "#0ff1ce",
    9: "#397684",
    10: "#fe2858",
  };
  return color_data[index % 10];
};
