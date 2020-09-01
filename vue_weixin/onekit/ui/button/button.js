// onekit/ui/button/button.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    onekitClass: {
      type: String,
      default: ''
    },
    onekitStyle: {
      type: String,
      defaul: ''
    },
    onekitId: {
      type: String,
      defaul: ''
    },
    size: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    formType: {
      type: String,
      default: ""
    },
    openType: {
      type: String,
      default: ""
    },
    hoverClass: {
      type: String,
      default: "button-hover"
    },
    hoverStopPropagation: {
      type: Boolean,
      default: false
    },
    hoverStartTime: {
      type: Number,
      default: 20
    },
    hoverStayTime: {
      type: Number,
      default: 70
    },
    lang: {
      type: String,
      default: "en"
    },
    sessionFrom: {
      type: String,
      default: ""
    },
    sendMessageTitle: {
      type: String,
      default: "当前标题"
    },
    sendMessagePath: {
      type: String,
      default: "当前分享路径"
    },
    sendMessageImg: {
      type: String,
      default: "截图"
    },
    appParameter: {
      type: String,
      default: ""
    },
    showMessageCard: {
      type: Boolean,
      default: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    button_getphonenumber(e) {
      console.log("button_getphonenumber", e);
      this.triggerEvent('getphonenumber',e.details)
    },
    button_getuserinfo(e) {
      console.log("button_getuserinfo", e);
      this.triggerEvent('getuserinfo',e.details)
    },
    button_opensetting(e) {
      console.log("button_opensetting", e);
      this.triggerEvent('opensetting',e.details)
    },
    button_launchapp(e) {
      console.log("button_launchapp", e);
      this.triggerEvent('launchapp',e.details)
    },
  }
})