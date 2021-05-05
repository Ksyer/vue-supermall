<template>
  <div class="home">
    <Navbar class="home-nav">
      <div slot="center">购物街</div>
    </Navbar>
    <HomeSwiper :banners="banners" />
    <Recommend :recommends="recommends" />
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import HomeSwiper from './HomeSwiper'
import Recommend from './Recommend'

import { reqMulitdata } from 'api'

export default {
  name: 'Home',
  components: { Navbar, HomeSwiper, Recommend },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  async created() {
    const {
      data: { banner, recommend }
    } = await reqMulitdata()
    this.banners = banner.list
    this.recommends = recommend.list
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
