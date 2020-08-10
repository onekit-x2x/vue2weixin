 export default function(options){
  const weixin_options = {
    get $router(){
      return getApp().$router;
    },
    lifetimes:{
      created:function() {
        if(this.created){
          this.created();
        }
      }
    }
  };
  for(const key of Object.keys(options)){
    switch(key){
      default:weixin_options[key]=options[key];break;
    }
  }
  Component(weixin_options);
}