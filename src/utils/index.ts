import { imgFilePath } from "@/config/enum";

export function getImgFile(enumName: string) {
  console.log(getImgFilePath(enumName.toUpperCase()));
  //   let imgFiles = import.meta.globEager(getImgFilePath(enumName) + "/*.png");
  //   console.log(imgFiles);
}
export function getImgFilePath(enumName: string) {
  console.log(enumName);
  return imgFilePath[enumName];
}
