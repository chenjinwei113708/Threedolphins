<template>
  <main class="join">
    <j-banner need-animation class="j-banner">
      <template v-slot:default>
        了解我们
      </template>
      <template v-slot:info>
        {{$t('jobs.subTitle')}}
      </template>
    </j-banner>

    <section class="welfare" id="welfare">
      <rotate-img
        src="/images/join/1.png"
        class="rotate_img img1"
        width="159"
        height="188"
      />
      <rotate-img
        src="/images/join/2.png"
        class="rotate_img img2"
        width="108"
        height="161"
        rotateType="reverse"
      />
      <rotate-img
        src="/images/join/3.png"
        class="rotate_img img3"
        width="108"
        height="161"
        delay="1s"
      />

      <h3 class="common_hd" need-animation>
        项目图集
      </h3>

      <ul class="acti_list">
        <li 
          class="acti_item" 
          v-for="(item, index) in activityList" 
          :key="index"
          @click="onSelectActi(index)"
          need-animation
        >
          <img :src="`/images/join/acti-${index + 1}.png`" class="acti_img">
          <div class="acti_desc">
            <p class="acti_desc_p">{{ item.name }}</p>
            <span class="acti_desc_icon" />
          </div>
        </li>
      </ul>
    </section>

    <v-dialog
      class="dialog"
      :visible="isActiDialogShow"
      @close="toggleActiDialog"
    >
      <template v-if="activityList[selectActiIndex]">
        <h3 class="dialog_hd">
          {{ activityList[selectActiIndex].name }}
        </h3>
        <div class="d_line"></div>

        <img 
          v-for="(_, index) in activityList[selectActiIndex].picCount"
          :key="index"
          :src="`/images/join/activity/${activityList[selectActiIndex].value}/${index+1}.jpg`"
          class="actv_img"
        >
      </template>
    </v-dialog>

    <v-dialog
      class="dialog"
      :visible="isJobDialogShow"
      @close="onCloseJobDialog"
    >
      <h3 class="dialog_hd">
        {{ selectJobData && selectJobData.title }}
      </h3>
      <div class="d_line"></div>
      <h4 class="dialog_sub_hd">
        岗位职责：
      </h4>
      <div class="dialog_content" v-html="selectJobData && selectJobData.gangweizhize"></div>

      <h4 class="dialog_sub_hd">
        任职要求：
      </h4>
      <div class="dialog_content" v-html="selectJobData && selectJobData.renzhiyaoqiu"></div>

      <div class="dialog_btn_wrap" v-if="selectJobData">
        <v-button 
          type="link" 
          linkType="primary" 
          size="small" 
          target="_blank"
          :href="selectJobData.zhaopinwailianjie"
        >
          投递简历
        </v-button>
      </div>
    </v-dialog>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import JBanner from '@/components/JBanner.vue';
import RotateImg from '@/components/RotateImg.vue';
import VDialog from '@/components/Dialog.vue';
import VButton from '@/components/Button.vue';
import { BounceInUp } from '@/util/animation';
import PageConfig from '@/config/page';

// import { getJobs } from '../../util/api';

import '@/assets/scss/animation.scss';

interface IData {
  isJobDialogShow: boolean;
  activeJobId: number;
  selectJobData: any;
  jobs: any[];
  categories: any[];
  [key: string]: any;
}

export default Vue.extend({
  name: 'join_us',
  components: {
    JBanner,
    RotateImg,
    VDialog,
    VButton,
  },

  head () {
    return {
      title: '公司项目 - 广州三只海豚文化传播公司'
    }
  },

  data (): IData {
    return {
      welfareList: [
        { name: '年终奖金' },
        { name: '调薪机会' },
        { name: '部门团建' },
        { name: '七险一金' },
        { name: '周末双休' },
        { name: '带薪年假' },
        { name: '年度体检' },
        { name: '餐费补贴' },
        { name: '团建旅游' },
        { name: '节日福利' }
      ],
      activityList: [

        { name: '惠州大安石油加油站', value: 'oil', picCount: 9 },
        { name: '碧桂园地下停车库', value: 'bus', picCount: 9 },
        { name: '灵山工匠小镇', value: 'town', picCount: 9 },
        { name: '佛山恒大山湖郡', value: 'home', picCount: 8 },
        { name: '长隆熊猫酒店', value: 'hotel', picCount: 8 },
        { name: '淼鑫猪肚鸡', value: 'pig', picCount: 4 },
        { name: '城市美化(电箱)', value: 'dian', picCount: 19 },
        { name: '珠海', value: 'zhuhai', picCount: 9 },
      ],
      planList: [
        { name: '小卓同学', content: '为职场新人定制打造为期6个月的全维度发展计划；我们将为你配置岗位导师，成长导师，双线导线辅导带教，为新人阶段的你答疑解惑，并提供专业的知识培训，辅助制定个人发展规划。每年2期，每期6个月，166课时，100％覆盖新人的成长。' },
        { name: '专业能力提升', content: '当新人正式融入工作后，会有内训师团队提供岗位专业知识线下分享，每月1期，涵盖技术、发行、研发、职能等多个板块，沉淀专属卓动优势的做事方法。更有不同主题能力训练营，以及业内牛人分享等，帮助拓展思维视野。打造立体化职场能力培训体系。' },
        { name: '管理能力培训', content: '目前卓动处于快速发展阶段，我们非常重视管理团队的培养，其中包括基层和中层管理干部两个层面，针对管理层的需要，我们会定期组织管理课程的学习沟通交流。致力于培养有潜力的优秀管理人才。' },
        { name: '在线学习平台', content: '卓动人自己的在线学习平台，助力于内部经验沉淀及职场能力提升：3000＋门在线课程，自建100+门，覆盖行业知识、工作效率提升、能力提升等多维度；24小时在线，随时随地，想看就看。' }
      ],
      categories: [],
      jobs: [],

      activeJobId: 42,
      selectJobData: null,

      isJobDialogShow: false,
      isActiDialogShow: false,
      selectActiIndex: -1,
    }
  },

  mounted () {
    BounceInUp.init();

    // if (!this.categories.length) {
    //   this.getJobs();
    // }
  },

  beforeDestroy () {
    BounceInUp.destroy();
  },

  // asyncData () {
  //   return getJobs({ type: '0' })
  //     .then(resData => ({
  //       ...resData,
  //       activeJobId: resData.categories && resData.categories[0] && resData.categories[0].id || 42
  //     }));
  // },

  // watch: {
  //   isActiDialogShow (isShow: boolean) {
  //     if (isShow) {
  //       document.body.style.overflow = 'hidden';
  //       document.addEventListener('keyup', this.onActiEsc);
  //     } else {
  //       document.body.style.overflow = 'auto';
  //       document.removeEventListener('keyup', this.onActiEsc);
  //     }
  //   }
  // },

  computed: {
    showJobs (): any[] {
      const allItem = this.categories.find(item => item.name === '全部');

      if (allItem && this.activeJobId === allItem.id) {
        return this.jobs;
      }
      return this.jobs.filter(item => item.catid === this.activeJobId);
    }
  },

  methods: {
    toggleActiDialog () {
      this.isActiDialogShow = !this.isActiDialogShow;
      !this.isActiDialogShow && (this.selectActiIndex = -1);
    },

    onSelectActi (index: number) {
      this.selectActiIndex = index;
      this.toggleActiDialog();
    },

    // onActiEsc (e: KeyboardEvent) {
    //   if (e.keyCode === 27) {
    //     this.isActiDialogShow && this.toggleActiDialog();
    //   }
    // },

    onCategoryClick (id: number) {
      this.activeJobId = id;
    },

    onSelectJob (item: any) {
      this.selectJobData = item;
      this.isJobDialogShow = true;
    },

    onCloseJobDialog () {
      this.isJobDialogShow = false;
      this.selectJobData = null;
    },

    // getJobs () {
    //   getJobs({ type: '0' })
    //     .then(resData => {
    //       this.jobs = resData.jobs || [];
    //       this.categories = resData.categories || [];
    //       this.activeJobId = resData.categories && resData.categories[0] && resData.categories[0].id || 42;
    //     });
    // }
  },
});
</script>

<style lang="scss" scoped>
.join {
  .j-banner {
    background: radial-gradient(ellipse farthest-side at 76% 77%, rgba(245, 228, 212, 0.25) 4%, rgba(255, 255, 255, 0) calc(4% + 1px)), radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%), linear-gradient(135deg, #ff0000 0%, #000036 100%), radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%), linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%); background-blend-mode: normal, normal, screen, overlay, normal;
  }
  .common_hd {
    line-height: 1.1;
    font-size: px2rem(46px);
    font-weight: bold;
    color: #111b28;
    text-align: center;
    text-transform: capitalize;
    &.blue {
      color: #005fd5;
    }
    &.reverse {
      color: #fff;
    }
  }

  .welfare {
    position: relative;
    padding-top: px2rem(74px);

    .rotate_img {
      position: absolute;

      &.img1 {
        top: 0;
        left: px2rem(31px);
      }
      &.img2 {
        top: px2rem(37px);
        right: px2rem(99px);
      }
      &.img3 {
        bottom: px2rem(34px);
        left: px2rem(114px);
      }
    }

    .common_hd {
      margin-bottom: px2rem(80px);
    }

    .welfare_list {
      display: flex;
      justify-content: space-between;
      padding: 0 px2rem(240px);
      margin-bottom: px2rem(25px);

      .welfare_item {
        width: px2rem(98px);
        text-align: center;
        .welfare_item_icon {
          height: px2rem(65px);
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        .welfare_item_desc {
          margin-top: px2rem(12px);
          line-height: 1.1;
          font-size: px2rem(22px);
          color: #111b28;
        }
      }
    }

    .acti_list {
      padding: px2rem(46px) px2rem(240px) px2rem(80px);
      display: flex;
      justify-content: center;
      background-color: #f7f7f7;

      .acti_item {
        padding: px2rem(14px) px2rem(10px) px2rem(10px);
        background-color: #fff;
        cursor: pointer;

        &:hover {
          .acti_img {
            filter: contrast(100%);
          }
        }

        .acti_img {
          display: block;
          @include setWH(317px, 189px);
          margin-bottom: px2rem(15px);
          filter: contrast(60%);
          transition: filter .3s;
        }
        .acti_desc {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .acti_desc_p {
          line-height: 1;
          font-size: px2rem(14px);
          color: #111b28;
        }
        .acti_desc_icon {
          display: inline-block;
          @include setWH(17px, 13px);
          background: url('/images/join/eye.png') center / contain no-repeat;
        }
      }
    }
  }

  .employ {
    padding: px2rem(80px) 0 px2rem(140px);
    background-color: #f8fcff;

    .common_hd {
      margin-bottom: px2rem(45px);
    }

    .type_list {
      display: flex;
      justify-content: space-between;
      padding: 0 px2rem(210px);
      border-bottom: 1px solid #e0e4e7;

      .type_item {
        position: relative;
        line-height: px2rem(108px);
        font-size: px2rem(30px);
        color: #111b28;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          color: #005fd5;
        }
        &.active {
          color: #005fd5;

          &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            content: '';
            display: block;
            height: px2rem(4px);
            background-color: #005fd5;
          }
        }
      }
    }

    .job_list {
      $hoverColor: #005fd5;

      margin-top: px2rem(80px);
      padding: 0 px2rem(264px);
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;

      .job_item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        @include setWH(428px, 108px);
        box-sizing: border-box;
        padding: 0 px2rem(60px);
        margin-top: px2rem(30px);
        border: 1px solid #e0e4e7;
        background-color: #ffffff;
        transition: all .3s;
        cursor: pointer;

        &:hover {
          border-color: $hoverColor;

          .job_icon {
            background-color: $hoverColor;
          }
        }

        & + .job_item {
          margin-left: px2rem(40px);
        }
        &:nth-child(3n + 1) {
          margin-left: 0;
        }

        &:nth-child(-n + 3) {
          margin-top: 0;
        }
      }
      .job_name {
        line-height: 1.2;
        font-size: px2rem(20px);
        color: #393939;
      }
      .job_icon {
        position: absolute;
        top: 50%;
        right: px2rem(29px);
        display: flex;
        justify-content: center;
        align-items: center;
        @include setWH(31px, 31px);
        // background: url('/images/join/right-0.png') center /contain no-repeat;
        transform: translateY(-50%);
        background-color: #e0e4e7;
        border-radius: 50%;
        transition: all .3s;
      }
      .job_icon_img {
        height: px2rem(15px);
        width: auto;
        vertical-align: middle;
      }
    }
  }

  .training {
    padding: px2rem(118px) px2rem(380px) px2rem(150px);
    background-color: #f7f7f7;

    .common_hd {
      margin-bottom: px2rem(110px);
    }

    .training_list {
      display: flex;
      justify-content: space-between;

      .training_item {
        position: relative;
        @include setWH(358px, 358px);
        background: url('/images/join/training.png') center/contain no-repeat;
        color: #005fd5;
      }
      .training_item_hd {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: px2rem(24px);
        font-weight: bold;
        transform: translate(-50%, -50%);
      }
      .training_item_p {
        position: absolute;
        font-size: px2rem(20px);
        font-weight: bold;
        &.p1, &.p2 {
          top: - px2rem(20px);
          transform: translateY(-100%);
        }
        &.p3, &.p4 {
          bottom: - px2rem(20px);
          transform: translateY(100%);
        }
        &.p1, &.p4 {
          left: -1em;
        }
        &.p2, &.p3 {
          right: -1em;
        }
      }
    }
  }

  .plan {
    overflow: hidden;
    position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    height: px2rem(1032px);
    background-color: #0852a0;
    font-size: 0;
    &::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 50%;
    }

    .rotate_img {
      position: absolute;

      &.img4 {
        top: 0;
        left: 0;
      }
      &.img5 {
        bottom: - px2rem(110px);
        right: px2rem(520px);
      }
      &.img6 {
        top: px2rem(120px);
        right: 0;
      }
    }

    .circle {
      @include setWH(756px, 756px);
      @extend .abs_center;
      background-color: rgba($color: #064491, $alpha: .25);
      border-radius: 50%;
      animation: wave1 3s ease-in-out infinite alternate;

      &::before {
        content: '';
        display: block;
        @include setWH(556px, 556px);
        @extend .abs_center;
        background-color: rgba($color: #064491, $alpha: .55);
        border-radius: 50%;
        animation: wave2 2.9s ease-in-out infinite alternate;
      }
      &::after {
        content: '';
        display: block;
        @include setWH(311px, 311px);
        @extend .abs_center;
        background-color: #043781;
        border-radius: 50%;
        animation: wave3 2.8s ease-in-out infinite alternate;
      }
    }

    .hd_small {
      margin-top: px2rem(20px);
      line-height: 1;
      font-size: px2rem(16px);
      text-align: center;
      color: #fff;
    }

    .plan_list {
      display: inline-block;
      vertical-align: middle;
      margin: 0 px2rem(340px);
      text-align: center;
      font-size: 0;
    }
    .plan_item {
      z-index: 0;
      position: relative;
      display: inline-block;
      vertical-align: top;
      margin-top: px2rem(110px);
      width: px2rem(410px);
      text-align: left;
      color: #fff;

      &:nth-child(-n + 2) {
        margin-top: 0;
      }
      &:nth-child(2n + 1) {
        margin-right: px2rem(380px);
      }

      &::before {
        z-index: -1;
        content: '';
        display: block;
        position: absolute;
        @include setWH(123px, 123px);
        top: - px2rem(45px);
        left: - px2rem(45px);
        background: url('/images/join/circle-1.png') center/contain no-repeat;
      }
    }
    .plan_item_hd {
      line-height: 1;
      margin-bottom: px2rem(40px);
      font-size: px2rem(36px);
      font-weight: bold;
      .num {
        font-weight: normal;
        margin-right: px2rem(10px);
      }
    }
    .plan_item_p {
      line-height: 1.5;
      font-size: px2rem(18px);
    }
  }

  .dialog {
    .dialog_hd {
      line-height: 1;
      margin-bottom: px2rem(10px);
      font-size: px2rem(26px);
      font-weight: bold;
      text-align: center;
      color: #097dea;
    }
    .dialog_sub_hd {
      line-height: 1;
      font-size: px2rem(22px);
      margin-bottom: px2rem(40px);
      color: #097dea;
      text-decoration: underline;
    }
    .dialog_content {
      margin-bottom: px2rem(40px);
      line-height: 1.6;
      font-size: px2rem(16px);
    }
    .dialog_btn_wrap {
      margin-top: px2rem(60px);
      font-size: 0;
    }
    .d_line {
      height: 1px;
      width: px2rem(50px);
      margin: 0 auto px2rem(50px);
      background-color: #097dea;
    }
    .actv_img {
      display: block;
      width: 80%;
      margin: 0 auto px2rem(30px);
      border-radius: px2rem(6px);
      box-shadow: 0 0 px2rem(10px) 0 rgba(0,0,0,.1);
    }
  }
}

@media only screen and (max-width: 750px) {
  .join {
    $design-width: 750px;
    @import '@/assets/scss/mixin.scss';

    .common_hd {
      font-size: px2rem(38px);
    }

    .welfare {
      padding-top: px2rem(44px);
      min-height: px2rem(780px);

      .common_hd {
        margin-bottom: px2rem(44px);
      }

      .welfare_list {
        padding: 0 px2rem(76px);
        margin-bottom: px2rem(70px);
        flex-wrap: wrap;

        .welfare_item {
          width: px2rem(106px);
          margin-top: px2rem(48px);

          &:nth-child(-n + 5) {
            margin-top: 0;
          }

          .welfare_item_icon {
            height: px2rem(52px);
          }
          .welfare_item_desc {
            margin-top: px2rem(11px);
            font-size: px2rem(24px);
          }
        }
      }

      .acti_list {
        padding: px2rem(22px) px2rem(76px) px2rem(40px);
        flex-wrap: wrap;

        .acti_item {
          padding: px2rem(12px) px2rem(10px) px2rem(15px);
          margin-top: px2rem(12px);

          &:nth-child(-n + 2) {
            margin-top: 0;
          }

          .acti_img {
            @include setWH(263px, 157px);
            margin-bottom: px2rem(14px);
          }
          .acti_desc_p {
            font-size: px2rem(24px);
          }
          .acti_desc_icon {
            @include setWH(19px, 14px);
          }
        }
      }
    }
    .dialog {
      .dialog_hd {
        margin-bottom: px2rem(10px);
        font-size: px2rem(28px);
      }
      .dialog_sub_hd {
        font-size: px2rem(24px);
        margin-bottom: px2rem(40px);
      }
      .dialog_content {
        margin-bottom: px2rem(40px);
        font-size: px2rem(16px);
      }
      .dialog_btn_wrap {
        margin-top: px2rem(60px);
      }
      .d_line {
        width: px2rem(80px);
        margin: 0 auto px2rem(50px);
      }
      .actv_img {
        margin: 0 auto px2rem(30px);
        border-radius: px2rem(6px);
        box-shadow: 0 0 px2rem(10px) 0 rgba(0,0,0,.1);
      }
    }
  }
}

.abs_center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes wave1 {
  0% {
    @include setWH(756px * 0.9, 756px * 0.9);
  }
  100% {
    @include setWH(756px * 1.1, 756px * 1.1);
  }
}
@keyframes wave2 {
  0% {
    @include setWH(556px * 0.9, 556px * 0.9);
  }
  100% {
    @include setWH(556px * 1.1, 556px * 1.1);
  }
}
@keyframes wave3 {
  0% {
    @include setWH(311px * 0.9, 311px * 0.9);
  }
  100% {
    @include setWH(311px * 1.05, 311px * 1.05);
  }
}
</style>
