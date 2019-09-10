import axios from 'axios';
import QS from 'qs';//node的方法
axios.defaults.timeout = '10000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset:UTF-8';
axios.interceptors.response.use(
  response => {
    console.log('请求拦截成功数据');
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    console.log('请求拦截失败数据');
    if (error.response.status) {
      switch (error.response.status) {
        case '401' : //未登录
          break;
        case '403' : // token过期
          break;
        case '404' :
          this.$message.error('请求地址不存在，请查看');
          break;
        default :
          this.$message.error(error.response.data.message);
      }
    }
    return Promise.reject(error.response);
  }
);
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params)).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}
