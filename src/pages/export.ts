let moduleFiles = import.meta.globEager("./**/*.vue");
//   ignore: [],

let modules: any = {};
let routes: any = [];

for (const key in moduleFiles) {
  const module = moduleFiles[key];
  // 这里是为了过滤掉 单独的组件
  if (key.indexOf("/components/") == -1) {
    modules[key.replace(/(\.\/modules\/|\.js)/g, "")] = module.default;
  }
}

Object.keys(modules).forEach((item) => {
  modules[item]["nameSpaced"] = true;
  let name = item.replace(/^\.\/(.*)\.\w+$/, "$1").replace(/\/index$/, "");
  let lastInd = item.lastIndexOf("/");
  let lastName = item.substr(lastInd + 1, item.length);
  // 判断是否为模块首页
  if (lastInd != -1 && lastName == "index") {
    name = name.substr(0, lastInd);
  }
  routes.push({
    path: `/${name == "index" ? "" : name.toLowerCase()}`, // 这个判断是等于home首页，路径就默认为/ ，toLowerCase是转小写函数
    name: conversionName(name),
    component: modules[item],
  });
});
/**
 * 将 name 转为 大驼峰命名
 * 1.先将字符串中的 - 替换为 /
 * 2.再根据 / 分割成数组
 * 3.将数组循环改变第一个首字母为大写
 * 4.最后拼接返回
 * */
function conversionName(name: String) {
  return name
    .replace(/[-_]/g, "/")
    .split("/")
    .reduce(
      (previous, current) =>
        previous + current.replace(/^\w/, (s) => s.toUpperCase()),
      ""
    );
}

export default routes;
