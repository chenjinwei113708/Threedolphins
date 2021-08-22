<template>
  <main class="home">
    <section class="home_banner" need-animation>
      <img src="/images/home/mobile/banner1.png" class="banner_img mobile" />

      <div class="content_wrap">
        <article class="home_banner_info">
          <div class="home_banner_info_wrap">
            <h2 class="home_hd">
              专业的墙体彩绘设计施工公司
            </h2>
            <ul class="info_ul">
              <li class="info_li">业务多元化</li>
              <li class="info_li_split">|</li>
              <li class="info_li">服务定制化</li>
              <li class="info_li_split">|</li>
              <li class="info_li">市场全国化</li>
            </ul>
            <img src="../assets/images/home/xialla.png" class="info_img" />
          </div>
        </article>
      </div>
    </section>

    <section class="home_slogan" need-animation>
      <h3 class="home_block_hd">
        关于我们
      </h3>
      <p class="home_block_p">
        我们立足广州，服务全国，拥有一支强有实力的设计画师队伍。为您提供“高品位、高质量”的墙体彩绘设计施工服务。
      </p>
      <div class="slogan_btn_wrap">
        <v-button type="link" href="/story" route linkType="primary">
          详细了解
        </v-button>
      </div>
      <div class="slogan_dots">
        <div class="dot dot1">
          <div class="dot_cirle big"></div>
          <p class="dot_text">
            {{ $t("index.sloganSection.regions.Guangzhou") }}
          </p>
        </div>
      </div>
    </section>

    <section class="home_service">
      <h3 class="home_block_hd" need-animation>
        {{ $t("index.service.title") }}
      </h3>
      <p class="home_block_p" need-animation>
        三只海豚秉持“多元化、合作、共赢”的经营理念，致力于成为全国领先的墙体彩绘设计施工企业。
      </p>
      <article class="home_service_content">
        <section
          class="home_service_content_item"
          v-for="(item, index) in serviceList"
          :key="index"
          need-animation
        >
          <!-- <img
            :src="`/images/home/0${index + 1}.png`"
            class="home_service_content_img pc"
          />
          <img
            :src="`/images/home/mobile/0${index + 1}.png`"
            class="home_service_content_img mobile"
          /> -->
          <span class="home_service_content_num">0{{ index + 1 }}</span>
          <h4 class="home_service_content_hd">
            {{ $t(item.title) }}
          </h4>
          <p class="home_service_content_p">
            {{ $t(item.content) }}
          </p>
        </section>
      </article>
    </section>

    <section class="home_advantage">
      <h3 class="home_block_hd" need-animation>
        {{ $t("index.advantage.title") }}
      </h3>
      <p class="home_block_p" need-animation>
        {{ $t("index.advantage.desc") }}
      </p>
      <article class="home_advantage_content">
        <section
          class="home_advantage_item"
          v-for="(item, index) in advantageList"
          :key="index"
          need-animation
        >
          <img
            :src="`/images/home/advantage-${index + 1}.png`"
            class="home_advantage_item_img"
          />
          <h4 class="home_advantage_item_hd">
            {{ $t(item.title) }}
          </h4>
          <p
            class="home_advantage_item_p"
            v-for="(p, subIndex) in item.content"
            :key="subIndex"
          >
            {{ $t(p) }}
          </p>
        </section>
      </article>
    </section>

  </main>
</template>

<script lang="ts">
import Vue from "vue";
import VButton from "@/components/Button.vue";
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { BounceInUp } from "@/util/animation";
// import 'swiper/css/swiper.css';

interface IData {
  // newsList: any[];
  [key: string]: any;
}

declare const Swiper: any;

const companyCatId = 31;

// let isIE = true;
let mySwiper: any = null;

// if (process.client) {
//   { src: "@/plugins/vue-swiper", ssr: false }
//   isIE = !!(window as any).ActiveXObject || 'ActiveXObject' in window;
//   isIE = false;
//   if (!isIE) {
//     require('@/plugins/vue-swiper');
//   }
// }

export default Vue.extend({
  name: "index",
  components: {
    VButton
    // Swiper,
    // SwiperSlide
  },

  head() {
    return {
      title: '广州三只海豚文化传播公司 - 中国领先的专业墙体彩绘设计施工公司',
      meta: [
        {
          name: "keywords",
          content: "中国领先的专业墙体彩绘设计施工公司,threedolphins,threedolphinsinc"
        },
        {
          hid: "description",
          name: "description",
          content:
            "广州三只海豚文化传播公司(Guangzhou Threedolphins Culture Ltd.) 立足广州，服务全国，拥有一支强有实力的设计画师队伍。为您提供“高品位、高质量”的墙体彩绘设计施工服务。"
        }
      ],
      script: [{ src: "/lib/swiper-4.5.3.min.js" }],
      link: [{ href: "/lib/swiper-4.5.3.min.css", rel: "stylesheet" }]
    };
  },

  data() {
    return {
      // isIE,
      swiperOption: {
        slidesPerView: "auto",
        // preventClicks: false,
        loop: true,
        autoplay: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: "-45%",
          depth: 300,
          modifier: 1,
          slideShadows: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      serviceList: [
        {
          title: "墙体彩绘",
          content: "墙体彩绘来源于古老的壁画艺术，结合了欧美的涂鸦，被众多前卫设计师带入了现代家居文化设计中，形成了独具一格的家居装修风格。"
        },
        {
          title: "挂画定制",
          content: "是一种集装修功能与美学欣赏于一体的艺术品。随着科学技术的进步与发展，挂画的载体与表现形式也愈来愈丰富，大大提高了当今人们对品质生活的追求和热爱。"
        },
        {
          title: "家居饰品",
          content: "家饰，即家居装饰的简称。相对“家装”而言，前者主要是侧重于感官————特别是视觉上的效果。后者则偏重于功能上的，即一般所说的装修。主要是通过摆设、粘贴、悬挂、铺垫一些物品，让居室增添美感。"
        },
        {
          title: "喷绘广告",
          content: "广告喷绘一般是指户外广告画面输出，它输出的画面相对较大，主要利用的宣传平台有户外高速公路，大型超市，高空建筑等众多的广告牌画面，材料主要采用大型宽幅的灯布，灯片和背胶等三种材料，喷绘的画面精度主要是35~50dpi，广告喷绘以其大幅，传递信息详细，吸引力强而广受企业和组织的喜爱！"
        },
        {
          title: "产品上色",
          content: "丰富产品外观，用色彩图案区分产品性格，达到产品创造设计的预期效果。"
        }
      ],
      advantageList: [
        {
          title: "丰富的设计施工经验",
          content: [
            "8年彩绘行业经验积累",
            "墙绘经验沉淀丰富"
          ]
        },
        {
          title: "高效的业务团队",
          content: [
            "富有创造力的年轻团队",
            "极具敏捷高效"
          ]
        },
        {
          title: "领先的技术优势",
          content: [
            "用工具解决问题",
            "用领先的技术来支持业务"
          ]
        },
        {
          title: "丰富的行业资源",
          content: [
            "行业资源丰富",
            "有着优质的产业链整合能力"
          ]
        },
        {
          title: "全国视野看业务",
          content: [
            "基于全国用户反馈提升服务",
            "全国渠道视野"
          ]
        }
      ],
      // newsList: <any[]>[]
    };
  },


  mounted() {
    setTimeout(this.initSwiper, 800);
    BounceInUp.init();

  },

  beforeDestroy() {
    this.destroySwiper();
    BounceInUp.destroy();
  },

  methods: {
    initSwiper() {
      if (typeof Swiper === "undefined") {
        return;
      }
      mySwiper = new Swiper(".moment_swiper-container", this.swiperOption);
    },
    destroySwiper() {
      try {
        mySwiper && mySwiper.destroy();
      } catch (e) {}
      mySwiper = null;
    },
  }
});
</script>

<style lang="scss">
@import "@/assets/scss/animation.scss";

.home {
  .home_block_hd {
    line-height: 1;
    font-weight: bold;
    font-size: px2rem(46px);
    color: #111b28;
    text-align: center;
    text-transform: capitalize;
  }
  .home_block_p {
    line-height: 1.5;
    font-size: px2rem(26px);
    color: #404040;
    text-align: center;
  }

  .home_banner {
    // height: px2rem(958px);
    overflow: hidden;
    position: relative;
    background-color: #091017;
    text-transform: capitalize;

    .content_wrap {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
  }
  .banner_video,
  .banner_img {
    display: block;
    z-index: 0;

    &.mobile {
      display: none;
    }
  }

  .home_banner_info,
  .home_banner_info_wrap {
    animation-duration: 0.8s;
    animation-delay: 3.2s;
    animation-fill-mode: forwards;
  }
  .home_banner_info {
    line-height: 1;
    text-align: center;
    color: #404040;
    animation-name: cd-mask-wrapper;
    overflow: hidden;
    transform: translateX(50%);

    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      height: 100%;
      width: 2px;
      background-color: #fff;
      animation: cd-pulse 3s 1.8s both;
    }

    .home_banner_info_wrap {
      z-index: 1;
      padding: px2rem(30px) 0;
      animation-name: cd-mask-content;
      transform: translateX(-100%);
    }

    .home_hd {
      margin-bottom: px2rem(42px);
      font-size: px2rem(66px);
      font-weight: bold;
    }

    .info_ul {
      margin-bottom: px2rem(44px);
      font-size: 0;
      color: #3a424b;

      .info_li,
      .info_li_split {
        display: inline-block;
        vertical-align: top;
        font-size: px2rem(32px);
      }
      .info_li_split {
        margin: 0 px2rem(6px);
      }
    }
    .info_img {
      @include setWH(55px, 55px);
      display: block;
      margin: 0 auto;
      animation: beat 0.5s infinite alternate;
    }
  }

  .home_slogan {
    position: relative;
    height: px2rem(1200px);
    background-color: #f7f7f7;
    background-image: url("/images/home/ditu.png");
    background-repeat: no-repeat;
    background-size: px2rem(1094px) px2rem(902px);
    background-position: bottom center;
    text-align: center;

    .home_block_hd {
      padding: px2rem(112px) 0 px2rem(30px);
    }
    .home_block_p {
      & + .home_block_p {
        margin-top: px2ren(18px);
      }
    }
    .slogan_btn_wrap {
      font-size: 0;
      margin-top: px2rem(45px);
    }

    .slogan_dots {
      position: absolute;
      bottom: px2rem(19px);
      left: 0;
      right: 0;
      margin: 0 auto;
      @include setWH(719px, 303px);
      .dot1 {
        top: px2rem(167px);
        left: px2rem(590px);
      }
    }
    .dot {
      position: absolute;
      display: inline-block;
      .dot_cirle {
        position: relative;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        @include setWH(35px, 35px);
        border-radius: 50%;
        background-color: rgba($color: #005fd5, $alpha: 0.45);
        animation: breath 2s infinite alternate;

        &::before,
        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          content: "";
          display: block;
          border-radius: 50%;
        }
        &::before {
          @include setWH(27px, 27px);
          background-color: #005fd5;
        }
        &::after {
          @include setWH(13px, 13px);
          background-color: #d8ebff;
        }

        &.big {
          @include setWH(43px, 43px);
          &::before {
            @include setWH(33px, 33px);
          }
          &::after {
            @include setWH(17px, 17px);
          }
        }
      }

      .dot_text {
        position: absolute;
        bottom: -px2rem(3px);
        left: 50%;
        // margin-top: px2rem(1px);
        line-height: 1;
        font-size: px2rem(16px);
        color: #404040;
        text-align: center;
        transform: translate(-50%, 100%);
        white-space: nowrap;
      }
    }
  }

  .home_service {
    background-color: #f7f7f7;
    .home_block_hd {
      padding-top: px2rem(120px);
      margin-bottom: px2rem(20px);
    }
    .home_block_p {
      margin-bottom: px2rem(45px);
    }
    .home_service_content {
      display: flex;
      // background-image: linear-gradient(to bottom, #ffffff, #f2f4f8, #e2ebf1, #d0e2e8, #bfd9da);
      background: linear-gradient(125deg, #FFFFFF 0%, #000000 100%), linear-gradient(200deg, #FFD9E8 0%, #FFD9E8 50%, #DE95BA calc(50% + 1px), #DE95BA 60%, #7F4A88 calc(60% + 1px), #7F4A88 75%, #4A266A calc(75% + 1px), #4A266A 100%), linear-gradient(113deg, #FFD9E8 0%, #FFD9E8 40%, #DE95BA calc(40% + 1px), #DE95BA 50%, #7F4A88 calc(50% + 1px), #7F4A88 70%, #4A266A calc(70% + 1px), #4A266A 100%);
      background-blend-mode: overlay, overlay, normal;
    }
    .home_service_content_item {
      // z-index: 0;
      position: relative;
      flex: 1;
      height: px2rem(800px);
      padding: px2rem(140px) px2rem(20px) 0 px2rem(55px);
      box-sizing: border-box;
      color: #000;
      &:hover  {
        filter: brightness(80%);
      }
      & + .home_service_content_item  {
        border-left: 1px solid lightblue;
      }
    }
    .home_service_content_img {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s;

      &.mobile {
        display: none;
      }
    }
    .home_service_content_hd,
    .home_service_content_num {
      // z-index: 1;
      line-height: 1;
      font-size: px2rem(36px);
    }
    .home_service_content_num {
      display: block;
      padding-bottom: px2rem(20px);
    }
    .home_service_content_hd {
      position: relative;
      line-height: 1.1;
      padding-bottom: px2rem(24px);
      margin-bottom: px2rem(80px);
      font-weight: bold;
      text-transform: capitalize;
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: px2rem(92px);
        background-color: #fff;
      }
    }
    .home_service_content_p {
      padding-right: px2rem(40px);
      line-height: 1.6;
      font-size: px2rem(20px);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8; //行数
      -webkit-box-orient: vertical;
    }
  }

  .home_advantage {
    padding-top: px2rem(115px);
    background-color: #f7f7f7;

    .home_block_p {
      margin: px2rem(20px) 0 px2rem(46px);
    }

    .home_advantage_content {
      display: flex;
      background-image: linear-gradient(to bottom, #ffffff, #f7f7f9, #edf0f3, #e2e9eb, #d8e2e3);

    }
    .home_advantage_item {
      flex: 1;
      // box-sizing: border-box;
      height: px2rem(600px);
      text-align: center;
      // border: px2rem(3px) solid #fff;
      border-radius: px2rem(3px);
      transition: border-color 0.3s;

      &:hover  {
        filter: brightness(60%);
      }
      & + .home_advantage_item  {
        border-left: 1px solid lightblue;
      }
    }
    .home_advantage_item_img {
      display: block;
      @include setWH(105px, 105px);
      margin: px2rem(105px) auto px2rem(60px);
    }
    .home_advantage_item_hd {
      line-height: 1;
      margin-bottom: px2rem(15px);
      font-size: px2rem(34px);
      font-weight: bold;
      color: #404040;
    }
    .home_advantage_item_p {
      line-height: 1.5;
      font-size: px2rem(20px);
      color: #404040;
    }
  }

}

@media only screen and (max-width: 750px) {
  .home {
    $design-width: 750px;
    @import "@/assets/scss/mixin.scss";

    .home_block_hd {
      font-size: px2rem(38px);
    }
    .home_block_p {
      padding: 0 px2rem(50px);
      font-size: px2rem(24px);
    }

    .banner_video {
      &.pc {
        display: none;
      }
      // &.mobile {
      //   display: block;
      // }
    }
    .banner_img {
      &.mobile {
        display: block;
        width: 100%;
        // height: auto;
        height: px2rem(375px);
      }
    }

    .home_banner_info {
      .home_hd {
        margin-bottom: px2rem(28px);
        font-size: px2rem(46px);
      }

      .info_ul {
        margin-bottom: 0;

        .info_li,
        .info_li_split {
          font-size: px2rem(24px);
        }
        .info_li_split {
          margin: 0 px2rem(12px);
        }
      }

      .info_img {
        display: none;
      }
    }

    .home_slogan {
      height: px2rem(730px);
      background-image: url("/images/home/ditu.png");
      background-repeat: no-repeat;
      background-size: px2rem(547px) px2rem(451px);

      .home_block_hd {
        padding: px2rem(68px) 0 px2rem(34px);
      }
      .home_block_p {
        & + .home_block_p {
          margin-top: 0;
        }
      }
      .slogan_btn_wrap {
        margin-top: px2rem(35px);
      }

      .slogan_dots {
        bottom: px2rem(56px);
        @include setWH(530px, 215px);

        .dot1 {
          top: px2rem(190px);
          left: px2rem(375px);
        }
      }
      .dot {
        .dot_cirle {
          @include setWH(26px, 26px);

          &::before {
            @include setWH(20px, 20px);
          }
          &::after {
            @include setWH(10px, 10px);
          }

          &.big {
            @include setWH(31px, 31px);
            &::before {
              @include setWH(24px, 24px);
            }
            &::after {
              @include setWH(13px, 13px);
            }
          }
        }

        .dot_text {
          bottom: -px2rem(3px);
          font-size: px2rem(12px);
        }
      }
    }

    .home_service {
      .home_block_hd {
        padding-top: px2rem(66px);
        margin-bottom: px2rem(26px);
      }
      .home_block_p {
        margin-bottom: px2rem(45px);
      }

      .home_service_content {
        flex-wrap: wrap;
        // background-image: linear-gradient(to bottom, #ffffff, #f2f4f8, #e2ebf1, #d0e2e8, #bfd9da);
        background: linear-gradient(123deg, #2E99B0 0%, #2E99B0 40%, #FCD77F calc(40% + 1px), #FCD77F 60%, #FF2E4C calc(60% + 1px), #FF2E4C 75%, #1E1548 calc(75% + 1px), #1E1548 100%);
        
      }
      .home_service_content_item {
        flex: 0 0 100%;
        width: 100%;
        height: px2rem(700px);
        padding: px2rem(50px) px2rem(20px) 0 px2rem(38px);
      }
      .home_service_content_img {
        &.pc {
          display: none;
        }
        &.mobile {
          display: block;
        }
      }

      .home_service_content_num {
        font-size: px2rem(36px);
        color: #f7f7f7;
        padding-bottom: px2rem(10px);
      }
      .home_service_content_hd {
        font-size: px2rem(30px);
        color: #f7f7f7;
        padding-bottom: px2rem(14px);
        margin-bottom: px2rem(46px);

        &::after {
          color: #f7f7f7;
          width: px2rem(52px);
        }
      }
      .home_service_content_p {
        padding-right: px2rem(25px);
        font-size: px2rem(24px);
        color: #f7f7f7;
      }
    }

    .home_advantage {
      padding-top: px2rem(108px);

      .home_block_p {
        margin: px2rem(26px) 0 px2rem(48px);
      }

      .home_advantage_content {
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .home_advantage_item {
        flex: 0 0 100%;
        width: 100%;
        height: px2rem(500px);
        // margin-bottom: px2rem(10px);
        border-radius: px2rem(3px);

        // & + .home_advantage_item {
        //   margin-left: 0;
        // }
      }
      .home_advantage_item_img {
        @include setWH(90px, 90px);
        margin: px2rem(69px) auto px2rem(27px);
      }
      .home_advantage_item_hd {
        margin-bottom: px2rem(25px);
        font-size: px2rem(30px);
      }
      .home_advantage_item_p {
        font-size: px2rem(24px);
      }
    }

  }

  [lang="en"] .home {
    $design-width: 750px;
    @import "@/assets/scss/mixin.scss";

    .home_slogan {
      height: px2rem(770px);
    }

    .home_service {
      .home_service_content_item {
        height: px2rem(650px);
      }
    }

    .home_advantage {
      .home_advantage_item {
        height: px2rem(450px);
        padding: 0 px2rem(15px);
        box-sizing: border-box;
      }

      .home_advantage_item_hd {
        line-height: 1.2;
      }
    }
  }
}

@keyframes beat {
  0% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(5px);
  }
}

@keyframes breath {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes cd-mask-wrapper {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes cd-mask-content {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes cd-pulse {
  0%,
  30.8% {
    opacity: 0;
  }
  15.4%,
  46.2%,
  61.5%,
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
