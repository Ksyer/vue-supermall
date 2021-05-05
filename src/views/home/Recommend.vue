<template>
  <div class="recommend">
    <div class="recommend-item" v-for="v in recommends" :key="v.acm">
      <a :href="v.link">
        <img :src="v.image" alt="">
        <div>{{v.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommends: Array
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 15px 0;
  border-bottom: 8px solid #eee;
  text-align: center;
  font-size: 12px;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 70px;
  height: 70px;
}
</style>
