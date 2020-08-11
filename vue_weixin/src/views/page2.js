import OnekitComponent from "../../onekit/OnekitComponent.js"
OnekitComponent({
  name: 'page2',
  data:{
    URL:"/views/page2",
    message: 'Hello Vue.js!'
  },
  components: {
  },
  methods: {
    reverseMessage: function () {
      this.set("message",this.get("message").split('').reverse().join(''))
    }
  }
})