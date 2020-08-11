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
  static nextTick(callback){
    wx.nextTick(callback);
  }
  static set(targe,key,value){
   var data = this.data[targe];
    data[key] = value;
    this.setData({data});
  }
  static delete(targe,key){
    var data = this.data[targe];
     Object.delete(data,key);
     this.setData({data});
   }
   static directive(id,definition){

   }
   static filter(id,callback){

  }
  static component(id,definition){

  }
  static use(plug){

  }
  static mixin( mixin ){

  }
  static compile( template ){

  }
  static observable( object ){

  }
  static get version(){
    return "2.2";
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