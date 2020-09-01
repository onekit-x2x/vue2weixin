// pages/canvas/canvas.js
Page({

  data: {

  },

  onLoad: function () {

  },


  onReady: function () {

  },
  drow() {
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 100, 100);
    const ctx = wx.createCanvasContext('myCanvas',this) //创建Canvas
    ctx.fillStyle = 'green'; //选择填充颜色
    ctx.fillRect(10, 10, 100, 100);//形状描述
    ctx.draw() //绘制图像
  }
})