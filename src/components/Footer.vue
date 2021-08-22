<template>
  <footer class="v_footer">
    <section class="footer_info">
      <!-- <nav class="footer_nav">
        <dl class="nav_item" v-for="item in showNavList" :key="item.title">
          <dt class="nav_hd footer_hd">{{$t(item.title)}}</dt>
          <dd class="nav_li" v-for="(sub, index) in item.subNavList" :key="index">
            <nuxt-link :to="localePath(sub.link)" class="nav_li_link footer_text">{{$t(sub.name)}}</nuxt-link>
          </dd>
        </dl>
      </nav> -->

      <aside class="footer_aside">
        <div class="partner">
          <h5 class="footer_hd">
            合作洽谈：
          </h5>
          <p class="footer_text">
            <a href="mailto:852031330@qq.com" class="info_link">852031330@qq.com</a>
          </p>
          <div class="footer_line"></div>
        </div>
        <div class="focus">
          <h5 class="footer_hd">
            添加微信
          </h5>
          <div class="focus_ways">
            <div class="focus_img_wrap">
              <img src="../assets/images/layout/weixin.png" alt="wechat" class="focus_img">
              <div class="hover_img_wrap">
                <img src="/images/qrcode.png" class="hover_img">
              </div>
            </div>
            <!-- <img src="../assets/images/layout/in.png" alt="linkedin" class="focus_img"> -->
          </div>
          <div class="footer_line"></div>
        </div>
        <div class="contact">
          <p class="footer_text">
            邮箱：<a href="mailto:852031330@qq.com" class="info_link">852031330@qq.com</a>
          </p>
          <p class="footer_text">
            合作电话：<a href="tel:13118831766" class="info_link">13118831766</a>（陈生）
          </p>
        </div>
      </aside>
    </section>

    <div class="footer_line"></div>

    <div class="footer_extra">
      <p class="beian footer_text">
        <nuxt-link :to="localePath('/legal')" target="_blank" class="footer_text">{{$t('footer.legal')}}</nuxt-link>
        <span class="split">|</span>
        <nuxt-link :to="localePath('/privacy')" target="_blank" class="footer_text">{{$t('footer.policy')}}</nuxt-link>
        <!-- <span class="split">|</span> -->
        <!-- <a target="_blank" href="https://beian.miit.gov.cn" class="footer_text">粤ICP备12082196号</a> -->
      </p>
      <p class="copyright footer_text">
        COPYRIGHT {{ getYear() }} © 广州三只海豚文化传播公司. ALL RIGHTS
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'v-footer',

  data () {
    return {
      navList: [
        {
          title: '三只海豚故事',
          subNavList: [
            { name: 'header.story.subs.profile', link: '/story' },
            { name: 'header.story.subs.team', link: '/story#team' },
            // { name: 'header.story.subs.env', link: '/story#environment' },
            { name: 'header.story.subs.honor', link: '/story#honor' },
            { name: 'header.story.subs.history', link: '/story#history' }
          ]
        },
        {
          title: '三只海豚业务',
          subNavList: [
            { name: '墙体彩绘', link: '/service/bigData' },
            { name: '挂画定制', link: '/service/software' },
            { name: '家具饰品', link: '/service/game' },
            { name: '喷绘广告', link: '/service/enterprise' },
            { name: '产品上色', link: '/service/ecommerce' },
          ]
        },
      ]
    }
  },

  computed: {
    localLanguage (): string {
      return this.$i18n.locale;
    },
    showNavList (): any[] {
      // if (this.localLanguage !== 'en') {
      //   return this.navList;
      // }
      // return this.navList.filter(item => !item.enHidden);
      return this.navList;
    }
  },

  methods: {
    getYear () {
      return new Date().getFullYear();
    }
  },
});
</script>

<style lang="scss">
.v_footer {
  padding: px2rem(60px) px2rem(250px) px2rem(40px);
  // background-color: #111b28;
  background: #8e9eab;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-size: 0;

  .footer_hd {
    line-height: 1.2;
    font-size: px2rem(20px);
    color: #000;
  }
  .footer_text {
    line-height: 1.2;
    font-size: px2rem(16px);
    // color: #95989e;
    color: #011223;
  }
  .footer_line {
    // height: px2rem(2px);
    height: 1px;
    background-color: #030f1c;
  }

  .footer_info {
    display: flex;
    justify-content: space-between;
    margin-bottom: px2rem(110px);
    padding: 0 px2rem(50px) 0 px2rem(20px);
  }

  .footer_nav {
    flex: 1;

    .nav_item {
      width: px2rem(240px);
      display: inline-block;
      vertical-align: top;
    }
    .nav_hd {
      margin-bottom: px2rem(50px);
    }
    .nav_li + .nav_li {
      margin-top: px2rem(16px);
    }
    .nav_li_link {
      transition: color .3s;
    }
    .nav_li_link:hover {
      color: #030f1c;
      text-decoration: underline;
    }
  }

  .footer_aside {
    .footer_line {
      width: px2rem(231px);
    }

    .info_link {
      color: #030f1c;
      transition: color .3s;
      text-transform: uppercase;

      &:hover {
        text-decoration: underline;
        color: black;
      }
    }

    .partner {
      margin-bottom: px2rem(22px);
      .footer_hd {
        margin-bottom: px2rem(30px);
      }
      .footer_line {
        margin-top: px2rem(13px);
      }
    }

    .focus {
      font-size: 0;
      .footer_hd {
        margin-bottom: px2rem(18px);
      }
      .focus_ways {
        margin-bottom: px2rem(68px);
      }
      .focus_img_wrap {
        position: relative;
        display: inline-block;
        vertical-align: top;

        &:hover {
          .hover_img_wrap {
            display: block;
          }
        }
      }
      .focus_img {
        vertical-align: middle;
        @include setWH(35px, 34px);

        & + .focus_img {
          margin-left: px2rem(15px);
        }
      }
      .hover_img_wrap {
        position: absolute;
        display: none;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 107%);
        @include setWH(179px, 179px);

        &::before {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          top: px2rem(3px);
          transform: translate(-50%, -100%);
          border-bottom: px2rem(15px) solid #fff;
          border-left: px2rem(20px) solid transparent;
          border-right: px2rem(20px) solid transparent;
        }

        .hover_img {
          vertical-align: middle;
          width: 100%;
          height: 100%;
        }
      }
    }

    .contact {
      margin-top: px2rem(40px);

      .footer_text + .footer_text {
        margin-top: px2rem(20px);
      }
    }
  }

  .footer_extra {
    margin-top: px2rem(15px);
    display: flex;
    justify-content: space-between;

    .beian {
      text-transform: capitalize;
      .split {
        margin: 0 px2rem(6px);
      }
      a {
        transition: color .3s;
      }
      a:hover {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .v_footer {
    $design-width: 750px;
    @import '@/assets/scss/mixin.scss';

    padding: px2rem(35px) px2rem(52px) px2rem(68px);

    .footer_text {
      font-size: px2rem(22px);
    }

    .footer_info, .footer_line {
      display: none;
    }

    .footer_extra {
      margin-top: 0;

      .split {
        color: transparent;
      }

      .copyright {
        display: none;
      }
    }
  }
}
</style>
