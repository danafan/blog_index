<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	import resource from './api/resource.js'
  export default {
    name: 'App',
    created(){
      //增加访问数量
      resource.addBrowse().then(res => {});
      // 判断是否为pc端
      var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
      var flag = true;
      this.isMobile(Agents,flag); 
    },
    methods:{
      isMobile(Agents,flag) {
        var userAgentInfo = navigator.userAgent;
        for (var v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        if(!flag){
          this.$router.replace('/small');
        }
      }
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
div{
  box-sizing: border-box;
  cursor: default;
}
</style>
