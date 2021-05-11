<template>
  <div class="home">
    <!-- 顶部导航 -->
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="currentScroll"
      @pullingUp="loadMore"
    >
      <div class="content">
        <!-- 轮播图 -->
        <home-swiper :banners="banners" />
        <!-- 推荐 -->
        <recommend :recommends="recommends" />
        <!-- 本周流行 -->
        <feature-view />
        <!-- 流行/新款/精选 -->
        <tab-control :titles="titles" @tab-click="tabClick" />
        <!-- 商品列表 -->
        <goods-list :goods="showGoods" />
      </div>
    </scroll>
    <back-top @click.native="btnClick" v-show="isShow" />
  </div>
</template>

<script>
/*公共组件
---------------------------------------------------------------- */
import Navbar from 'components/common/navbar/Navbar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

/* 子组件
---------------------------------------------------------------- */
import HomeSwiper from './HomeSwiper'
import Recommend from './Recommend'
import FeatureView from './FeatureView'

/* 功能模块
---------------------------------------------------------------- */
import { reqMulitdata, reqHomeGoods } from 'api'

export default {
  name: 'Home',
  components: {
    Navbar,
    TabControl,
    HomeSwiper,
    Recommend,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      titleType: 'pop',
      isShow: false
    }
  },
  methods: {
    async getMulitData() {
      const {
        data: { banner, recommend }
      } = await reqMulitdata()
      this.banners = banner.list
      this.recommends = recommend.list
    },
    async getHomeGoods(titleType) {
      const page = this.goods[titleType].page + 1
      const { success, data } = await reqHomeGoods({ type: titleType, page })
      if (success) {
        this.goods[titleType].list.push(...data.list)
        this.goods[titleType].page += 1

        this.$refs.scroll.finishPullUp()
      }
    },

    /**
     * 点击流行/新款/精选获取对应name值
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.titleType = 'pop'
          break
        case 1:
          this.titleType = 'new'
          break
        default:
          this.titleType = 'sell'
          break
      }
    },
    btnClick() {
      this.$refs.scroll.scrollTo()
    },
    currentScroll(position) {
      if (position.y < -1000) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },

    /**
     * 上拉加载更多
     */
    loadMore() {
      this.getHomeGoods(this.titleType)
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.titleType].list
    }
  },
  created() {
    this.getMulitData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  }
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
}
/* .home {
  height: 100vh;
} */
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: var(--color-tint);
  color: #fff;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* .wrapper {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
