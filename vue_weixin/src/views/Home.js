import OnekitComponent from "../../onekit/OnekitComponent.js";
const HelloWorld = '../components/HelloWorld';
OnekitComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  data:{
    URL:"/views/Home"
  },
  created(){
    console.log("Home")
  }
})