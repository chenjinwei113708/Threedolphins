<template>
  <main class="t_contact">
    <j-banner need-animation class="j-banner">
      <template v-slot:default>
        {{$t('contact.title')}}
      </template>
      <template v-slot:info>
        一起创造更多精彩
      </template>
    </j-banner>

    <section class="contact_info">
      <article class="contact_item" need-animation>
        <h3 class="info_hd">{{$t('contact.contactWay')}}</h3>
        <p class="info_p">{{$t('contact.phone')}}：13118831766</p>
        <!-- <p class="info_p">传真：020-37277813</p> -->
      </article>
      <article class="contact_item" need-animation>
        <h3 class="info_hd">{{$t('contact.wechat')}}</h3>
        <img src="/images/qrcode.png" class="contact_qrcode">
      </article>
      <article class="contact_item item3" need-animation>
        <h3 class="info_hd">{{$t('contact.email')}}</h3>
        <p class="info_p">{{$t('contact.business')}}：<a href="mailto:852031330@qq.com" class="info_link">852031330@qq.com</a></p>
      </article>
    </section>

    <div class="contact_map_wrap">
      <h3 class="map_hd mobile" need-animation>{{$t('contact.address')}}</h3>
      <section class="contact_map">
        <article class="map_item" need-animation>
          <div class="map_container map_container1" id="map_container1"></div>
          <h3 class="map_hd pc">{{$t('contact.address')}}</h3>
          <p class="map_p">
            广东省广州市海珠区小洲村旸谷1号
          </p>
          <div class="mobile_btns">
            <v-button 
              type="link"
              linkType="primary"
              href="https://map.baidu.com/poi/%E5%B9%BF%E4%B8%9C%E7%9C%81%E5%8F%A4%E6%9D%91%E8%90%BD%E5%B0%8F%E6%B4%B2%E6%9D%91/@12619853.941623794,2624356.55840836,13.97z?uid=271711fac707774d22f01740&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl"
              target="_blank"
            >
              获取地理位置
            </v-button>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script>
// import Vue from 'vue';
import JBanner from '@/components/JBanner.vue';
import VButton from '@/components/Button.vue';
import { BounceInUp } from '@/util/animation';

import '@/assets/scss/animation.scss';

// 113.378167,23.129563

export default {
  name: 'contact',
  components: {
    JBanner,
    VButton,
  },

  head () {
    return {
      title: '联系我们 - 广州三只海豚文化传播公司'
    }
  },

  mounted () {
    BounceInUp.init();

    if (!window.bMapInit) {
      this.loadBMapScript();
      window['bMapInit'] = () => {
        this.createMap();
      };
    } else {
      this.createMap();
    }
  },

  beforeDestroy () {
    BounceInUp.destroy();
  },

  methods: {
    // 加载百度地图
    loadBMapScript () {
      let script = document.createElement("script");
      // E4805d16520de693a3fe707cdc962045
      script.src =
        "//api.map.baidu.com/api?v=2.0&ak=&callback=bMapInit";
      document.body.appendChild(script);
    },

    createMap () {
      // 雅爵商务大厦
      this.initMap('map_container1', 113.364821,23.068246, {
        infoContent: '广东省广州市海珠区小洲村旸谷1号',
        mapLink: 'https://map.baidu.com/poi/%E5%B9%BF%E4%B8%9C%E7%9C%81%E5%8F%A4%E6%9D%91%E8%90%BD%E5%B0%8F%E6%B4%B2%E6%9D%91/@12619853.941623794,2624356.55840836,13.97z?uid=271711fac707774d22f01740&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl',
      });
    },

    /**
     * 实例化百度地图
     * @param {string} mapId id
     * @param {number} longitude 经度
     * @param {number} latitude 纬度
     * @param {object} additionData 附加内容
     * @param {string} additionData.infoContent
     * @param {string} [additionData.mapLink]
     */
    initMap (mapId, longitude, latitude, additionData = {}) {
      if (!mapId || !longitude || !latitude) {
        return;
      }
      // 创建Map实例
      let map = new BMap.Map(mapId, { enableMapClick: false });

      let point = new BMap.Point(longitude, latitude);

      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(point, 17);

      // 添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes:[
          BMAP_NORMAL_MAP,
          // BMAP_HYBRID_MAP
        ]
      }));

      // 设置地图显示的城市 此项是必须设置的
      map.setCurrentCity("广州");
      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);

      // 创建标注
      const marker = new BMap.Marker(point);
      const label = new BMap.Label("三只海豚彩绘", { "offset": new BMap.Size(-12, -26) });
      label.setStyle({
        borderColor: "#fff",
        color: "rgb(9, 125, 234)",
        cursor: "pointer",
        borderColor: '#808080',
        padding: '4px'
      });
      marker.setLabel(label);
      map.addOverlay(marker);  // 将标注添加到地图中 

      // 创建 info window
      this.createInfoWindow(marker, label, additionData);

      // 设置地图上的图标
      // let size = new BMap.Size(93, 42);
      // let icon = new BMap.Icon(mapIcon, size);
      //创建标注图标
      // let mk = new BMap.Marker(point, {
      //   icon: icon,
      //   offset: new BMap.Size(-5, -15)
      // });
      // // 将标注添加到地图中
      // map.addOverlay(mk);
    },

    /**
     * @param {object} additionData 附加内容
     * @param {string} additionData.infoContent
     * @param {string} additionData.mapLink
     */
    createInfoWindow (marker, label, additionData) {
      if (!marker || !additionData.infoContent) {
        return null;
      }

      let content = additionData.infoContent;
      if (additionData.mapLink) {
        content = `
          <a href="${additionData.mapLink}" target="_blank" title="点击打开地图">${additionData.infoContent}</a>
        `;
      }

      const infoWin = new BMap.InfoWindow("<b class='iw_poi_title' title='JODO'>" + "JODO" + "</b><div class='iw_poi_content'>" + content + "</div>");

      marker.addEventListener("click", function () {
        marker.openInfoWindow(infoWin);
      });
      infoWin.addEventListener("open", function () {
        marker.getLabel().hide();
      });
      infoWin.addEventListener("close", function () {
        marker.getLabel().show();
      });
      label && label.addEventListener("click", function () {
        marker.openInfoWindow(infoWin);
      });

      return infoWin;
    },
  },
};
</script>

<style lang="scss">
.t_contact {
  background-image: linear-gradient(to bottom, #ffffff, #f0f9ff, #d9f6f9, #cff2e1, #dee7c1);
  .j-banner {
    background: radial-gradient(ellipse farthest-side at 76% 77%, rgba(245, 228, 212, 0.25) 4%, rgba(255, 255, 255, 0) calc(4% + 1px)), radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%), linear-gradient(135deg, #ff0000 0%, #000036 100%), radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%), linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%); background-blend-mode: normal, normal, screen, overlay, normal;
  }
  .contact_info {
    display: flex;
    justify-content: space-between;
    padding: px2rem(138px) px2rem(330px) px2rem(138px) px2rem(360px);
    // background-color: #f7f7f7;

    .item3 {
      .info_p {
        padding-left: px2rem(35px);
      }
    }

    .info_hd {
      line-height: 1;
      margin-bottom: px2rem(55px);
      font-size: px2rem(30px);
      color: #111b28;
      text-align: center;
      text-transform: capitalize;
    }
    .info_p {
      line-height: 1.2;
      font-size: px2rem(20px);
      color: #242538;

      & + .info_p {
        margin-top: px2rem(6px);
      }
    }
    .info_link {
      color: #111b28;
      transition: color .3s;

      &:hover {
        text-decoration: underline;
        color: #555658;
      }
    }
    .contact_qrcode {
      display: block;
      @include setWH(179px, 179px);
      margin: 0 auto;
    }
  }

  .contact_map_wrap {
    .map_hd.mobile {
      display: none;
      text-transform: capitalize;
    }
  }
  .contact_map {
    display: flex;
    justify-content: center;
    padding: px2rem(132px) px2rem(175px) px2rem(90px);
    // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

    .map_item {
      width: px2rem(1920px);
      text-align: center;
      color: #242538;
    }
    .map_container {
      height: px2rem(800px);
      width: 100%;
      background-color: #eee;
      font-size: 0;

      .BMap_cpyCtrl, .anchorBL {
        display: none;
      }

      .BMap_noprint.anchorTR {
        display: none;
      }

      .iw_poi_title {
        color: #CC5522;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        padding-right: 13px;
        white-space: nowrap
      }

      .iw_poi_content {
        font: 12px arial, sans-serif;
        overflow: visible;
        padding-top: 4px;
        white-space: -moz-pre-wrap;
        word-wrap: break-word
      }
    }
    .map_hd {
      line-height: 1;
      margin: px2rem(76px) 0 px2rem(16px);
      font-size: px2rem(26px);
      text-transform: capitalize;
    }
    .map_p {
      line-height: 1.5;
      font-size: px2rem(20px);
    }
    .mobile_btns {
      display: none;
      .v_button {
        text-transform: capitalize;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .t_contact {
    $design-width: 750px;
    @import '@/assets/scss/mixin.scss';

    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;

    .contact_info {
      order: 2;
      padding: px2rem(30px) 0 px2rem(80px);
      justify-content: flex-start;
      flex-direction: column;
      text-align: center;

      .item3 {
        .info_p {
          padding-left: 0;
        }
      }

      .contact_item {
        & + .contact_item {
          margin-top: px2rem(60px);
        }
      }

      .info_hd {
        margin-bottom: px2rem(35px);
        font-size: px2rem(38px);
      }
      .info_p {
        font-size: px2rem(24px);

        & + .info_p {
          margin-top: px2rem(10px);
        }
      }
      .contact_qrcode {
        @include setWH(205px, 205px);
      }
    }

    .contact_map_wrap {
      order: 1;
      padding-top: px2rem(60px);

      .map_hd {
        &.mobile {
          display: block;
          margin-bottom: px2rem(50px);
          font-size: px2rem(38px);
          text-align: center;
        }
        &.pc {
          display: none;
        }
      }
    }
    .contact_map {
      padding: 0 px2rem(30px) px2rem(30px);
      flex-direction: column;
      background-color: unset;

      .map_item {
        width: auto;
      }
      .map_container {
        display: none;
      }
      .map_p {
        margin-bottom: px2rem(18px);
        font-size: px2rem(24px);
      }
      .mobile_btns {
        display: block;
        margin-bottom: px2rem(25px);
        font-size: 0;
        text-align: center;
      }
    }
  }
}
</style>
