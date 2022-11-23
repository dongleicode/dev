exports.showMsg = (status, doc)=> {
    if (status === 0) {
      return {
        n: null,
        v: null,
        m: '接口异常'
      }
    } else {
      return {
        n: 0,
        m: '成功',
        v: doc
      }
    }
  }