<template>
  <div id="id">
    <router-view></router-view>
    <MainTabbar />
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/MainTabbar'

export default {
  name: 'App',
  components: { MainTabbar }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
