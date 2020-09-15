// onekit/ui/ol/ol.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
  options: {
    virtualHost: true,
  },
  options: {
    virtualHost: true
  },
  properties: {
   
    reversed:{type:Boolean,value:false},
    start:{type:Number,value:1},
    type:{type:String,value:""},
    styleType:{type:String,value:""}

  },
  lifetimes: {
    attached: function() {
      // switch(this.properties.type){
      //   case "":
      //     console.log('none');
      //   case "a":
      //     console.log('lower-latin');
      //   case "A":
      //     console.log('upper-latin');
      //   case "i":
      //     console.log('lower-roman');
      //   case "I":
      //     console.log('upper-roman');
      // }
      if(this.properties.type==null){
        this.properties.styleType=="none"
        console.log('none');
      }else if (this.properties.type=="a") {
        this.properties.styleType=="lower-latin"
        console.log('lower-latin');
      }else if(this.properties.type=="A"){
        this.properties.styleType=="upper-latin"
        console.log('upper-latin');
      }else if(this.properties.type=="i"){
        this.properties.styleType=="lower-roman"
        console.log('lower-roman');
      }else{
        this.properties.styleType=="upper-roman"
        console.log('upper-roman');
      }
      // 在组件实例进入页面节点树时执行
      this.properties.start==this.properties.start--;
      console.log(this.properties.start)
      this.setData({
        start: this.properties.start--,
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    
  },
  relations: {
    './onekit-li': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function(target) {
        // 每次有onekit-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function(target) {
        // 每次有onekit-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function(target) {
        // 每次有onekit-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  data: {

  },

  methods: {
    _getAllLi: function(){
      // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
      var nodes = this.getRelationNodes('onekit/ui/ol/ol')
    },
    ol_tap(){
      
    }
  },
  ready: function(){
    this._getAllLi()
  }
})
