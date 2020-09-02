Component({
  options: {
    virtualHost: true
  },
  properties:{
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
    text:{type:String,value:""},
    value:{type:String,value:""}
  },
  methods:{
  option_tap(e){
    const value = this.properties.value;
    const text = this.properties.text || value;
    this.triggerEvent('onekit_option_change', {value,text}, { bubbles: true, composed: true }) 
  }
}
})
