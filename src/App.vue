<template>
  <div id="app">
    <transition name="fade"> 
    <router-view></router-view>
  </transition>    

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
  text-decoration: none;
  box-sizing:border-box;
}
html,body{
  width:100%;
  height:100%;

}
#app {
 width:100%;
 height:100%;

}
 .fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
