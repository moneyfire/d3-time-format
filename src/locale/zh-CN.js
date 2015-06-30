import localeFormat from "../localeFormat";

export default localeFormat({
  dateTime: "%a %b %e %X %Y",
  date: "%Y/%-m/%-d",
  time: "%H:%M:%S",
  periods: ["上午", "下午"],
  days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
});
