<template>
  <div class="home">
    <div class="box">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getReport } from '../../api/ex';

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const title = ref<string>('hello world');

    onMounted(() => {
      getReport({
        stu_id: 12,
        plan_id: '12',
        headers: {
          Authorization: 'Authorization'
        }
      })
    })

    return {
      title
    };
  }
});
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  .box {
    width: 375px;
    height: 375px;
    background: rgb(0, 255, 204);
  }
}
</style>