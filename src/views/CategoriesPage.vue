<template>
  <div class="home">
    <NavBar />
    <CategoriesForm />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CategoriesForm from "@/components/CategoriesForm.vue";

export default {
  name: "HomePage",
  components: {
    CategoriesForm,
    NavBar
  }
};
</script>
