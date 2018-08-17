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
  		resource.addBrowse().then(res => {})
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
