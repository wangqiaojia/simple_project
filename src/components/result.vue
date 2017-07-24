<template>
  <div id="test">
    <div class="con">
      <p class="title">以下哪个渠道办理信用卡最方便又可靠？</p>
      <div class="ite">
      <ul>
        <li @click="event(0,'来路不明的办卡小广告')"><span class="circle" :class="{'bg':choose==0}" ></span><span class="spans">来路不明的办卡小广告</span></li>
        <li @click="event(1,'极速办卡的银行合作方-随手记APP')"><span class="circle" :class="{'bg':choose==1}" ></span><span class="spans">极速办卡的银行合作方-随手记APP</span></li>
        <li @click="event(2,'收取手续费的边摊位')"><span class="circle" :class="{'bg':choose==2}" ></span><span class="spans">收取手续费的边摊位</span></li>
      </ul></div>
      <div class="bot">
        <a class="score" @click='Final()'>查看成绩</a>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'second',
  data(){
    return {
      choose:0,
      text:''
    }
  },
  methods:{
    event(i,v){
        this.choose=i
        this.text=v
        console.log(this.text)
    },
     Final(){
      this.$store.state.correctArr.push(this.text)
      
        for(let i of Object.entries(this.$store.state.data)){
        
            console.log()
            if(this.$store.state.correctArr[i[0]].indexOf(i[1].correct)!=-1){
                this.$store.state.num++
            }
            
        }
        // this.$store.state.num=this.$store.state.num*20
        console.log(this.$store.state.num)


        this.$router.push('/jiang')
    }
  }
}
</script>

<style scope>

#test{
  width:100%;
  height:100%;
  background:url(../assets/3.png)no-repeat;
  background-size:100% 100%;
  position:relative;
}
.bot{
    width:100%;
    height:30px;
     display:flex;
    -webkit-justify-content:center;
}

.ite{
    width:100%;
  
   position: absolute;
    top:40%;
     font-weight:bold;
     padding:0 35px;
    
}
.ite li{
  display: flex;
  height:50px;
 
}
.circle{
  width:20px;
  height:20px;
  border-radius:100%;
  background:#ccc;
  border:1px solid #333;
  display:inline-block;
}
.item li .pic img{
  width:30px;
  height:30px;

}
.spans{
  padding-left:10px;
}
input{
  width:20px;
  height:20px;
 
}
.title{
  width:100%;
  padding:0 32px;
    position: absolute;
    top:25%;
    line-height:30px;
    font-weight:bold;
  }

.score{
  color:#fff;
  position:absolute;
 
  bottom:8%;
  font-weight:bold;
  font-size:18px;
}
.bg{
  background: orange;
}
</style>