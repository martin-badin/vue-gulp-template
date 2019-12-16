import Vue from 'vue';
import HelloWorld from './hello-world/HelloWorld.vue';

new Vue({
  el: '#app',
  created(): void {
    document.body.classList.remove('loading');
  },
  components: { HelloWorld },
});
