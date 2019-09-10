import Vue from 'vue';
function codeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const globalAllComponents = require.context('./global', true, /\.vue$/);//webpack方法获取当前路径下的文件
globalAllComponents.keys().forEach(fileName => {
  let config = globalAllComponents(fileName);
  const globalComponentName = codeStr(fileName.replace(/^\.\//, '')).replace(/\.\w+$/, '');
  // console.log(globalComponentName, config, fileName);
  Vue.component(globalComponentName, config.default || config);
});
