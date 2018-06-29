var util = require('../../util/util.js');
Page({
  data: {
    date: '',
    list: []
  },
  onLoad: function (query) {
    this.setData({
      date: query.date,
      list: getApp().list
    });
  },
  onShareAppMessage: function () {
    var date = this.data.date;
    return {
      title: date.substr(0,2)+"月"+date.substr(2)+"日，历史上的今天发生了这"+this.data.list.length+"件大事，你知道吗？",
      path: "/pages/index/index",
    }
  }
})