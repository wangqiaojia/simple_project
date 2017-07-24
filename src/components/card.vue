<template>
    <div class="box">
        <div class="top">
            <dl>
                <dt><img src="../assets/card.png" alt=""></dt>
                <dd>
                    <h4>光大“福”卡</h4>
                   
                </dd>
            </dl>
        </div>
        <main class="main"><p></p>
            <ul>
                <li> <h3>{{$store.state.num*10}}元看大片</h3><p>使用中国光大银行信用卡在指定影院仅刷{{$store.state.num*10}}</p><p>元，即可购得当天电影票一张</p></li>
                <li> <h3>其他优惠</h3><p>开卡首年送3万积分</p><p>自创自选免息分期功能</p></li>
                <li> <h3>年费信息</h3><p>首年免年费，当年消费3笔或累计金额2000</p><p>元，免次年年费</p></li>
            </ul>
            <button class="btn">立即申请</button>
        </main>
    </div>
</template>
<style scope>
    .box{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:15px 30px; 
    }
.top{
    width:100%;
    border-bottom:1px solid #ccc;
      line-height:40px;
        text-align:center;
        font-size:18px;
}
   .main{
       width:100%;
       -webkit-flex:1; 
   }
  ul{
     border-bottom:1px solid #ccc;
     padding-bottom:30px;
  }
   li{
       margin-top:30px;
   }
   h3{
       color:#FFB001;
       line-height:30px;
   }
   p{
       color:#666;
   }

   .btn{
       width:100%;
       height:50px;
       outline:none;
       border:0;
       border-radius:10px;
       line-height:50px;
       background:#FFB001;
       color:#fff;
       margin-top:30px;
       font-size:16px;
       font-weight:bold;

   }
</style>