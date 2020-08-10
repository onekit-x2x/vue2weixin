import VueRouter from "./VueRouter.js"
export default function OnekitPage(options){
  const weixin_options = options;

    weixin_options.onLoad = function(query){
      console.log("xxx")
      if(this.created){
        this.created();
      }
    };
    weixin_options.$router = new VueRouter(),

  
  Page(weixin_options);
}