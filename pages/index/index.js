Page({

  onShareAppMessage() {
    return {
      title: '热搜搜吧',
      path: 'page/component/index'
    }
  },
  data: {
    list: [],
    theme: 'light'
  },
  bindNavigateToWebPage(event) {
    let url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../webpage/webpage?url=' + escape(url)
    })
  },
  onLoad() {
    this.setData({
      theme: wx.getSystemInfoSync().theme || 'light'
    })
    if (wx.onThemeChange) {
      wx.onThemeChange(({
        theme
      }) => {
        this.setData({
          theme
        })
      })
    }
    //加载新闻
    const apiHost = 'https://api.dzurl.top';
    const apiHost2 = 'https://cdn.jsdelivr.net/gh/hu-qi/trending-in-one/raw';
    const apiHost3 = 'http://www.coderutil.com/api/resou/v1';

    this.weiboNews('微博', 'weibo', false, apiHost3 + '/weibo', 'https://s.weibo.com/weibo?Refer=new_time&q=')
    this.baiduNews('百度', 'baidu', false, apiHost3 + '/baidu', 'https://wap.baidu.com/s?word=');
    this.zhihuNews('知乎', 'zhihu', false, apiHost2 + '/zhihu-search/2021-11-16.json', 'https://www.zhihu.com/search?type=content&q=');
    this.zhihuQuestion('知乎问题', 'zhihuquestion', false, apiHost2 + '/zhihu-questions/2021-11-16.json', 'https://www.zhihu.com/search?type=content&q=');
    this.sogouNews('搜狗', 'sougou', false, apiHost + '/news/sogou', 'https://wap.sogou.com/web/searchList.jsp?keyword=');
    this.toutiaoNews('今日头条', 'toutiao', false, apiHost3 + '/toutiao', 'https://so.toutiao.com/search?dvpf=pc&source=input&keyword=');
      
  },
  weiboNews(itemName, itemId, open, url, page) {
    let me = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: {},
        method: 'GET',
        header: {
          'content-type': 'application/json',
          'access-key' : '66d974c4224782ee5a0b87f12eb3795f',
          'secret-key' : '79856e2e53eeb19348c4d197bac92e61',
        },
        success(res) {

          //项
          let item = {
            id: itemId,
            name: itemName,
            open: open,
            pages: []
          }
          
          //子项
          res.data.data.forEach(element => {
            item.pages.push({
              title: element.keyword,
              url: element.url,
              hot: element.hotValue ? element.hotValue : ''
            })
          });

          let list = me.data.list;
          list.push(item)

          //更新数据源
          me.setData({
            list: list
          })
          resolve()
        },
        fail(res) {
          reject()
        }
      })

    });
  },

  baiduNews(itemName, itemId, open, url, page) {
    let me = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: {},
        method: 'GET',
        header: {
          'content-type': 'application/json',
          'access-key' : '66d974c4224782ee5a0b87f12eb3795f',
          'secret-key' : '79856e2e53eeb19348c4d197bac92e61',
        },
        success(res) {

          //项
          let item = {
            id: itemId,
            name: itemName,
            open: open,
            pages: []
          }
          
          //子项
          res.data.data.forEach(element => {
            item.pages.push({
              title: element.keyword,
              url: element.url,
              hot: element.hotValue ? element.hotValue : ''
            })
          });

          let list = me.data.list;
          list.push(item)

          //更新数据源
          me.setData({
            list: list
          })
          resolve()
        },
        fail(res) {
          reject()
        }
      })

    });
  },

  zhihuNews(itemName, itemId, open, url, page) {
    let me = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: {},
        method: 'GET',
        header: {
          'content-type': 'application/json',
        },
        success(res) {

          //项
          let item = {
            id: itemId,
            name: itemName,
            open: open,
            pages: []
          }
          
          //子项
          res.data.forEach(element => {
            item.pages.push({
              title: element.display_query,
              url: element.url,
              hot: element.hot ? element.hot : ''
            })
          });

          let list = me.data.list;
          list.push(item)

          //更新数据源
          me.setData({
            list: list
          })
          resolve()
        },
        fail(res) {
          reject()
        }
      })

    });
  },
  zhihuQuestion(itemName, itemId, open, url, page) {
    let me = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: {},
        method: 'GET',
        header: {
          'content-type': 'application/json',
        },
        success(res) {

          //项
          let item = {
            id: itemId,
            name: itemName,
            open: open,
            pages: []
          }
          
          //子项
          res.data.forEach(element => {
            item.pages.push({
              title: element.title,
              url: element.url,
              hot: element.hot ? element.hot : ''
            })
          });

          let list = me.data.list;
          list.push(item)

          //更新数据源
          me.setData({
            list: list
          })
          resolve()
        },
        fail(res) {
          reject()
        }
      })

    });
  },

  sogouNews(itemName, itemId, open, url, page) {
    let me = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: {},
        method: 'GET',
        header: {
          'content-type': 'application/json',
        },
        success(res) {

          //项
          let item = {
            id: itemId,
            name: itemName,
            open: open,
            pages: []
          }
          
          //子项
          res.data.ret.forEach(element => {
            item.pages.push({
              title: element.title,
              url: element.url,
              hot: element.hot ? element.hot : ''
            })
          });

          let list = me.data.list;
          list.push(item)

          //更新数据源
          me.setData({
            list: list
          })
          resolve()
        },
        fail(res) {
          reject()
        }
      })

    });
  },
  toutiaoNews(itemName, itemId, open, url, page) {
    let me = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: url, //仅为示例，并非真实的接口地址
        data: {},
        method: 'GET',
        header: {
          'content-type': 'application/json',
          'access-key' : '66d974c4224782ee5a0b87f12eb3795f',
          'secret-key' : '79856e2e53eeb19348c4d197bac92e61',
        },
        success(res) {

          //项
          let item = {
            id: itemId,
            name: itemName,
            open: open,
            pages: []
          }
          
          //子项
          res.data.data.forEach(element => {
            item.pages.push({
              title: element.keyword,
              url: element.url,
              hot: element.hotValue ? element.hotValue : ''
            })
          });

          let list = me.data.list;
          list.push(item)

          //更新数据源
          me.setData({
            list: list
          })
          resolve()
        },
        fail(res) {
          reject()
        }
      })

    });
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  }
})