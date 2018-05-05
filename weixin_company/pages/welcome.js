// pages/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "profile":{
      "nickName":"同事",
      "avatarUrl":"/image/time.jpg"
    },
    "isLogin":false,
    "pagenav":[
      { 'name': '公司首页', 'img': '/image/company.png', 'url': '/pages/index/index' },
      { 'name': '待办事项', 'img': '/image/thing.png', 'url': '/pages/thing/index' }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getProfile(res){
    console.log(res)
    this.setData({
      "profile":res.detail.userInfo,
      "isLogin":true
    })
  }
})