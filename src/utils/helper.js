import moment from "moment";
/**************** Date Time Config ****************/
const monthsFull = {
  th: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};
const monthsShort = {
  th: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ],
  en: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};
const weekdaysFull = {
  th: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
  en: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};
const weekdaysShort = {
  th: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

export const getDateFormat = (date) => {
  let dd = (moment(date).get("date") < 10 ? "0" : "") + moment(date).get("date");
  let MM = (moment(date).get("month") + 1 < 10 ? "0" : "") + (moment(date).get("month") + 1);
  let yyyy = moment(date).get("year");
  return dd + "/" + MM + "/" + yyyy;
};

export const getDateToForm = (date) => {
  let dateTime = new Date(date)
  return dateTime.getTime();
};

