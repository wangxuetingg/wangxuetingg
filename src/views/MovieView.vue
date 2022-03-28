<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <button class="btn">{{btn}}</button>
    <div class="main">
        <h3>{{title}}</h3>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <img :src="item.img" alt="">
                <div>
                    <p>{{item.title}}</p>
                    <p>{{item.text}}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios"
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
  data() {
    return {
      arr:null,
      images: [
        '//liangcang-material.alicdn.com/prod/upload/6778c5b6945b47b2853ea0142ff11030.webp.png',
        '//liangcang-material.alicdn.com/prod/upload/8ed8754ff92d448cb7c44500a5b56bb2.jpg',
        "//liangcang-material.alicdn.com/prod/upload/6f1453f9e46a47ff9483405047eb263e.jpg",
        '//liangcang-material.alicdn.com/prod/upload/6778c5b6945b47b2853ea0142ff11030.webp.png',
        "//liangcang-material.alicdn.com/prod/upload/943cafb4e1a249f482c25a74d849b402.webp.png"
      ],
      btn:"打开优酷APP，流畅到起飞",
      title:"今日推荐"
    };
  },
  created(){
      this.getData()
  },
  methods:{
      async getData(){
          let {data} = await axios.get("/api/Movie")
          this.arr=data
      }
  }
};
</script>
<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe-item img{
      height: 188px;
  }
  .btn{
      background: #39a9ed;
      color:white;
      border:none;
      height: 44px;
      width:360px;
      display: block;  
      margin:20px auto;
      border-radius:5px;
      font-size: 14px;
  }
  h3{
      margin:30px 0 10px 10px;
  }
  .main{
      margin-bottom:80px;
  }
  .main ul{
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  .main ul li{
      width:120px;
  }
  .main ul li img{
      width: 100%;
  }
  .main ul li div{
      box-sizing: border-box;
      padding: 10px 5px 15px;
  }
  div p:nth-child(1){
      font-size: 15px;
  }
  div p:nth-child(2){
      font-size: 13px;
      color:#999;
  }

</style>