// import superagent from 'superagent-bluebird-promise';
import request from 'axios';

export const post = (url, data) => request({
  url,
  method: 'post',
  data,
});

export const put = (url, data) => request({
  url,
  method: 'put',
  data,
});

export const get = (url, params) => request({
  url,
  method: 'get',
  params,
});

export const del = (url, params) => request({
  url,
  method: 'delete',
  params,
});
