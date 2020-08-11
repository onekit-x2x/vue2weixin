class Config{
  set productionTip(productionTip){

  }
}
export default class Vue{
  static attached(UC){
    let pages = getCurrentPages();
    let PAGE = pages[pages.length-1];   
    PAGE.vue.options.router.UC = UC;
    PAGE.UC = UC;
    UC.$router = PAGE.vue.options.router;
  }
  static use(objectOrfunction,options){
  }
  
/////////////////////////////////
  constructor(){
  }
  $mount(appId){
    /*let pages = getCurrentPages();
    let PAGE = pages[pages.length-1]; 
    let components = this.options.components;
    let template = Object.keys(components)[0];
    PAGE.vue = this;
    PAGE.setData({template});*/
  }

}
Vue.config = new Config();