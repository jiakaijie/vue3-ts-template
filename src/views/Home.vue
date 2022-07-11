<template>
  <div class="home">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const title = ref<string>('hello world');

    onMounted(() => {
      console.log(123);
    });
    
    return {
      title
    };
  }
});
</script>
