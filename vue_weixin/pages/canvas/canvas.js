// pages/canvas/canvas.js
Page({

  data: {

  },

  onLoad: function (options) {

  },


  onReady: function () {

  },
  drow() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
  }

})