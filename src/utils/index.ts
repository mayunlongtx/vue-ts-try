// import { imgFilePath } from "@/config/enum";

export function getImgFile(imgFiles: any) {
  const imgs: any = {};
  for (const key in imgFiles) {
    const newKey = key.slice(key.lastIndexOf("/") + 1, key.indexOf(".png"));
    imgs[newKey] = imgFiles[key].default;
  }
  return imgs;
}
// 时间转换
export function formatDate(date: any, fmt: any) {
  if (date) {
    date = new Date(date);
  } else {
    date = new Date();
  }
  const o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒

    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

// export function getImgFilePath(enumName: string) {
//   return imgFilePath[enumName];
// }
