<template>
  <div class="Variety">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item><img src="https://liangcang-material.alicdn.com/prod/upload/9e9d0845c01446d58e36c88fa1169f9c.jpg?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
      <van-swipe-item><img src="https://liangcang-material.alicdn.com/prod/upload/1a38c8746231404f915084b4d479c953.jpg?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
      <van-swipe-item><img src="https://liangcang-material.alicdn.com/prod/upload/322d9e81150943efb38d244fa7ad407a.jpg?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
      <van-swipe-item><img src="https://liangcang-material.alicdn.com/prod/upload/3f07a5e0283a43f9a139be9ba732a063.jpg?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
      <van-swipe-item><img src="https://liangcang-material.alicdn.com/prod/upload/5a0b4896c1484554b05168d2788a4c79.jpg?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
      <van-swipe-item><img src="https://liangcang-material.alicdn.com/prod/upload/70482dbe696e41e78770f68c54796a71.jpg?x-oss-process=image/resize,w_751/format,webp/interlace,1" /></van-swipe-item>
    </van-swipe>


    <div class="img">
      <img src="//ykimg.alicdn.com/develop/image/2020-12-17/c9d83e11cb40c71503c2d6033bca270a.jpg" />
    </div>
    

    <div class="jingcai">
      <h3>精彩热播</h3>

      <ul class="zongyi">
        <li>
            <div></div>
            <p>麻花🍜默默咽下口水</p>
            <p>沈腾长沙逛吃嗦粉啃肉包</p>
        </li>

         <li>
            <div class="div1"></div>
            <p>没谈过💞拆CP？</p>
            <p>男女新人分头约会人文CP</p>
        </li>

         <li>
            <div class="div2"></div>
            <p>青春守艺人🌟垮掉</p>
            <p>费道具！守艺团学魔术</p>
        </li>

         <li>
            <div class="div3"></div>
            <p>天赐3🤩太狂了！</p>
            <p>周深版算你狠大秀方言Rap</p>
        </li>

         <li>
            <div class="div4"></div>
            <p>王牌加更😨暗箭难防</p>
            <p>沈腾小岳岳沉浸式表演暗算</p>
        </li>

         <li>
            <div class="div5"></div>
            <p>追光哥哥🔥杀疯了</p>
            <p>王炸！符龙飞檀健次合体齐舞</p>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "VarietyView",
 
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;

}

.my-swipe .van-swipe-item img{
  width:375px;
  height:188px;
}

.img img{
  width:375px;
  height:64px;
  margin-top:15px;
}

.jingcai h3{
    margin-top:10px;
    margin-left:10px;
}
.zongyi li{
  width:49%;
  height:40%;
  margin-top:10px;
 
  
}
.zongyi li div{
  background:url("https://liangcang-material.alicdn.com/prod/upload/d3ed8aad72e342868f4720e9a083b3aa.gif?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div1{
  background:url("https://liangcang-material.alicdn.com/prod/upload/2bfd412968f54fbf91da7de406fb8311.jpg?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div2{
  background:url("https://liangcang-material.alicdn.com/prod/upload/bfef3b61e9694bae93e95a29b23218c1.jpg?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div3{
  background:url("https://liangcang-material.alicdn.com/prod/upload/68dd5238fe8142989fc136ee46e7d645.jpg?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div4{
  background:url("https://liangcang-material.alicdn.com/prod/upload/275c2167beb94babac10411384a60fd0.gif?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}

.zongyi li .div5{
  background:url("https://liangcang-material.alicdn.com/prod/upload/022cb003a9424b1c89bb4659c5802d32.jpg?x-oss-process=image/resize,w_376/format,webp/interlace,1") no-repeat;
  background-size:100% 100%;
  width:185px;
  height:104px;
  margin-top:10px;
}
.zongyi{
  display:flex;
  /* 换行 */
  flex-wrap: wrap;
  /*左右换行 */
  justify-content: space-between;
  
}


.zongyi li p{
  margin-top:3px;
  font-size:13px;
  margin-left:9px;
  margin-top:8px;
  
}
</style>
