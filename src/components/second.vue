<template>
  <div id="test">
  <div class="mark" v-if="isShow">
  <div class="bgs" @click=miss()>
     <img src="../assets/share.png" alt="">
  </div>
   
  </div>
    <div class="con">
     <p class="title">{{data[$route.params.id].names}}</p>
      <ul class="item">
        <transition-group name='list'>

        <li v-for="(i,index) in data[$route.params.id].option"  @click=clickFn(index,i) :key='i'>
        <!-- <label for="index" class="pic" @click="gettext(i)"><input type="radio"  id="index"  v-model="choose"/>{{i}}</label> -->
        <span class="circle" :class="{'bg':choose==index}"></span>
        <span class="sp" >{{i}}</span>
        </li>
        </transition-group>
      </ul>
      <div class="bot">
       <button class="help" @click="helpFn()">求助</button>
        <a  class="next" @click="eventC">下一题</a>
      </div>
    </div>
  
  </div>
</template>

<script scope>
export default {
  data(){
    return {
      page:0,
      isShow:false,
      choose:-1,
      text:'',

    }
  },
 
  computed:{
    data(){
      return this.$store.state.data
    },
    correctArr(){
      return this.$store.state.correctArr
    }
  },
  methods:{
      eventC(){
          this.correctArr.push(this.text)
          this.page++
          this.$router.push('/second/'+this.page)
          if(this.page>=this.data.length-1){
            this.$router.push('/result')
          }
        
         
      },
      clickFn(i,v){
        this.choose=i
        this.text=v
        console.log(this.choose)
      },
     
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

#test{
  width:100%;
  height:100%;
  background:url('../assets/2.png')no-repeat;
  background-size:100% 100%;
  position:relative;
}
.sp{
  padding-left:15px;
}
.circle{
  width:20px;
  height:20px;
  border-radius:100%;
  background:#ccc;
  border:1px solid #333;
  display:inline-block;
}
input{
  width:20px;
  height:20px;
 
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

.item{
    position: absolute;
    top:40%;
     font-weight:bold;
     padding:0 41px; 
}
.item li{
  display: inline-block;
  display: flex;
  height:50px;
  
}

.item li .pic img{
  width:30px;
  height:30px;
}
.spans{
  padding-left:10px;
}
.title{
  width:100%;
  padding:0 35px;
    position: absolute;
    top:25%;
    line-height:30px;
    font-weight:bold;
  }
.help{
  color:#fff;
  position:absolute;
  left:21%;
  outline:none;
  border:0;
  background:none;
  bottom:4%;
  font-weight:bold;
  font-size:18px;
}
.next{
  color:#fff;
  position:absolute;
  right:19%;
  bottom:4%;
  font-weight:bold;
  font-size:18px;
}
.bg{
  background: orange;
}
.list-enter-active,.list-leave-active{
  transition:all 1s;
}
.list-enter,.list-leave-to{
  opacity: 0;
  transform:translateY(-10px);
}
.list-leave-active{
  position: absolute;
}

</style>