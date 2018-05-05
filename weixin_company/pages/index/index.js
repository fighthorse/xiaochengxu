// pages/index/index.js
const firstPage = [{
  'id':'1',
  'title':'你好世界',
  'description':'这是一个美丽的世界，等待着你去征服',
  'cover': "/image/mony.png"
}, {
  'id': '2',
  'title': '五一节假日通知',
  'description': '公司五一节假日放假通知，各位同仁及部门按公司安排及时做好假期调整和值班工作',
  'cover': "/image/mony.png"
  }, {
    'id': '3',
    'title': '关于新规定通知',
    'description': '为了提高公司再市场的核心竞争力，公司采取新的规则来激起大家的动力',
    'cover': "/image/mony.png"
  }
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    'articles':[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticles()
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
  todetailpage:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/index?id=${id}',
    })
  },
  getArticles:function(){
    this.setData({'articles':firstPage})
  }
})