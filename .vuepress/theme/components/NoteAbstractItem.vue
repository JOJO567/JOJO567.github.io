<template>
  <div
    class="abstract-item wow animate__animated animate__zoomIn"
    @click="$router.push(item.path)"
  >
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="cover">
      <img class="cover-img" :src="item.frontmatter.cover || this.$themeConfig.blogCovers[(Math.floor(Math.random()*39))] ||
          'https://qiniu.duanxiaogang.cn/837534250.png'" :alt="item.title" />
    </div>
    <div class="info">
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{ item.title }}</router-link>
        <hr>
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
    <PageInfo 
      :pageInfo="item" 
      :currentTag="currentTag"> 
    </PageInfo>
      </div>
  </div>
</template>

<script>
import { RecoIcon } from "@vuepress-reco/core/lib/components";
import PageInfo from "./PageInfo";
import animate from "animate.css";
export default {
  components: { PageInfo, RecoIcon },
  props: ["item", "currentPage", "currentTag"],
};
</script>

<style lang="stylus" scoped>
.abstract-item
  position: relative;
  margin: 0 auto 20px;
  width: 100%;
  overflow: hidden;
  border-radius: 12px 12px 8px 8px;
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: var(--background-color);
  cursor: pointer;
  display flex
  flex-flow nowrap
  justify-content: flex-start
  align-items: center

  > * {
    pointer-events: auto;
  }

  .cover
    width 45%
    height: 220px
    // flex 1
    overflow hidden
  .cover-img
    height: 100%;
    width 100%
    transition: 1s ease-out;

  .cover-img:hover
    transform: scale3d(1.1, 1.1, 1);
  
  .info
    width 55%
    padding 10px 40px
    // flex 1
    display: flex;
    flex-direction: column;
    justify-content: center;

  .reco-sticky
    position: absolute;
    top: 0
    left: 0
    display: inline-block
    color: $stickyColor
    font-size: 2.4rem

  &:hover
    box-shadow: var(--box-shadow-hover);

  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 36px;
    display: inline-block;

    a
      color: var(--text-color);

    .reco-lock
      font-size: 1.28rem;
      color: $accentColor;

    &:after
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      top: 2rem;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: 0.3s ease-in-out;

    &:hover a
      color: $accentColor;

    &:hover:after
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);

  .tags
    .tag-item
      &.active
        color: $accentColor;

      &:hover
        color: $accentColor;

@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0 !important

  .abstract-item
    display block
    .cover
      width 100%
      .cover-img
        width 100%
  

    .info
      padding: 15px!important;
      width: calc(100% - 30px)!important;

</style>
