/**
 * 年 yyyy
 * 月 mm
 * 日 dd
 * 时 hh
 * 分 MM
 * 秒 ss
 */
// 6月6日
export const getmmdd = (date: any): string => {
  const myDate: Date = new Date(date);
  const mm = myDate.getMonth() + 1;
  const dd = myDate.getDate();
  return `${mm}月${dd}日`;
}

export const getStr = (num: number): string => {
  return num < 10 ? `0${num}`: `${num}`;
}

// 1分30秒
export const getmmss = (time: number): string => {
  const mm = Math.floor(time / 60);
  const ss = time % 60;
  return mm > 0 ? `${mm}分${ss}秒` : `${ss}秒`;
}

export const getyyyymmdd = (date: any): string => {
  const myDate: Date = new Date(date);
  const yyyy = myDate.getFullYear();
  const mm = myDate.getMonth() + 1;
  const dd = myDate.getDate();
  return `${yyyy}-${getStr(mm)}-${getStr(dd)}`;
}