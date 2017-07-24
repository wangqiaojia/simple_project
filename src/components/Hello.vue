<template>
  <div class="home">
    <!-- <router-link to="/home"> -->
      <router-link to=/second/0 class="first">我要答</router-link>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
  .home{
    width:100%;
    height:100%;
    background:url(../assets/1.png)no-repeat;
    background-size:100% 100%;
    position: relative;
    display:flex;
    -webkit-justify-content:center;
  }

  .first{
  font-size:28px;
  font-weight:bold;
  color:#000;
  position:absolute;
  top:46%;
 
 

}
</style>
