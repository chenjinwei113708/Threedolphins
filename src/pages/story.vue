<template>
  <main class="j_story">
    <section class="story_info"  id="profile" need-animation>
      <article class="story_info_left">
        <h3 class="section_hd reverse" need-animation>
          三只海豚
        </h3>
        <p class="story_info_desc" need-animation>
          广州三只海豚文化传播有限公司成立于2013年，墙绘部门专业从事空间视觉艺术彩绘设计及施工。画师团队达60多人，由美院壁画专业、
          多年油画职业画师及美院设计专业设计师组成。我们是一群视艺术为生命的团队，致力于高品质的视觉艺术彩绘设计创作。 <br><br class="br_m">
          我们具有多年的创作设计及施工经验，承接新农村文化墙、市政街道美化、博物馆、古建彩绘、宗祠寺庙、酒店、酒吧、幼儿园、餐厅背景墙、
          3D立体画、产品雕塑上色，工装家装背景墙等立面视觉艺术彩绘设计及施工。
        </p>
      </article>
      <div class="story_info_right" need-animation>
        <img 
          v-for="index in 4"
          :key="index"
          :src="`/images/story/icon${index}.png`" 
          :class="`story_info_icon pc story_info_icon${index}`"
        />
        <img 
          v-for="index in 4"
          :key="index + '|'"
          :src="`/images/story/mobile/icon${index}.png`" 
          :class="`story_info_icon mobile story_info_icon${index}`"
        />

        <!-- <p class="story_info_tag tag1">{{$t('story.infos.contents.content1')}}</p>
        <p class="story_info_tag tag2">{{$t('story.infos.contents.content2')}}</p>
        <p class="story_info_tag tag3">{{$t('story.infos.contents.content3')}}</p>
        <p class="story_info_tag tag4">{{$t('story.infos.contents.content4')}}</p> -->
        <div class="story_info_tag tag1">
          <p class="inner_tag">墙体彩绘</p>
        </div>
        <div class="story_info_tag tag2">
          <p class="inner_tag">挂画定制</p>
        </div>
        <div class="story_info_tag tag3">
          <p class="inner_tag">家具饰品</p>
        </div>
        <div class="story_info_tag tag4">
          <p class="inner_tag">喷绘广告</p>
        </div>
        <div class="story_info_tag tag5">
          <p class="inner_tag">产品上色</p>
        </div>
      </div>
    </section>


    <section class="story_honor" id="honor" need-animation>
      <h3 class="section_hd">
        三只海豚项目成品展览
      </h3>
      <p class="section_desc">
        我们致力于为每一个客户提供最完美的方案
      </p>

      <div class="story_honor_wrap">
        <div class="swiper_list swiper-container">
          <div class="swiper-wrapper">
            <div 
              class="swiper_item swiper-slide" 
              v-for="(item) in 10" 
              :key="item"
            >
              <img :src="`/images/story/${item < 10 ? '0' + item : item}.png`" class="swiper_img">
              <!-- <div class="swiper_item_info">
              </div> -->
            </div>

          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </section>

    <section class="story_history" id="history">
      <h3 class="section_hd" need-animation>
        三只海豚发展历程
      </h3>

      <div class="story_history_content">
        <div class="history_row history_content_top" need-animation>
          <div class="history_col"></div>
          <div class="history_col">
            <div class="history_article">
              <h4 class="history_article_hd">2015年</h4>
              <p class="history_article_p">
                2015年承接“清远万达影院”墙绘项目<br>
                承接“湖南岳阳市平江县横冲村”墙绘项目
              </p>
            </div>
          </div>
          <div class="history_col"></div>
          <div class="history_col">
            <div class="history_article">
              <h4 class="history_article_hd">2017年</h4>
              <p class="history_article_p">
                2017年承接“广州私人别墅古典油画”墙绘项目
              </p>
            </div>
          </div>
          <div class="history_col"></div>
          <div class="history_col">
            <div class="history_article">
              <h4 class="history_article_hd">2019年</h4>
              <p class="history_article_p">
                2019年承接“珠海长隆海洋王国”墙绘项目<br>
                承接“贵州荔波县世界室内滑雪场”墙绘项目<br>
                承接“江西南丰县白舍镇垦殖场”墙绘项目
              </p>
            </div>
          </div>
        </div>
        <div class="history_row history_icon_row" need-animation>
          <!-- <div class="history_icon_line"></div> -->
          <div class="history_col history_icon_item arrow_down">
            <img src="/images/story/his-1.png" class="history_icon_img">
          </div>
          <div class="history_col history_icon_item arrow_up">
            <img src="/images/story/his-2.png" class="history_icon_img">
          </div>
          <div class="history_col history_icon_item arrow_down">
            <img src="/images/story/his-3.png" class="history_icon_img">
          </div>
          <div class="history_col history_icon_item arrow_up">
            <img src="/images/story/his-4.png" class="history_icon_img">
          </div>
          <div class="history_col history_icon_item arrow_down">
            <img src="/images/story/his-5.png" class="history_icon_img">
          </div>
          <div class="history_col history_icon_item arrow_up">
            <img src="/images/story/his-6.png" class="history_icon_img">
          </div>
        </div>
        <div class="history_row history_content_bottom" need-animation>
          <div class="history_col">
            <div class="history_article">
              <h4 class="history_article_hd">2013年</h4>
              <p class="history_article_p">
                2013年广州三只海豚文化传播公司正式成立
              </p>
            </div>
          </div>
          <div class="history_col"></div>
          <div class="history_col">
            <div class="history_article">
              <h4 class="history_article_hd">2016年</h4>
              <p class="history_article_p">
                2016年承接“清远遇见音乐餐吧”墙绘项目<br>
                2016年承接“佛山智慧新城文创孵化器基地”墙绘项目
              </p>
            </div>
          </div>
          <div class="history_col"></div>
          <div class="history_col">
            <div class="history_article">
              <h4 class="history_article_hd">2018年</h4>
              <p class="history_article_p">
                2018年承接“韶关曲江保利花园地下停车场”墙绘项目
              </p>
            </div>
          </div>
          <div class="history_col">
            <div class="history_article">
              <h4 class="history_article_hd">2020年</h4>
              <p class="history_article_p">
                2020年承接“南丰致远幼儿园”墙绘项目<br>
                承接“佛山恒大山湖郡”墙绘项目
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="section_desc" need-animation>
        2021年，探索多元化企业业务....
      </p>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { CurrentCirle, Circle } from '@/util/circle';
import { BounceInUp } from '@/util/animation';
import JBanner from '@/components/JBanner.vue';

declare const Swiper: any;

if (process.client) {
  window.requestAnimationFrame = window.requestAnimationFrame || (window as any).mozRequestAnimationFrame || window.webkitRequestAnimationFrame || (window as any).msRequestAnimationFrame;
}

let canvas: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D | null, currentCircle: CurrentCirle | null;
let circles: Circle[] | null = null;

let mySwiper: any = null;

export default Vue.extend({
  name: 'story',

  components: {
    JBanner
  },

  head () {
    return {
      title: '公司故事 - 广州三只海豚文化传播公司',
      script: [
        { src: '/lib/swiper-4.5.3.min.js' }
      ],
      link: [
        { href: '/lib/swiper-4.5.3.min.css',  rel: 'stylesheet' }
      ]
    }
  },

  data() {
    return {
      isPlay: false,

      swiperOption: {
        slidesPerView: 'auto',
        // preventClicks: false,
        loop : true,
        autoplay: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: '-35%',
          depth: 500,
          modifier: 1,
          slideShadows : false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

      timer: 0,
      animationId: 0,
    }
  },

  mounted () {
    setTimeout(this.initSwiper, 800);
    BounceInUp.init();
    // this.$nextTick(() => {
    //   this.initCircle();
    //   window.addEventListener('resize', this.resetCircle);
    // });
  },

  beforeDestroy () {
    this.destroySwiper();
    BounceInUp.destroy();
    // this.releaseCircle();
    // window.removeEventListener('resize', this.resetCircle);
  },

  methods: {
    togglePlay () {
      const $video = this.$refs.video as HTMLVideoElement | null;
      if ($video) {
        this.isPlay = $video.paused;
        $video.paused ? $video.play() : $video.pause();
      }
    },

    initCircle () {
      // window.addEventListener('mousemove', this.mousemove);
      // window.addEventListener('mouseout', this.mouseout);

      circles = [];
      canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
      if (!canvas) {
        return
      }

      ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      let w = canvas.width = canvas.offsetWidth;
      let h = canvas.height = canvas.offsetHeight;
      currentCircle = new CurrentCirle(0, 0);
      let that = this;
      let draw = function () {
        if (!ctx || !circles) {
          return;
        }

        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < circles.length; i++) {
          circles[i].move(w, h);
          circles[i].drawCircle(ctx);
          for (let j = i + 1; j < circles.length; j++) {
            circles[i].drawLine(ctx, circles[j]);
          }
        }

        if (!currentCircle) {
          return
        }

        if (currentCircle.x) {
          currentCircle.drawCircle(ctx);
          for (var k = 1; k < circles.length; k++) {
            currentCircle.drawLine(ctx, circles[k]);
          }
        }
        if (that.animationId) {
          cancelAnimationFrame(that.animationId);
        }
        that.animationId = requestAnimationFrame(draw);
      };

      for (var i = 0; i < 80; i++) {
        circles.push(new Circle(Math.random() * w, Math.random() * h));
      }
      draw();
    },
    releaseCircle () {
      // window.removeEventListener('mousemove', this.mousemove);
      // window.removeEventListener('mouseout', this.mouseout);
      cancelAnimationFrame(this.animationId);
      currentCircle = null;
      circles = null;
      canvas = null;
      ctx = null;
    },
    mousemove (e: any) {
      if (!currentCircle) {
        return;
      }
      e = e || window.event;
      currentCircle.x = e.clientX;
      currentCircle.y = e.clientY;
    },
    mouseout () {
      if (!currentCircle) {
        return;
      }
      currentCircle.x = 0;
      currentCircle.y = 0;
    },

    resetCircle () {
      this.timer && window.clearTimeout(this.timer);

      this.timer = window.setTimeout(() => {
        this.releaseCircle();
        setTimeout(this.initCircle, 200);
      }, 200);
    },

    initSwiper () {
      if (typeof Swiper === 'undefined') {
        return;
      }
      mySwiper = new Swiper('.swiper-container', this.swiperOption);
    },
    destroySwiper () {
      try {
        mySwiper && mySwiper.destroy();
      } catch (e) {}
      mySwiper = null;
    }
  },
});
</script>

<style lang="scss">
@import '@/assets/scss/common.scss';
@import '@/assets/scss/animation.scss';

[lang="en"] {
  .j_story {
    .story_info .story_info_right .story_info_tag .inner_tag {
      padding-left: px2rem(5px);
      padding-right: px2rem(5px);
      font-size: px2rem(30px);
    }
  }
}

.j_story {
  .section_hd {
    text-transform: capitalize;
  }

  .story_info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 px2rem(140px);
    height: px2rem(865px);
    background-color: rgba($color: #222, $alpha: 0.95);
    background: url('/images/story/bg.png') center/cover no-repeat;

    .story_info_left {
      flex: 1;
      margin-right: px2rem(60px);
      text-align: left;

      .section_hd {
        margin-bottom: px2rem(40px);
        text-align: left;
      }
      .story_info_desc {
        line-height: 1.5;
        font-size: px2rem(26px);
        color: #fff;
      }
    }
    .story_info_right {
      position: relative;
      flex: 0 0 px2rem(815px);
      width: px2rem(815px);
      height: px2rem(634px);
      background: url('/images/story/circle.png') center/contain no-repeat;

      .story_info_icon {
        position: absolute;
        // left: 50%;
        @include setWH(135px, 135px);
        &.mobile {
          display: none;
        }
        &.story_info_icon1 {
          left: px2rem(288px);
          top: px2rem(118px);
        }
        &.story_info_icon2 {
          right: px2rem(288px);
          top: px2rem(208px);
        }
        &.story_info_icon3 {
          left: px2rem(288px);
          top: px2rem(300px);
        }
        &.story_info_icon4 {
          right: px2rem(288px);
          top: px2rem(392px);
        }
      }

      .story_info_tag {
        position: absolute;
        // top: - px2rem(30px);
        // left: 0;
        // right: 0;
        // margin: - px2rem(25px) auto 0;

        // @include setWH(248px, 88px);
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // line-height: 1;
        // font-size: px2rem(38px);
        // background-color: #0094ff;
        // border-radius: px2rem(12px);
        // color: #fff;
        // text-transform: capitalize;
        // text-align: center;
        // animation: spin 20s infinite linear;
        animation: spin2 20s infinite linear;
        animation-delay: 1s;

        &:hover {
          animation-play-state: paused;
        }

        .inner_tag {
          @include setWH(248px, 88px);
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 1;
          font-size: px2rem(38px);
          background-color: #0094ff;
          border-radius: px2rem(12px);
          color: #fff;
          text-transform: capitalize;
          text-align: center;
          animation: inherit;
          animation-direction: reverse;
        }

        &.tag1, &.tag2 {
          left: 0;
        }
        &.tag3, &.tag4 {
          right: 0;
        }
        &.tag5 {
          right: px2rem(320px);
        }
        &.tag1 {
          // animation-delay: -16.8s;
          top: px2rem(90px);
          transform-origin: px2rem(90px + 634px / 2) px2rem(634px / 2 - 90px);
        }
        &.tag2 {
          // animation-delay: -14s;
          top: px2rem(410px);
          transform-origin: px2rem(90px + 634px / 2) (- px2rem(634px / 2 - 143px - 88px));
        }
        &.tag3 {
          // animation-delay: -3.6s;
          top: px2rem(152px);
          transform-origin: (- px2rem(634px / 2 + 92px - 248px)) px2rem(634px / 2 - 152px);
        }
        &.tag4 {
          // animation-delay: -6.8s;
          top: px2rem(442px);
          transform-origin: (- px2rem(634px / 2 + 92px - 248px)) (- px2rem(634px / 2 - 200px));
        }
        &.tag5 {
          // animation-delay: -6.8s;
          top: px2rem(582px);
          transform-origin: (px2rem(159.5px)) (px2rem(-265px));
        }
      }
    }
  }

  .story_team {
    height: px2rem(765px);
    background: url('/images/story/bg2.png') center/cover no-repeat;
    text-align: center;

    .section_hd {
      padding-top: px2rem(120px);
    }
    .section_desc {
      margin: px2rem(34px) auto px2rem(74px);
    }

    .story_team_list {
      padding: 0 px2rem(310px);
      display: flex;
      justify-content: space-between;
    }
    .story_team_item {
      flex: 0 0 px2rem(230px);
      width: px2rem(230px);

      &:hover {
        .story_team_item_img_wrap {
          border-color: #fff;
        }
        .story_team_item_img {
          filter: brightness(100%);
        }
      }

      .story_team_item_img_wrap {
        @include setWH(230px, 230px);
        box-sizing: border-box;
        border-radius: 50%;
        border: px2rem(6px) solid transparent;
        transition: all .3s;
      }
      .story_team_item_img {
        display: block;
        width: 100%;
        height: 100%;
        filter: brightness(80%);
        transition: all .3s;
      }
      .story_team_item_text {
        margin-top: px2rem(16px);
        line-height: 1.2;
        font-size: px2rem(24px);
        color: #fff;
      }
    }
  }

  .story_video {
    position: relative;
    // height: px2rem(1094px);
    padding-bottom: px2rem(80px);
    background-color: #f3f8ff;
    font-size: px2rem(18px);

    .rotate_img {
      position: absolute;
      animation: rotate 10s linear infinite;

      &.rotate_img1 {
        @include setWH(196px, 174px);
        bottom: px2rem(32px);
        right: px2rem(39px);
        animation: rotate2 10s linear infinite;
      }
      &.rotate_img2 {
        @include setWH(129px, 138px);
        top: px2rem(681px);
        left: px2rem(74px);
      }
      &.rotate_img3 {
        @include setWH(233px, 196px);
        top: 0;
        left: px2rem(245px);
        animation: rotate2 10s linear infinite;
      }
      &.rotate_img4 {
        @include setWH(231px, 159px);
        top: - px2rem(20px);
        right: px2rem(56px);
      }
    }

    #canvas {
      position: absolute;
      display: block;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      // background-color: #f3f8ff;
    }

    .section_hd {
      padding-top: px2rem(120px);
    }
    .section_desc {
      margin: px2rem(35px) auto px2rem(50px);
    }

    .story_video_content {
      position: relative;
      @include setWH(900px * 1.55, 506px * 1.55);
      margin: 0 auto;
      padding: px2rem(30px) px2rem(25px);
      // background-color: #F3F8FE;
      background-color: #fff;
      border-radius: px2rem(6px);

      video {
        border-radius: px2rem(6px);
      }

      .story_video_cover {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
      }
      .story_video_cover_hd {
        line-height: 1;
        font-size: px2rem(34px);
        color: #e1eefc;
      }
      .story_video_cover_img {
        @include setWH(115px, 115px);
        display: block;
        margin: px2rem(36px) auto px2rem(50px);
      }
      .story_video_cover_text {
        line-height: 1;
        font-size: px2rem(20px);
        color: #e1eefc;
        text-decoration: underline;
      }
    }
  }

  .story_honor {
    // height: px2rem(785px);
    // position: relative;
    padding-bottom: px2rem(80px);
    font-size: px2rem(18px);

    .section_hd {
      padding-top: px2rem(88px);
      margin-bottom: px2rem(35px);
    }
    .section_desc {
      margin-bottom: px2rem(75px);
    }

    .swiper_list {
      overflow: hidden;
      .swiper-button-prev, .swiper-button-next {
        @include setWH(62px, 62px);
        background-size: contain;
        background-repeat: no-repeat;
        &::after {
          content: none;
        }
      }
      .swiper-button-prev {
        left: px2rem(200px);
        background-image: url('/images/home/lifthuise.png');
        &:hover {
          background-image: url('/images/home/left.png');
        }
      }
      .swiper-button-next {
        right: px2rem(200px);
        background-image: url('/images/home/righthuise.png');
        &:hover {
          background-image: url('/images/home/right.png');
        }
      }
    }
    .swiper_item {
      position: relative;
      @include setWH(805px, 470px);
      text-align: center;
    }
    .swiper_img {
      height: px2rem(470px);
      width: auto;
      vertical-align: middle;
    }
  }

  .story_history {
    overflow: hidden;
    padding: px2rem(100px) px2rem(65px) px2rem(190px);
    background-color: #f6f6f6;

    .section_hd {
      margin-bottom: px2rem(60px);
    }

    .section_desc {
      margin-top: px2rem(68px);
    }

    .history_row {
      display: flex;
      justify-content: space-between;
    }
    .history_col {
      flex: 0 0 px2rem(288px);
      width: px2rem(288px);
    }

    .history_icon_row {
      position: relative;
      margin: px2rem(40px) 0;

      &::before {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @include setWH(1545px, 2px);
        background-color: #005fd5;
      }
    }
    .history_icon_item {
      position: relative;
      text-align: center;
      font-size: 0;

      &::after {
        position: absolute;
        display: block;
        content: '';
        @include setWH(9px, 8px);
        background: url('/images/story/triangle.png') center/contain no-repeat;
        left: 50%;
        transform: translateX(-50%);
      }
      &.arrow_down::after {
        bottom: - px2rem(17px);
      }
      &.arrow_up::after {
        top: - px2rem(17px);
        transform: translateX(-50%) rotate(180deg);
      }

      .history_icon_img {
        @include setWH(96px, 94px);
      }
    }

    .history_content_top {
      .history_col {
        display: flex;
        align-items: flex-end;
      }
    }
    .history_article {
      width: 100%;
      box-sizing: border-box;
      padding: px2rem(25px) px2rem(20px);
      border-radius: px2rem(6px);
      background-color: #fff;
    }
    .history_article_hd {
      line-height: 1;
      margin-bottom: px2rem(8px);
      font-size: px2rem(24px);
      font-weight: bold;
      color: #005fd5;
    }
    .history_article_p {
      line-height: 1.5;
      font-size: px2rem(18px);
      color: #404040;
    }
  }
}

@media only screen and (max-width: 750px) {
  .j_story {
    $design-width: 750px;
    @import '@/assets/scss/mixin.scss';

    .story_info {
      flex-direction: column;
      justify-content: flex-start;
      height: px2rem(797px);
      padding: px2rem(56px) px2rem(60px) px2rem(28px);
      box-sizing: border-box;
      background-image: url('/images/story/mobile/bg.png');

      .story_info_left {
        flex: 0;
        margin-right: 0;

        .section_hd {
          margin-bottom: px2rem(20px);
          text-align: center;
        }
        .story_info_desc {
          font-size: px2rem(24px);

          .br_m {
            display: none;
          }
        }
      }

      .story_info_right {
        flex: 0 0 px2rem(327px);
        width: px2rem(466px);
        height: px2rem(327px);
        margin-top: px2rem(15px);

        .story_info_icon {
          @include setWH(53px, 53px);
          &.pc {
            display: none;
          }
          &.mobile {
            display: block;
          }
          &.story_info_icon1 {
            left: px2rem(190px);
            top: px2rem(82px);
          }
          &.story_info_icon2 {
            right: px2rem(190px);
            top: px2rem(120px);
          }
          &.story_info_icon3 {
            left: px2rem(190px);
            top: px2rem(160px);
          }
          &.story_info_icon4 {
            right: px2rem(190px);
            top: px2rem(196px);
          }
        }

        .story_info_tag {
          .inner_tag {
            @include setWH(144px, 42px);
            font-size: px2rem(24px);
            border-radius: px2rem(6px);
          }

          &.tag1 {
            top: px2rem(63px);
            transform-origin: px2rem(63px + 327px / 2) px2rem(327px / 2 - 63px);
          }
          &.tag2 {
            top: px2rem(255px);
            left: px2rem(6px);
            transform-origin: px2rem(52px + 327px / 2) (- px2rem(327px / 2 - 32px - 40px));
          }
          &.tag3 {
            top: px2rem(59px);
            transform-origin: (- px2rem(327px / 2 + 63px - 144px)) px2rem(327px / 2 - 59px);
          }
          &.tag4 {
            right: px2rem(17px);
            top: px2rem(194px);
            transform-origin: (- px2rem(327px / 2 - 144px + 64px)) (- px2rem(327px / 2 - 92px - 42px));
          }
        }
      }
    }

    .story_team {
      height: px2rem(710px);
      background-image: url('/images/story/mobile/bg2.png');

      .section_hd {
        padding-top: px2rem(54px);
      }
      .section_desc {
        margin: px2rem(20px) auto;
      }

      .story_team_list {
        padding: 0 px2rem(170px);
        flex-wrap: wrap;
      }
      .story_team_item {
        flex: 0 0 px2rem(190px);
        width: px2rem(190px);
        margin-bottom: px2rem(30px);

        .story_team_item_img_wrap {
          @include setWH(141px, 141px);
          margin: 0 auto;
          border-width: px2rem(4px);
        }
        .story_team_item_text {
          margin-top: px2rem(10px);
          font-size: px2rem(20px);
        }
      }
    }

    .story_video {
      padding-bottom: px2rem(30px);
      font-size: px2rem(18px);

      .section_hd {
        padding-top: px2rem(46px);
      }
      .section_desc {
        margin: px2rem(12px) auto px2rem(25px);
      }
      .story_video_content {
        @include setWH(900px * 0.7, 506px * 0.7);

        .story_video_cover_hd {
          font-size: px2rem(20px);
        }
        .story_video_cover_img {
          @include setWH(50px, 50px);
          margin: px2rem(15px) auto px2rem(17px);
        }
        .story_video_cover_text {
          font-size: px2rem(13px);
        }
      }
    }

    .story_honor {
      padding-bottom: px2rem(62px);
      font-size: px2rem(18px);

      .section_hd {
        padding-top: px2rem(44px);
      }
      .section_desc {
        margin: px2rem(12px) auto px2rem(25px);
      }

      .swiper_list {
        .swiper-button-prev, .swiper-button-next {
          @include setWH(46px, 46px);
          margin-top: -12px;
        }
        .swiper-button-prev {
          left: px2rem(180px);
        }
        .swiper-button-next {
          right: px2rem(180px);
        }
      }
      .swiper_item {
        @include setWH(280px, 205px);
        margin: 0 px2rem(30px) 0 px2rem(18px);
      }
      .swiper_img {
        height: px2rem(205px);
      }
    }

    .story_history {
      padding: px2rem(76px) px2rem(56px) px2rem(100px);

      .section_hd {
        margin-bottom: px2rem(45px);
      }

      .section_desc {
        margin-top: px2rem(78px);
      }

      .story_history_content {
        display: flex;
        flex-direction: row-reverse;
      }

      .history_row {
        flex: 1;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
      }
      .history_col {
        width: auto;
        flex: 1 0;

        & + .history_col {
          margin-top: px2rem(30px);
        }
      }

      .history_icon_row {
        flex: 0 0 px2rem(44px);
        width: px2rem(44px);
        margin: 0 px2rem(30px);

        &::before {
          top: px2rem(45px / 2);
          bottom: px2rem(45px / 2);
          transform: translateX(-50%);
          // height: 100%;
          height: auto;
          width: 1px;
        }
      }
      .history_icon_item {
        &::after {
          @include setWH(5px, 6px);
          left: unset;
          top: px2rem(44px / 2);
          transform: translateY(-50%);
          background-image: url('/images/story/mobile/triangle.png');
        }
        &:last-child {
          &::before {
            display: block;
            content: '';
            position: absolute;
            @include setWH(5px, 6px);
            top: px2rem(44px / 2);
            left: - px2rem(8px);
            transform: translateX(-50%) rotate(180deg);
            background-image: url('/images/story/mobile/triangle.png');
          }
        }
        &.arrow_down::after {
          bottom: unset;
          left: - px2rem(8px);
          transform: translateX(-50%) rotate(180deg);
        }
        &.arrow_up::after {
          top: px2rem(44px / 2);
          right: - px2rem(8px);
          transform: none;
        }

        .history_icon_img {
          @include setWH(44px, 44px);
        }
      }

      // 手动设置高度
      .history_row {
        $textHeight: 24px * 1.4;

        &.history_content_top, &.history_icon_row {
          .history_col {
            &:nth-child(1) {
              flex: 0 0 px2rem($textHeight * 4);
            }
            &:nth-child(3) {
              flex: 0 0 px2rem($textHeight * 6);
            }
          }
        }
        &.history_content_bottom, &.history_icon_row {
          .history_col {
            &:nth-child(2) {
              flex: 0 0 px2rem($textHeight * 4);
            }
            &:nth-child(4) {
              flex: 0 0 px2rem($textHeight * 4);
            }
          }
        }
        &.history_content_top {
          .history_col {
            &:nth-child(1) {
              flex: 0 0 px2rem($textHeight * 3);
            }
          }
        }
        &.history_icon_row {
          .history_col {
            &:nth-child(5) {
              flex: 0 0 px2rem($textHeight * 8);
            }
            &:nth-child(6) {
              flex: 0 0 px2rem($textHeight);
            }
          }
        }
      }
      .history_icon_row {
        align-self: flex-start;
      }

      .history_article {
        padding: px2rem(14px) px2rem(18px) px2rem(18px);
        border-radius: px2rem(4px);
      }
      .history_article_hd {
        margin-bottom: px2rem(6px);
        font-size: px2rem(24px);
      }
      .history_article_p {
        font-size: px2rem(24px);
      }
    }
  }

  [lang="en"] .j_story {
    $design-width: 750px;
    @import '@/assets/scss/mixin.scss';

    .story_info {
      height: px2rem(980px);

      .story_info_right {
        margin-top: px2rem(25px);

        .story_info_tag {
          .inner_tag {
            font-size: px2rem(20px);
          }
        }
      }
    }

    .story_team {
      height: px2rem(760px);
    }

    .story_history {
      .history_col {
        align-items: flex-start;
      }

      // 手动设置高度
      .history_row {
        $textHeight: 24px * 1.4;

        &.history_content_top, &.history_icon_row {
          .history_col {
            &:nth-child(1) {
              flex: 0 0 px2rem($textHeight * 5);
            }
            &:nth-child(3) {
              flex: 0 0 px2rem($textHeight * 7);
            }
          }
        }
        // &.history_content_bottom, &.history_icon_row {
        //   .history_col {
        //     &:nth-child(2) {
        //       flex: 0 0 px2rem($textHeight * 4);
        //     }
        //   }
        // }
        &.history_content_top {
          .history_col {
            &:nth-child(1) {
              flex: 0 0 px2rem($textHeight * 5);
            }
            &:nth-child(3) {
              flex: 0 0 px2rem($textHeight * 6);
            }
            &:nth-child(2), &:nth-child(4) {
              flex: none;
            }
            &:nth-child(5) {
              flex: 0 0 px2rem($textHeight * 5);
            }
          }
        }
        // &.history_icon_row {
        //   .history_col {
        //     &:nth-child(5) {
        //       flex: 0 0 px2rem($textHeight * 8);
        //     }
        //   }
        // }
        &.history_content_bottom {
          .history_col {
            &:nth-child(4) {
              flex: 0 0 px2rem($textHeight);
            }
          }
        }
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: translate(-40%, 0) rotateY(0deg) rotateZ(0deg);
  }
  50% {
    transform: translate(-10%, -2%) rotateY(90deg) rotateZ(180deg);
  }
  100% {
    transform: translate(-40%, 0%) rotateY(0deg) rotateZ(360deg);
  }
}

@keyframes rotate2 {
  0% {
    transform: translate(-40%, 0) rotateY(0deg) rotateZ(360deg);
  }
  50% {
    transform: translate(-10%, -2%) rotateY(90deg) rotateZ(180deg);
  }
  100% {
    transform: translate(-40%, 0%) rotateY(0deg) rotateZ(0deg);
  }
}

@keyframes shadow {
  0% {
    box-shadow: 0 0 2px rgb(141, 196, 248);
  }
  // 50% {
  //   box-shadow: 0 0 20px rgb(181, 216, 248);
  // }
  100% {
    box-shadow: 0 0 20px rgb(110, 179, 243);
  }
}

@keyframes spin {
  0% {
    transform: translate(50%, px2rem(340px)) rotate(0turn) translate(-50%, - px2rem(340px)) translate(50%,50%) rotate(1turn) translate(-50%,-50%);
  }
  100% {
    transform: translate(50%, px2rem(340px)) rotate(1turn) translate(-50%, - px2rem(340px)) translate(50%,50%) rotate(0turn) translate(-50%,-50%);
  }
}
@keyframes spin2 {
  to {
    transform: rotate(1turn);
  }
}
</style>
