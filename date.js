//jshint esversion:6
module.exports = getDate;

function getDate() {
let today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
const day = today.toLocaleString("en-US", options);
return day;
}
