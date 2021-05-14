module.exports.zero_padding = (pad, num) => ("0000000" + num).substr(-pad);

module.exports.datetime_converter = (datetime) => {
  const dt_obj = new Date(datetime);
  const ret_string =
    this.zero_padding(2, dt_obj.getDate()) +
    "/" +
    this.zero_padding(2, dt_obj.getMonth() + 1) +
    "/" +
    dt_obj.getFullYear() +
    " " +
    this.zero_padding(2, dt_obj.getHours()) +
    ":" +
    this.zero_padding(2, dt_obj.getMinutes()) +
    ":" +
    this.zero_padding(2, dt_obj.getSeconds());
  return ret_string;
};