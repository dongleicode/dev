const url = require('url')

let api = "https://www.baidu.com/s?wd=vue%20element%20ui%E8%8F%9C%E5%8D%95%E5%92%8C%E6%8C%89%E9%92%AE%E6%9D%83%E9%99%90&rsv_spt=1&rsv_iqid=0xdb74c8fc0003568b&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=44004473_1_oem_dg&rsv_enter=1&rsv_dl=tb&rsv_sug3=20&rsv_sug1=22&rsv_sug7=100&rsv_t=8cecD2pmkOHsVKUMpqzkPIrJCQzV2QNURXgxFwKF6SPqIEFRMGhzKkcU8bMcCQtB2ptJ%2FTu7oTI&rsv_sug2=0&rsv_btype=i&inputT=13172&rsv_sug4=14450"

// console.log(url.parse(api, true))

const getUrlParams = url.parse(api, true).query
console.log(getUrlParams.rsv_sug4)