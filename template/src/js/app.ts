import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

new Vue({
  el: '#app',
  created(): void {
    document.body.classList.remove('loading');
  },
  components: { HelloWorld },
});
