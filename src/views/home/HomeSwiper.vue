<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: Array
  },
  components: { Swiper, SwiperItem }
}
</script>
