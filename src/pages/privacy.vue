<template>
  <main class="j_privacy">
    <h2 class="legal_hd">
      隐私策略
    </h2>

    <p>
      规则适用于所有访问本网站的用户或浏览者，我们保留随时修改这些规则的权利。访问本网站的权利由我们根据下列条款授予。如果您不同意下列任何条款、请停止使用本网址。对于违反这些规则的行为，我们有权采取法律和公平的补救措施。
    </p>
    <p>
      本网站所载的材料和信息，包括但不限于文本、图片、数据、观点、建议、网页或链路，在网站上提供准确的材料和信息，但并不保证这些材料和内容的准确、完整、充分和可靠性，并且明确声明不对这些材料和内容的错误或遗漏承担责任，也不对这些材料和内容作出任何明示或默示的、包括但不限于有关所有权担保、没有侵犯第三方权利、质量和没有计算机病毒的保证。 
    </p>
    <p>
      可以在没有任何通知或提示的情况下随时对本网站上的内容进行修改，为了得到最新版本的信息，请定时访问本网站。 在本网站上所提及的非产品或服务仅仅是为了提供相关信息，并不构成对这些产品、服务的认可或推荐。 并不就网址上提供的任何产品、服务或信息做出任何声明、保证或认可，所有销售的产品和服务应受本公司的销售合同和条款的约束。 
    </p>
    <p>
      本网站所载的所有材料或内容受版权法的保护，所有版权由我们拥有，但注明引用其他方的内容除外。未经或其他方事先书面许可，任何人不得将本网站上的任何内容以任何方式进行复制、经销、翻印、播放、以超级链路连接或传送、以"镜像法"载入其他服务器上、存储于信息检索系统或者其他任何商业目的的使用，但对于非商业目的的、个人使用的下载或打印（条件是不得修改，且须保留该材料中的版权说明或其他所有权的说明）除外。 
    </p>
    <p>
      网站上使用和显示的所有商标、标志皆属我们所有，但注明属于其他方拥有的商标、标志、商号除外。网站所载的任何内容不应被视作未经或其他方书面许可，以暗示、不反对或其他形式授予使用前述任何商标、标志的许可或权利。未经事先书面许可，任何人不得以任何方式使用名称及的商标、标记。 
    </p>
    <p>
      本网站可能保留有与第三方网站或网址的链接，访问这些链接将由用户自己作出决定，并不保证这些链接上所提供的任何信息、数据、观点、图片、陈述或建议的准确性、完整性、充分性和可靠性。提供这些链接仅仅在于提供方便，并不表示对这些信息的认可和推荐，也不是用于宣传或广告目的。
    </p>
  </main>
</template>

<script>
export default {
  name: 'privacy',

  head () {
    return {
      title: '隐私策略 - 卓动科技'
    }
  },
}
</script>

<style lang="scss">
.j_privacy {
  width: 80%;
  margin: 0 auto;
  // padding-bottom: px2rem(100px);
  padding-bottom: 60px;
  h2 {
    line-height: 1.2;
    margin: 1em 0;
    // font-size: px2rem(36px);
    font-size: 36px;
    font-weight: bold;
    color: #000;
  }

  p {
    margin: 1em 0;
    line-height: 1.5;
    // font-size: px2rem(20px);
    font-size: 20px;
    color: #666;
  }

  .legal_hd {
    text-align: center;
  }
}
</style>
