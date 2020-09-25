<template>
  <div class="home">
    <NavBar />
    <EditIdeaForm />
    <AddRealisationForm />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import EditIdeaForm from "@/components/EditIdeaForm.vue";
import AddRealisationForm from "@/components/AddRealisationForm.vue";

export default {
  name: "AddIdea",
  components: {
    NavBar,
    EditIdeaForm,
    AddRealisationForm
  }
};
</script>
