<template>
  <div id='fms'>
    <h3>Current is FMS counter: {{counter}}</h3>
    <a-button @click="increment">Increment</a-button>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment () {
      this.counter ++
    }
  }
}
</script>

<style>
#fms {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
