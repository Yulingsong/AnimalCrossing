var Rxports = {
  /*-------------------------打印方法---------------------------*/
  log: function (data) {
    console.log(JSON.parse(JSON.stringify(data)));
  },

  /*-------------------------cookie方法---------------------------*/
  //存
  addCookie: function (sName, sValue, iDay) {
    if (iDay) {
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + iDay);
      document.cookie = sName + '=' + sValue + '; PATH=/; EXPIRES=' + oDate.toGMTString();
    } else {
      document.cookie = sName + '=' + sValue + '; PATH=/';
    }
  },
  //取
  getCookie: function (sName) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');
      if (arr2[0] === sName) {
        return arr2[1];
      }
    }
  },
  //删
  removeCookie: function (sName) {
    this.addCookie(sName, 1, -1);
  },
  /*-------------------------cookie方法---------------------------*/
  //获取url参数
  getLink: function (arg, link) {
    var data = [];

    //I want arg is array
    if (typeof arg == 'string') {
      data.push(arg);
    } else if (Array.isArray(arg)) {
      for (var ii = 0, num = arg.length; ii < num; ii++) {
        data.push(arg[ii]);
      }
    } else if (!arg) {
      data = ['gyadd_all'];
    }

    //if link == false,this is window.location.href
    var oLink = link || window.location.href;
    //if link have '?',we will split str via '&' to array
    var str = oLink.indexOf('?') === -1 ? '' : oLink.substring(oLink.indexOf('?') + 1);
    var arr = [];
    str.indexOf('&') !== -1 ? arr = str.split('&') : arr.push(str);

    //this is convert an array to json
    var json = {};
    var toReturn = {};
    for (var ij = 0, num = arr.length; ij < num; ij++) {
      json[arr[ij].substring(0, arr[ij].indexOf('='))] = arr[ij].substring(arr[ij].indexOf('=') + 1, arr[ij].length);
    }
    //this is screening arguments and return result
    for (var ik = 0, num = data.length; ik < num; ik++) {
      for (var name in json) {
        if (data.length === 1 && data[0] === 'gyadd_all') {
          toReturn[name] = json[name];
        } else {
          if (data[ik] === name) {
            toReturn[name] = json[name];
          }
        }
      }
    }
    return toReturn;
  },

  //是否是数组
  isArray: function (val) {
    return !!val && Array.isArray(val);
  },
  //是否是微信环境
  isWeixin: function () {
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === "micromessenger"
  },
  //判断设备
  judgeClient:function(){
    var u = navigator.userAgent;
    if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
      return 1;
    }else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
      return 2;
    }else{
      return 3;
    }
  },
  //点击滚到指定位置
  scrollElement: function (ele, distance) {


    var eleScrollTop = ele.getBoundingClientRect().top + getScrollTop() - distance;

    var scrollTopMove = setInterval(interValScroll, 5);                                                             //循环

    var iChage = 0;                                                                                                 //循环计数

    var elasticity = 1;                                                                                             //变化的计量

    var thisScrollTop;

    var changeDistanceScrollTop = eleScrollTop - getScrollTop();                                           //真实的相差距离

    function interValScroll() {

      elasticity = (25 - iChage) / 25 * .9 + 1;                                                                   //变化的计量=(25-此时的计数)/25*.9+1; 用于乘法的计量，大概变化过程：1.5 -> 1 -> 0.5 ，模拟平滑过渡

      thisScrollTop = getScrollTop() + changeDistanceScrollTop / 50 * elasticity;                        //计算此时的距离

      //console.log('页面滚动距离'+getScrollTop());

      window.scrollTo(0, thisScrollTop);

      iChage++;                                                                                                   //计数

      if (iChage == 50) {

        window.scrollTo(0, eleScrollTop);


        clearInterval(scrollTopMove);                                                                           //如果到50，则结束循环

        //console.log('最后滚动为止：'+eleScrollTop)


      }




    }

    //兼容性修正
    function getScrollTop(){

      var scrollTop=0;

      if(document.documentElement&&document.documentElement.scrollTop){

        scrollTop=document.documentElement.scrollTop;

      }else if(document.body){

        scrollTop=document.body.scrollTop;
      }
      return scrollTop;
    }

  },

  //匀速动画方法
  speedAnimate:function (element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
      var current = element.offsetLeft;
      var step = 10;
      step = target > current?step:-step;
      current += step;
      if(Math.abs(current - target) > Math.abs(step)){
        element.style.left = current + 'px';
      }else{
        clearInterval(element.timeId);
        element.style.left = target + 'px';
      }
    },20);
  },
  //不匀速动画方法
  unSpeedAnimate:function (element, target,speed) {
    console.log(element, target);
    // 清理定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
      //获取元素的当前位置
      var current = element.offsetLeft;
      //移动的步数
      var step = (target - current) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      current += step;
      element.style.left = current + "px";
      if (current === target) {
        //清理定时器
        clearInterval(element.timeId);
      }
    }, speed);
  },
  //格式化日期
  dateFormat: function (date, fmt) {
    if (!fmt) fmt = "YYYY-mm-dd";
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
    }
    return fmt;
  },
  //获取指定日期指定天数之后的日期
  getTomorrow:function (date,day) {
    var dd = new Date(date);
    dd.setDate(dd.getDate() + day);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return y + "-" + m + "-" + d;
  },
  //将日期格式化成数字
  formatIntDate:function (date){
    let arr = date.split('-');
    let str = '';
    for(let val of arr){
      str += val;
    }
    return parseInt(str);
  },
};

export default Rxports;
