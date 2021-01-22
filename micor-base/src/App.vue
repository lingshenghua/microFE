<template>
  <a-menu @click='handleClick' mode='horizontal'>
    <a-menu-item key='/base-index'>Main</a-menu-item>
    <a-menu-item key='/fms'>FMS</a-menu-item>
    <a-menu-item key='/umi'>UMI</a-menu-item>
  </a-menu>
  <router-view></router-view>

  <div id="fms"></div>
  <div id="umi"></div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup () {
    const history = useRouter();
    
    const handleClick = (item) => {
      history.push({ path: item.key })
    }

    return {
      handleClick
    }
  }
}
</script>
