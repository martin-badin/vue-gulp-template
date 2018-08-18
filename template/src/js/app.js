// @flow

import Vue from 'vue';

new Vue({
  el: '#v-app',
  created() {
    document.body.classList.remove('loading');
  },
});
