<template>
  <div>
    <div class="container">
      <!-- Add new idea fields -->
      <h2>Edit Idea</h2>
      <hr />
      <!-- Name field -->
      <form v-on:submit.prevent class="mt-4 mx-auto mb-4" style="width:65%">
        <div class="form-group col-md-12 col-lg-12">
          <label for="inputState">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="idea.name"
            required
          />
        </div>
        <!-- Date field -->
        <div class="row">
          <div class="form-group col-md-6 col-lg-6">
            <label for="inputEmail4">Date</label>
            <input
              type="date"
              class="form-control"
              v-model="idea.date"
              required
            />
          </div>
          <!-- Rating -->
          <div class="form-group col-md-6">
            <label for="inputState">Rating</label>
            <select v-model="idea.rating" class="form-control" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <!-- List of Categories -->
        <!-- <div class="mb-5" v-for="(n, index) in counter" :key="index">
          <div v-if="counter >= 0" class="row">
            <div class="form-group col-md-12 col-lg-12">
              <label for="inputState">Subcategory</label>
              <select
                v-model="arrayOfCategoryKeys[index]"
                @change="getChildren(arrayOfCategoryKeys[index], index)"
                class="form-control form-control-sm"
              >
                <option
                  v-for="(category, key) in arrayOfSubcategories[index]"
                  :selected="category.cat_name"
                  :value="key"
                  :key="key"
                  >{{ category.cat_name }}</option
                >
              </select>
            </div>
          </div>
        </div> -->

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            v-model="idea.description"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Expectations</label>
          <textarea
            required
            v-model="idea.expectations"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button class="btn btn-primary" @click.prevent="editIdea()">
          Edit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Idea from './../classes/Idea.js';
let idea_obj = new Idea();

export default {
  name: 'AddIdeaForm',
  data() {
    return {
      idea: {},
    };
  },
  methods: {
    editIdea() {
      idea_obj.editIdea(
        this.$route.params.id,
        this.idea.name,
        this.idea.date,
        this.idea.description,
        this.idea.rating,
        this.idea.expectations
      );
    },
  },
  // created hook
  created() {
    this.idea = idea_obj.getIdea(this.$route.params.id);
    console.log(this.idea);
  },
};
</script>

<style></style>
