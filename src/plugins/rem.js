//当改变视口大小时，更改html字体大小
//为了方便计算，在540px宽度的时候，设置1rem=100px
!function(){//立即执行函数
    var html=document.documentElement//获取html元素
    function rem(){
        var vw=window.innerWidth//获取当前视口的宽度
        if(vw<=640){
            html.style.fontSize=vw/640*100+"px"
        }else if(vw>640){
            html.style.fontSize="100px"
        }
    }
    rem()
    window.onresize=rem //窗口或框架被调整大小时触发  rem函数
    // onorientationchange:设置横竖屏切换时触发
    window.addEventListener("orientationchange",rem);//切换方向 横屏竖屏
}();