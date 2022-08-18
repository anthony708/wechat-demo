// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
      msg:'init data'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    console.log('onload')
    // this表示当前页面的实例对象
    console.log(this)
    this.setData({
      msg: 'new data'
    })
    console.log(this.data.msg)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})