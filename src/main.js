import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';
// import TreeView from '@ll931217/vue-treeview';
// import VueTreeList from 'vue-tree-list';

// Vue.use(VueTreeList);

// Vue.use(TreeView);

var firebaseConfig = {
  apiKey: 'AIzaSyAIxoYLTT36ZIjC0j_GF8vXZ2mSXAEZAG8',
  authDomain: 'ideaapp-854ea.firebaseapp.com',
  databaseURL: 'https://ideaapp-854ea.firebaseio.com',
  projectId: 'ideaapp-854ea',
  storageBucket: 'ideaapp-854ea.appspot.com',
  messagingSenderId: '984439013160',
  appId: '1:984439013160:web:aae0d3422218f323ee1a1d',
  measurementId: 'G-LZMTNCNY67',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
