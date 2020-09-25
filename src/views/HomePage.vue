<template>
  <div class="home">
    <NavBar />
    <ListOfIdeas />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import ListOfIdeas from '@/components/ListOfIdeas.vue';

export default {
  name: 'HomePage',
  components: {
    ListOfIdeas,
    NavBar,
  },
};
</script>
