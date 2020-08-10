import Vue from "../onekit/vue.js"
import OnekitPage from "../onekit/OnekitPage.js"
OnekitPage({
  name: 'Home',
  components: {
  },
  created(){
    console.log("created");
    console.log("created");
    this.$router.push({name: "page2", params: {id: 1}, query: {a:1,b:2}})
  }
})