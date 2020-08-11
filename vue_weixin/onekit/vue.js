import TheKit from "./lib/TheKit.js"
class Config{
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
    return new Config();
  }
  static use(plug){

  }
  static attached(UC){
    let PAGE = TheKit.current();   
    PAGE.vue.options.router.UC = UC;
    PAGE.UC = UC;
    UC.$router = PAGE.vue.options.router;
  }
  static detached(UC){

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