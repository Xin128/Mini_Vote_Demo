/*
 * @Description: 配置HTTP基础
 * @Author: MoonCheung
 * @Github: https://github.com/MoonCheung
 * @Date: 2019-08-10 14:25:11
 * @LastEditors: MoonCheung
 * @LastEditTime: 2019-08-20 21:05:50
 */

import Taro, { hideNavigationBarLoading as _hideNavigationBarLoading, showNavigationBarLoading as _showNavigationBarLoading, request as _request } from "@tarojs/taro-h5";
// import { BASE_URL } from '../../config/index';
import qs from 'qs';

/**
 * 请求成功处理
 * @param {*} data
 * @param {*} resolve
 */
const checkSuccess = (res, resolve) => {
  let { statusCode, data } = res;
  if (statusCode >= 200 && statusCode < 300) {
    _hideNavigationBarLoading();
    return resolve(data);
  } else {
    throw new Error(`网络请求错误，状态码${statusCode}`);
  }
};

const BASE_URL = 'http://127.0.0.1:3000/mock/11/userInfo';

/**
 * 请求错误处理
 * @param {*} error
 * @param {*} reject
 */
const throwError = (error, reject) => {
  _hideNavigationBarLoading();
  if (typeof error === 'object') {
    reject(error);
    throw new Error('请求失败:', error.errMsg);
  }
  throw error;
};

export default {
  request(options, method = 'GET') {
    const { url } = options;
    return new Promise((resolve, reject) => {
      // 显示导航条加载动画
      _showNavigationBarLoading();
      _request({
        ...options,
        method: method,
        url: `${BASE_URL}${url}`,
        header: {
          'content-type': 'application/json', //默认值
          ...options.header
        }
      }).then(res => {
        checkSuccess(res, resolve);
      }).catch(err => {
        throwError(err, reject);
      });
    });
  },
  get(options) {
    return this.request({
      ...options
    });
  },
  post(options) {
    return this.request({
      ...options,
      data: qs.stringify(options.data)
    }, 'POST');
  }
};