<template>
  <ul class="list-group mx-auto" style="width:70%">
    <li
      v-for="(realisation, key) in realisations[0]"
      :key="key"
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      {{realisation.realisation_name}} | {{realisation.realisation_date}}
      <span>
        <button class="btn btn-outline-success" @click="populateRealisationField(key)">
          <i class="fa fa-pencil"></i> Edit
        </button>
        <button class="btn btn-outline-danger" @click="deleteRealisation(key)">Delete</button>
      </span>
    </li>
  </ul>
</template>

<script>
import Realisation from "./../classes/Realisation.js";
let realisation = new Realisation();

export default {
  name: "ListOfRealisations",
  data() {
    return {
      realisations: {}
    };
  },
  methods: {
    populateRealisationField(key) {
      this.$emit("populateRealisationField", key);
    },
    deleteRealisation(key) {
      realisation.deleteRealisation(key);
    }
  },
  created() {
    this.realisations = realisation.getRealisations(this.$route.params.id);
    console.log(this.realisations);
  }
};
</script>

<style>
</style>