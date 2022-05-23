// import { imgFilePath } from "@/config/enum";

export function getImgFile(imgFiles: any) {
  const imgs: any = {};
  for (const key in imgFiles) {
    const newKey = key.slice(key.lastIndexOf("/") + 1, key.indexOf(".png"));
    imgs[newKey] = imgFiles[key].default;
  }
  return imgs;
}

// export function getImgFilePath(enumName: string) {
//   return imgFilePath[enumName];
// }
