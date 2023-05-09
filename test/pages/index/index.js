// index.js
// 获取应用实例
const innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.autoplay = false;
innerAudioContext.src = '../audio/muyu.mp3'; // 这里替换成你的音频文件链接

Page({
  data: {
    count: 0,
    date: new Date().getTime(),
  },

  togglePlay: function() {
    let count = this.data.count + 1;
    innerAudioContext.play(); // 每次敲击木鱼播放音频
    this.setData({
      count: count
    });
  },

  onDateChange: function(e) {
    const { value } = e.detail;
    this.setData({
      date: value,
    });
  },
  // 格式化日期
  dateFormat: function(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  },

})
