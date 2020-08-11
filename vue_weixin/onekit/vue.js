import TheKit from "./lib/TheKit.js"
class Config{
  set silent(silent){
    this._silent = silent;
    if(silent){
      console = {
        groupEnd(){},
        group(){},
        error(){},
        warn(){},
        assert(){},
        log(){},
      };
    }else{

    }
  }
  get optionMergeStrategies(){
    
  }
  set devtools(devtools){
    this._devtools = devtools;
  }
  set errorHandler(errorHandler){
    this._errorHandler = errorHandler;
  }
  set warnHandler(warnHandler){
    this._warnHandler = warnHandler;
  }
  set ignoredElements(ignoredElements){
    this._ignoredElements = ignoredElements;
  }
  set keyCodes(keyCodes){
    this._keyCodes = keyCodes;
  }
  set performance(performance){
    this._performance = performance;
  }
  set productionTip(productionTip){
    this._productionTip = productionTip;
  }
}
export default class Vue{
  constructor(options){
    this.options=options;
  }
  ////////////////////////
  static get config(){
    if(!getApp().config){
      getApp().config = new Config();
    }
    return getApp().config;
  }
  static extend( options ){
    
  }
  static use(plug){

  }
  static nextTick(callback){
    wx.nextTick(callback);
  }
  static set(targe,key,value){
   /* var data = {};
    data[key] = value;
    this.setData(data);*/
  }
  //////////////////////////
  $mount(elementId){
    let pages = getCurrentPages();
    let PAGE = pages[pages.length-1]; 
    PAGE.vue = this;
    //
    getApp().to = "/";
    const flag = true;
    PAGE.setData({flag});
  }
}