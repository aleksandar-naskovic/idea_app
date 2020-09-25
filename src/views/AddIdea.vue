<template>
  <div class="home">
    <NavBar />
    <AddIdeaForm />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import AddIdeaForm from '@/components/AddIdeaForm.vue';

export default {
  name: 'AddIdea',
  components: {
    NavBar,
    AddIdeaForm,
  },
  data() {
    return {
      idea_name: '',
      date: '',
      description: '',
      rating: '',
      expectations: '',
    };
  },
  methods: {
    // addIdea() {
    //   let idea = new Idea();
    //   this.ideas = idea.addIdea(
    //     this.idea_name,
    //     this.date,
    //     this.description,
    //     this.rating,
    //     this.expectations
    //   );
    //   this.$router.push({ name: 'home' });
    // },
  },
  // created hook
  created() {
    // Get 1st level categories
    // firebase
    //   .database()
    //   .ref('categories')
    //   .orderByChild('parent')
    //   .equalTo(0)
    //   .on('value', (snapshot) => {
    //     this.arrayOfSubcategories[0] = snapshot.val();
    //   });
    // // Get all categories
    // firebase
    //   .database()
    //   .ref('categories')
    //   .on('value', (snapshot) => {
    //     this.subcategories = snapshot.val();
    //   });
  },
};
</script>
