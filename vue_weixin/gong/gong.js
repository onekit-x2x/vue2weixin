// gong/gong.js
Page({
      
music_loadeddata(e){
  console.log("audio loadeddata!",e)
},
music_canplay(e){
  console.log("audio canplay!",e)
},  
music_canplaythrough(e){
  console.log("audio canplaythrough!",e)
} ,
music_play(e){
  //e = e.detail;
  //e = onekit_event(e)
  console.log("audio play!",e)
}, 
music_playing(e){
  console.log("audio playing!",e)
} ,
music_timeupdate(e){
  console.log("audio timeupdate!",e)
} , 
 music_pause(e){
  console.log("audio pause!",e)
} ,
music_ended(e){
  console.log("audio ended!",e)
} ,
 music_complete(e){
  console.log("audio complete!",e)
}  ,
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  /**
   * 页面的初始数据
   */
  data: {

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

  }
})