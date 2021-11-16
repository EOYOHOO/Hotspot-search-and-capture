// pages/webpage/webpage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    url: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad(options) {
      let url = unescape(options.url);
      this.setData({
        url: url
      })
    }
  },
})