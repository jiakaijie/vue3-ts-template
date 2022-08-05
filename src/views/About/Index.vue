<template>
  <div class="home">
    <div class="box">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const title = ref<string>('about');

    return {
      title
    }
  }
});
</script>
<style lang="less" scoped>
</style>