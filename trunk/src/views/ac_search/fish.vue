<template>
  <div class="pl_page">
    <nav class="yls_top_nav">
      <div class="tab_box"></div>
      <div class="yls_top_contain jf_flex_between">
        <a class="left" @click="goBack">
          <span class="icon iconfont">&#xe618;</span>
        </a>
        <div class="content jf_flex_center">
          搜索
        </div>
        <a class="right"></a>
      </div>
    </nav>
    <div>
      <div class="pl_search_box" id="top">
        <div class="search_box jf_flex_row jf_flex_around">
          <span class="icon iconfont">&#xe624;</span>
          <input type="text" placeholder="搜索" v-model="name" v-on:input="changeName">
          <span class="icon iconfont delete">&#xe8de;</span>
        </div>
      </div>

      <div class="pl_content">
        <div class="pl_tab_box jf_flex_row jf_flex_around">
          <div class="tab" v-for="cityType in cityTypes" :class="cityTypeId===cityType.id?'selected':''" @click="changeCityType(cityType.id)">{{cityType.name}}</div>
        </div>

        <div class="pl_city_box">
          <div class="pl_city_hot">
            <div class="city_list jf_flex_col jf_flex_start">
              <div class="item" v-for="item in data" @click="popInfo(item)">{{item.name}}[{{item.Hemisphere}}]</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--弹出框-->
    <div class="main_pop">
      <transition name="fade">
        <div class="main_pop_bg" v-show="showPop"></div>
      </transition>
      <transition name="bottom">
        <div class="main_pop_box" v-show="showPop">
          <div class="main_pop_title">
            <span>{{searchInfo.name}}资料</span>
            <span class="icon iconfont" @click="hideCanbinPop">&#xe619;</span>
          </div>
          <div class="main_pop_list">
            <div class="top_img">
              <img src="../../assets/images/game.png" alt="">
            </div>
            <div class="item jf_flex_between">
              <span class="name">名称</span>
              <span class="info">{{searchInfo.name}}</span>
            </div>
            <div class="item jf_flex_between">
              <span class="name">出现位置</span>
              <span class="info">{{searchInfo.place}}</span>
            </div>
            <div class="item jf_flex_between" v-if="searchInfo.size">
              <span class="name">体型</span>
              <span class="info">{{searchInfo.size}}</span>
            </div>
            <div class="item jf_flex_between" v-if="searchInfo.situation">
              <span class="name">出现情况</span>
              <span class="info">{{searchInfo.situation}}</span>
            </div>
            <div class="item jf_flex_between">
              <span class="name">出现时间</span>
              <span class="info">{{searchInfo.showTime}}</span>
            </div>
            <div class="item jf_flex_between">
              <span class="name">所属半球</span>
              <span class="info">{{searchInfo.Hemisphere}}</span>
            </div>
            <div class="month_box jf_flex_between jf_flex_wrap">
              <div class="inner" v-for="(month,index) in searchInfo.showMonths" :class="month.show?'active':''">{{month.month}}月</div>
            </div>
          </div>
        </div>
      </transition>
    </div>


  </div>




</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        name: '',
        showPop:false,//显示弹框
        data:{},
        fish: [
          {
            "name": "香鱼",
            "place": "河流",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "兰寿金鱼",
            "place": "池塘",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "骨舌鱼",
            "place": "河流",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "雅罗鱼",
            "place": "河流",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "神仙鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "恩氏多鳍鱼",
            "place": "河流",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "21点-04点",
            "Hemisphere": "南半球"
          },
          {
            "name": "溪哥",
            "place": "河流",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "拟鳄龟",
            "place": "河流",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "21点-04点",
            "Hemisphere": "南半球"
          },
          {
            "name": "孔雀鱼",
            "place": "河流",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "中华绒螯蟹",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "吴郭鱼",
            "place": "河流",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "龙睛金鱼",
            "place": "池塘",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "温泉医生鱼",
            "place": "河流",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "黄金河虎",
            "place": "河流",
            "size": "大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "04点-21点",
            "Hemisphere": "南半球"
          },
          {
            "name": "塘鳢鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "霓虹灯鱼",
            "place": "河流",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "白斑狗鱼",
            "place": "河流",
            "size": "大",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "食人鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "巨骨舌鱼",
            "place": "河流",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "鲫鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "黑鲈鱼",
            "place": "河流",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "蓝腮太阳鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "斗鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "彩虹鱼",
            "place": "河流",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "花羔红点鲑",
            "place": "悬崖上",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "金鳟",
            "place": "悬崖上",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "樱花钩吻鲑",
            "place": "悬崖上",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "雀鳝",
            "place": "池塘",
            "size": "大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "金鱼",
            "place": "池塘",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "鲤鱼",
            "place": "池塘",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "淡水龙虾",
            "place": "池塘",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "鲶鱼",
            "place": "池塘",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "锦鲤",
            "place": "池塘",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "鲟鱼.",
            "place": "出海口",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "竹荚鱼",
            "place": "大海",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "凤尾鱼",
            "place": "大海",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "04点-21点",
            "Hemisphere": "南半球"
          },
          {
            "name": "条石鲷",
            "place": "大海",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "裸胸鳝",
            "place": "大海",
            "size": "细长",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "鳐鱼",
            "place": "大海",
            "size": "大",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "04点-21点",
            "Hemisphere": "南半球"
          },
          {
            "name": "旗鱼",
            "place": "码头",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "小丑鱼",
            "place": "大海",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "吸盘鱼",
            "place": "大海",
            "size": "中",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "鲨鱼",
            "place": "大海",
            "size": "背鳍",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "鬼头刀",
            "place": "码头",
            "size": "大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "矛尾鱼",
            "place": "大海",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "双髻鲨",
            "place": "大海",
            "size": "背鳍",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "鲸鲨",
            "place": "大海",
            "size": "背鳍",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "鲈鱼",
            "place": "大海",
            "size": "大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "鲷鱼",
            "place": "大海",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "海马",
            "place": "大海",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "耳带蝴蝶鱼",
            "place": "大海",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "太平洋桶眼鱼",
            "place": "大海",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "21点-04点",
            "Hemisphere": "南半球"
          },
          {
            "name": "拟刺尾鲷",
            "place": "大海",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "锯鲨",
            "place": "大海",
            "size": "背鳍",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "南半球"
          },
          {
            "name": "五彩鳗",
            "place": "大海",
            "size": "细长",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "刺豚",
            "place": "大海",
            "size": "细长",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "比目鱼",
            "place": "大海",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "翻车鱼",
            "place": "大海",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "04点-21点",
            "Hemisphere": "南半球"
          },
          {
            "name": "狮子鱼",
            "place": "大海",
            "size": "背鳍",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "白面弄鱼",
            "place": "码头",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "兰寿金鱼",
            "place": "池塘",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "北半球"
          },
          {
            "name": "黄鲈鱼",
            "place": "河流",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "雅罗鱼",
            "place": "河流",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "北半球"
          },
          {
            "name": "溪哥",
            "place": "河流",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "北半球"
          },
          {
            "name": "红目鲫",
            "place": "河流",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "龙睛金鱼",
            "place": "池塘",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "北半球"
          },
          {
            "name": "泥鳅",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "塘鳢鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点09点",
            "Hemisphere": "北半球"
          },
          {
            "name": "鲫鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "黑鲈鱼",
            "place": "河流",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "蓝腮太阳鱼",
            "place": "河流",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "09点-16点",
            "Hemisphere": "北半球"
          },
          {
            "name": "远东哲罗鱼",
            "place": "悬崖上",
            "size": "大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "北半球"
          },
          {
            "name": "花羔红点鲑",
            "place": "悬崖上",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "北半球"
          },
          {
            "name": "金鳟",
            "place": "悬崖上",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "北半球"
          },
          {
            "name": "樱花钩吻鲑",
            "place": "悬崖上",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "北半球"
          },
          {
            "name": "蝌蚪",
            "place": "池塘",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "金鱼",
            "place": "池塘",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "鲤鱼",
            "place": "池塘",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "锦鲤",
            "place": "池塘",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "北半球"
          },
          {
            "name": "鲟鱼",
            "place": "出海口",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "竹荚鱼",
            "place": "大海",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "凤尾鱼",
            "place": "大海",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "04点-21点",
            "Hemisphere": "北半球"
          },
          {
            "name": "鱿鱼",
            "place": "大海",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "条石鲷",
            "place": "大海",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "旗鱼",
            "place": "码头",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "鲽鱼",
            "place": "大海",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "海蝴蝶",
            "place": "大海",
            "size": "特小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "矛尾鱼",
            "place": "大海",
            "size": "特大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "鲈鱼",
            "place": "大海",
            "size": "大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "鲷鱼",
            "place": "大海",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "灯笼鱼",
            "place": "大海",
            "size": "中偏大",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-09点",
            "Hemisphere": "北半球"
          },
          {
            "name": "太平洋桶眼鱼",
            "place": "大海",
            "size": "小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "21点-04点",
            "Hemisphere": "北半球"
          },
          {
            "name": "比目鱼",
            "place": "大海",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "鲔鱼",
            "place": "码头",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "皇带鱼",
            "place": "大海",
            "size": "中偏小",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          }
        ],
        worm: [
          {
            "name": "斑缘点粉蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "04点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "凤蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "04点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "大白斑蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "大桦斑蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "04点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "大蓝闪蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-08点",
            "Hemisphere": "南半球"
          },
          {
            "name": "彩袄蛱蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "红颈凤蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "亚历山大凤蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "飞蛾",
            "place": "户外灯光附近飞行",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-04点",
            "Hemisphere": "南半球"
          },
          {
            "name": "皇蛾",
            "place": "树干(除椰子和香蕉树等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-04点",
            "Hemisphere": "南半球"
          },
          {
            "name": "日落蛾",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "中华剑角蝗",
            "place": "草地(地面跳跃)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "飞蝗",
            "place": "草地(地面跳跃)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "稻蝗",
            "place": "草地(地面跳跃)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "蚱蜢",
            "place": "草地(地面跳跃)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "蟋蟀",
            "place": "草地(地面跳跃)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "17点-08点",
            "Hemisphere": "南半球"
          },
          {
            "name": "铃虫",
            "place": "草地(地面跳跃)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "17点-08点",
            "Hemisphere": "南半球"
          },
          {
            "name": "螳螂",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "兰花螳螂",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "黄蜂.",
            "place": "摇晃或敲击树干落下蜂巢中出现",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "寒蝉",
            "place": "树干(除椰子和香蕉树等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "红蜻蜓",
            "place": "水边(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "绿胸晏蜓",
            "place": "水边(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "无霸勾蜓",
            "place": "水边(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "南半球"
          },
          {
            "name": "水黾",
            "place": "池塘(水面滑行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "龙虱",
            "place": "河流或池塘里",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "田鳖",
            "place": "河流或池塘里",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-08点",
            "Hemisphere": "南半球"
          },
          {
            "name": "虎甲虫",
            "place": "草地(地面爬行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "提琴虫",
            "place": "树桩",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "星天牛",
            "place": "树桩",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "琉璃星天牛",
            "place": "树桩",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "雪隐金龟",
            "place": "草地(地面爬行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "宝石金龟",
            "place": "树干(除椰子和香蕉树等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "23点-08点",
            "Hemisphere": "南半球"
          },
          {
            "name": "日铜锣花金龟",
            "place": "树干(除椰子和香蕉树等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "大锹形虫",
            "place": "树干(除椰子和香蕉树等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "23点-08点",
            "Hemisphere": "南半球"
          },
          {
            "name": "竹节虫",
            "place": "树干(除椰子和香蕉树等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "04点-08点.17点-19点",
            "Hemisphere": "南半球"
          },
          {
            "name": "叶竹节虫",
            "place": "树上拟态为叶片",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "蓑衣虫",
            "place": "树干(摇晃或敲击垂下)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "蚂蚁",
            "place": "地面(下雨或有腐烂的大头菜等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "寄居蟹",
            "place": "沙滩(平时像是个贝壳)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-08点",
            "Hemisphere": "南半球"
          },
          {
            "name": "海蟑螂",
            "place": "沙滩",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": false
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "苍蝇",
            "place": "飞行(腐烂的大头菜和垃圾等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "蚊子",
            "place": "随机出现(飞到附近会有嗡嗡声)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "17点-04点",
            "Hemisphere": "南半球"
          },
          {
            "name": "跳蚤",
            "place": "居民身上",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "蜗牛",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "南半球"
          },
          {
            "name": "鼠妇",
            "place": "岩石(敲击)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "23点-16点",
            "Hemisphere": "南半球"
          },
          {
            "name": "蜈蚣",
            "place": "岩石(敲击)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-23点",
            "Hemisphere": "南半球"
          },
          {
            "name": "蜘蛛",
            "place": "树干(摇晃或敲击垂F)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-08点",
            "Hemisphere": "南半球"
          },
          {
            "name": "蝎子",
            "place": "草地和普通地面(靠近会主动攻击)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-04点",
            "Hemisphere": "南半球"
          },
          {
            "name": "白粉蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "04点-19点",
            "Hemisphere": "北半球"
          },
          {
            "name": "斑缘点粉蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "04点-19点",
            "Hemisphere": "北半球"
          },
          {
            "name": "凤蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "04点-19点",
            "Hemisphere": "北半球"
          },
          {
            "name": "乌鸦凤蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "04点-19点",
            "Hemisphere": "北半球"
          },
          {
            "name": "大白斑蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "08点-19点",
            "Hemisphere": "北半球"
          },
          {
            "name": "大蓝闪蝶",
            "place": "绿地(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": false
              },
              {
                "month": 5,
                "show": false
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-08点",
            "Hemisphere": "北半球"
          },
          {
            "name": "飞蛾",
            "place": "户外灯光附近飞行",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-04点",
            "Hemisphere": "北半球"
          },
          {
            "name": "螳螂",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "北半球"
          },
          {
            "name": "兰花螳螂",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "北半球"
          },
          {
            "name": "蜜蜂",
            "place": "花丛附近(飞行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "北半球"
          },
          {
            "name": "黄蜂",
            "place": "摇晃或敲击树干落下蜂巢中出现",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "蝼蛄",
            "place": "地面下(听声音挖掘地面)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": false
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": false
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "椿象",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "人面椿象",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "19点-08点",
            "Hemisphere": "北半球"
          },
          {
            "name": "瓢虫",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": false
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "08点-17点",
            "Hemisphere": "北半球"
          },
          {
            "name": "虎甲虫",
            "place": "草地(地面爬行)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": false
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "星天牛",
            "place": "树桩",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "蚂蚁",
            "place": "地面(下雨或有腐烂的大头菜等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "寄居蟹",
            "place": "沙滩(平时像是个壳)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-08点",
            "Hemisphere": "北半球"
          },
          {
            "name": "海蟑螂",
            "place": "沙滩",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "苍蝇",
            "place": "飞行(腐烂的大头菜和垃圾等)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "跳蚤",
            "place": "居民身上",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": false
              },
              {
                "month": 2,
                "show": false
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": false
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "蜗牛",
            "place": "花朵上(会逃走)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "全天",
            "Hemisphere": "北半球"
          },
          {
            "name": "鼠妇",
            "place": "岩石(敲击)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "23点-16点",
            "Hemisphere": "北半球"
          },
          {
            "name": "蜈蚣",
            "place": "岩石(敲击)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": false
              },
              {
                "month": 8,
                "show": false
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "16点-23点",
            "Hemisphere": "北半球"
          },
          {
            "name": "蜘蛛",
            "place": "树干(摇晃或敲击)",
            "situation": "正常",
            "showMonths": [
              {
                "month": 1,
                "show": true
              },
              {
                "month": 2,
                "show": true
              },
              {
                "month": 3,
                "show": true
              },
              {
                "month": 4,
                "show": true
              },
              {
                "month": 5,
                "show": true
              },
              {
                "month": 6,
                "show": true
              },
              {
                "month": 7,
                "show": true
              },
              {
                "month": 8,
                "show": true
              },
              {
                "month": 9,
                "show": true
              },
              {
                "month": 10,
                "show": true
              },
              {
                "month": 11,
                "show": true
              },
              {
                "month": 12,
                "show": true
              }
            ],
            "showTime": "19点-08点",
            "Hemisphere": "北半球"
          }
        ],
        cityTypes:[{id:1,name:'鱼类'},{id:2,name:'昆虫'}],
        cityTypeId:1,//1：国内 2：国际
        searchInfo:{}
      }
    },
    created(){
      this.data = this.fish;
    },
    mounted(){


    },
    methods:{
      //切换城市种类1：国内 2：国际
      changeCityType:function(id){
        this.cityTypeId = parseInt(id);
        id === 1?this.data = this.fish:this.data = this.worm;
      },
      //点击弹出框
      popInfo:function(item){
        this.showPop = true;
        this.searchInfo = item;
      },
      hideCanbinPop:function(){
        this.showPop = false;
      },
      //监听改变搜索内容
      changeName:function () {
        console.log(this.name);
        if(!this.name){
          this.cityTypeId === 1?this.data = this.fish:this.data = this.worm;
          return;
        }
        var vm = this;
        let res = JSON.parse(JSON.stringify(vm.data));
        this.data = res.filter(item=>{
          console.log(item.name.indexOf(vm.name) !== -1);
          return item.name.indexOf(vm.name)!==-1
        })
      },
      //删除搜索内容
      clearName:function () {
        this.name = '';
        this.cityTypeId === 1?this.data = this.fish:this.data = this.worm;
      },
      //返回
      goBack:function () {
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
  .pl_page{
    background-color:#fff;
  }

  /*导航栏start*/
  nav.yls_top_nav{
    position: relative;
    z-index: 200;
    font-size: 16px;
  }
  nav.yls_top_nav .tab_box {
    box-sizing: border-box;
    height: 100%;
    padding-bottom: 45px;
    overflow: auto;
  }
  nav.yls_top_nav .yls_top_contain{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    height: 45px;
    width: 100%;
    color: #fff;

    /*-moz-box-shadow: 1px 1px 3px #ddd;*/
    /*-webkit-box-shadow: 1px 1px 3px #ddd;*/
    /*box-shadow: 1px 1px 3px #ddd;*/
  }
  .yls_top_contain .left {
    width: 40px;
    height: 100%;
    padding: 0 15px;
  }
  .yls_top_contain .left .icon{
    font-size: 18px;
    color: rgba(0,0,0,0.6);
    line-height: 45px;
  }
  .yls_top_contain .left p.back {
    width: 18px;
    height: 18px;
  }
  .yls_top_contain .left p.back img {
    width: 100%;
  }
  .yls_top_contain .content {
    position: relative;
    width: auto;
    height: 100%;
    font-size: 16px;
    color: #4f4f4f;
  }
  .yls_top_contain .right {
    width: 40px;
    display: inline-block;
    padding: 0 15px;
    text-align: center;
  }

  /*导航栏end*/
  .pl_search_box {
    padding: 15px 15px 10px 15px;
  }
  .pl_search_box .search_box {
    width: 100%;
    height: 30px;
    background-color: #f5f5f9;
    border-radius: 15px;
    -moz-box-shadow: 1px 1px 3px #ddd;
    -webkit-box-shadow: 1px 1px 3px #ddd;
    box-shadow: 1px 1px 3px #ddd;
  }
  .pl_search_box .search_box span {
    font-size: 16px;
    padding: 2px 10px;
  }
  .pl_search_box .search_box span.delete {
    color: #ccc;
  }
  .pl_search_box .search_box input {
    height: 30px;
    width: calc(100vw - 110px);
    line-height: 30px;
    background-color: #f5f5f9;
    /*text-indent: 8px;*/
  }

  .pl_content{
    position: relative;
  }
  .pl_content .alphabet{
    position: fixed;
    right: 0;
    top: 100px;
    width: 34px;
    height: calc(100vh - 120px);
    padding: 5px 0;
    color: #3587EE;
  }
  .pl_content .alphabet .item{
    width: 100%;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    padding:2px 0;
  }
  @media screen and (max-width: 330px){
    .pl_content .alphabet .item{
      width: 100%;
      text-align: center;
      font-size: 12px;
      line-height: 12px;
      padding:2px 0;
      transform: scale(0.8);
    }
  }
  .pl_tab_box{
    /*padding-right: 34px;*/
    height: 50px;
  }
  .pl_tab_box .tab{
    text-align: center;
    font-size: 14px;
    height: 100%;
    line-height: 50px;
    position: relative;
    font-weight: bold;
  }
  .pl_tab_box .selected{
    color: #3587EE;
  }
  .pl_tab_box .selected:after{
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background-color: #3587EE;
  }

  .pl_city_box{
    background-color: #fff;
  }
  .pl_city_box .pl_city_hot{
    width: 100%;
  }
  .pl_city_box .pl_city_hot .title{
    padding: 0 34px 0 10px;
    height: 30px;
    text-align: left;
    line-height: 30px;
    color:#4f4f4f;
    font-weight: bold;
    background-color: #f5f5f9;
  }
  .pl_city_box .pl_city_hot .city_box{
    padding: 5px 34px 5px 10px;
    background-color: #fff;
  }
  .pl_city_box .pl_city_hot .city_box .item{
    text-align: center;
    width: 20%;
    margin: 5px 0;
    height: 30px;
    border: 1px solid rgba(0,0,0,.2);
    font-size: 12px;
    border-radius: 8px;
    line-height: 30px;
    color:rgba(0,0,0,.6);
    margin-right: 5%;
  }
  .pl_city_box .pl_city_hot .city_box .item:nth-child(4n+4) {
    margin-right: 0;
  }
  .pl_city_box .pl_city_hot .city_box .selected{
    border: 1px solid #3587EE;
    color: #3587EE;
  }
  .pl_city_box .pl_city_hot .city_list{
    padding: 0 34px 0 10px;
  }
  .pl_city_box .pl_city_hot .city_list .item{
    width: 100%;
    padding: 10px 0;
    text-align: left;
    font-size: 14px;
    position: relative;
  }

  .pl_city_box .pl_city_hot .city_list .item:after{
    position: absolute;
    content:"";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,.1);
  }

  .top_img{
    width: 190px;
    /*height: calc(30vw);*/
    background-color: lightcoral;
    margin: 0 auto;
    line-height:0
  }

  .top_img img{
    width:190px;
    /*height: 100%;*/
    /*margin: 0 auto;*/
  }

  .main_pop_list .item{
    width: 100%;
    padding: 10px 0;
    text-align: left;
    font-size: 14px;
    position: relative;
  }

  .main_pop_list .item:after{
    position: absolute;
    content:"";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,.1);
  }
  .main_pop_list .item span{
    display: inline-block;
  }

  .main_pop_list .item .name,.main_pop_list .item .info{
    display: inline-block;
    padding: 0 15px;
    /*font-size: 16px;*/
  }

  .main_pop_list .month_box{
    padding: 10px;
    width: calc(50vw);
    height: auto;
    /*background-color: lightcoral;*/
    margin: 0 auto;
  }
  .main_pop_list .month_box .inner{
    width: calc(15vw);
    height: 24px;
    background-color: #eee;
    border-radius: 3px;
    text-align: center;
    line-height: 24px;
    margin: 3px 0;
    color: #fff;
  }
  .main_pop_list .month_box .inner.active{
    background-color: #623333;
  }
</style>
