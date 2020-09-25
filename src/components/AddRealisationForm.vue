<template>
  <div>
    <form @submit.prevent class="mt-4 mx-auto mb-4" style="width:65%">
      <div class="form-row align-items-center">
        <div class="col-md-8 col-lg-8">
          <input
            type="text"
            v-model="realisation_name"
            class="form-control mb-2"
            id="inlineFormInput"
            placeholder="Add Realisation Plan"
          />
        </div>

        <div class="col-auto">
          <button
            type="submit"
            class="btn btn-primary mb-2"
            v-if="!edit_realisation"
            @click="addRealisation()"
          >Add Realisation</button>
          <button class="btn btn-success mb-2" v-else @click="editRealisation()">Edit</button>
        </div>
      </div>
    </form>
    <ListOfRealisations @populateRealisationField="populateRealisationField" />
  </div>
</template>

<script>
import Realisation from "./../classes/Realisation.js";
import ListOfRealisations from "./ListOfRealisations.vue";
let realisation = new Realisation();

export default {
  name: "AddRealisationForm",
  data() {
    return {
      realisation_name: "",
      realisation_date: new Date().toLocaleDateString(),
      edit_realisation: false,
      key: null,
      realisation: {}
    };
  },
  components: { ListOfRealisations },
  methods: {
    addRealisation() {
      realisation = realisation.addRealisation(
        this.realisation_name,
        this.realisation_date,
        this.$route.params.id
      );
    },
    editRealisation() {
      realisation.editRealisation(
        this.key,
        this.realisation_name,
        this.realisation.realisation_date,
        this.realisation.idea_id
      );
      console.log(
        this.key,
        this.realisation.realisation_name,
        this.realisation.realisation_date,
        this.realisation.idea_id
      );
    },
    populateRealisationField(key) {
      this.key = key;
      this.realisation = realisation.getRealisation(key);
      this.edit_realisation = true;
      this.realisation_name = this.realisation.realisation_name;
    }
  },
  created() {
    console.log(this.$route.params.id);
  }
};
</script>

<style>
</style>