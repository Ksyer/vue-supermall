<template>
  <Swiper>
    <SwiperItem v-for="v in banners" :key="v.acm">
      <a :href="v.link">
        <img :src="v.image" alt="" />
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
