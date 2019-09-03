<template>
  <div class="app-main">
    <GeminiScrollbar :autoshow="true">
      <div class="box-padding">
        <router-view />
      </div>
    </GeminiScrollbar>

  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style>
.app-main{
  padding-top: 84px;
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
}
.box-padding{

}
</style>
