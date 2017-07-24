<template>
   
    <div class="con">
     <div class="mark" v-if="isShow">
    <div class="bgs" @click=miss()>
      <img src="../assets/share.png" alt="">
    </div>
    </div>
        <div class="bb">
            <p>恭喜你</p>
           <p>你在模拟考试中答对了<span class="color">{{$store.state.num}}</span>道题</p>
        </div>
      
       <p class="names">{{$store.state.num*10}}元看大片</p>
        <router-link to=/card class="jiang">拿走奖励</router-link>
     <button class="dese" @click="helpFn()">嘚瑟一下</button>
      
     
    </div>
  
 
</template>
<script>
  export default {
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    helpFn(){
        this.isShow=true
      },
      miss(){
        this.isShow=false
      },
  }
  }
</script>

<style scope>
 
 .con{
     width:100%;
     height:100%;
     display:flex;
     background:url(../assets/end.png)no-repeat;
     background-size:100% 100%;
     -webkit-flex-direction:column;
     justify-content:center;
 }

 .mark{
  width:100%;
  height:100%;
  background:rgba(0,0,0,.8);
  position:absolute;
  top:0;
  left:0;
  z-index:11;
}
.mark .bgs{
  width:60%;
  height:30%;
  position:absolute;
  top:10%;
  right:15%;
}
.bgs img{
  width:100%;
  height:100%;
}

 .bb{
   text-align:center;
   position:absolute;
   top:20%;
   font-size:18px;
   line-height:30px;
 }

 .color{
   color:#ED6C67;
   font-weight:bold;
 }
.names{
 
    position: absolute;
    top:37%;
    color:#fff;
    font-size:20px;
    font-weight:bold;
  }
.jiang{
  color:#fff;
  position:absolute;
 text-align:center;
  bottom:33.5%;
  font-weight:bold;
  font-size:18px;
}
.dese{
  color:#fff;
  position:absolute;
  bottom:21%;
  font-weight:bold;
  font-size:18px;
  outline:none;
  border:0;
  background:none;
  text-align:center;
}
</style>