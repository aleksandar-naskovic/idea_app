<template>
  <div class="home">
    <div class="container">
      <div class="ideas">
        <h2>Your ideas</h2>
        <!-- List of categories (filters) -->
        <div class="row">
          <div class="filter" v-for="(category, key) in categories" :key="key">
            <button
              class="btn btn-primary mr-2"
              @click="filterByCategory(category.cat_name)"
            >{{ category.cat_name }}</button>
          </div>
          <button class="btn btn-primary mr-2">Reset Filters</button>
        </div>
        <!-- End of list -->
        <hr />
        <!-- List of ideas -->
        <div class="row text-left">
          <div class="col-lg-4 col-md-4 col-sm-6 mb-4" v-for="(idea, key) in ideas[0]" :key="key">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <!-- Idea name -->
                <h5 class="card-title">
                  <router-link :to="`/edit_idea/${key}`">
                    <strong>{{ idea.name }}</strong>
                  </router-link>
                </h5>
                <!-- Category -->
                <p class="card-text">
                  Category:
                  <strong>{{ idea.category }}</strong>
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <!-- Date -->
                <li class="list-group-item">
                  Date:
                  <strong>{{ idea.date }}</strong>
                </li>
                <!-- Rating -->
                <li class="list-group-item">
                  Rating:
                  <strong>{{ idea.rating }}</strong>
                </li>
                <!-- Description -->
                <li class="list-group-item">
                  Description:
                  <strong>{{ idea.description }}</strong>
                </li>
                <div class="accordion" id="accordionExample">
                  <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                      <!-- More button -->
                      <button
                        class="btn btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        :data-target="`#${key}`"
                        aria-expanded="false"
                        :aria-controls="key"
                      >More</button>
                    </h2>
                  </div>
                  <!-- Collapse -->
                  <div
                    :id="key"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <!-- Realisation -->
                      Realisation:
                      <div v-for="(realisation, r_key) in realisations" :key="r_key">
                        <div v-if="realisation.idea_id === key">
                          <p>
                            <strong>{{ realisation.realisation_name }}</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- Subcategory -->
                    <li class="list-group-item">
                      <strong>Subcategories:</strong>
                    </li>
                    <ul>
                      <li
                        v-for="(subcategory, key) in idea.subcategories"
                        :key="key"
                      >{{ subcategory }}</li>
                    </ul>

                    <!-- Expectations -->
                    <li class="list-group-item">
                      Expectations:
                      <strong>{{ idea.expectations }}</strong>
                    </li>
                  </div>
                </div>
              </ul>
              <!--Edit and Delete Buttons -->
              <div class="card-body">
                <router-link :to="`/edit_idea/${key}`">
                  <button class="btn btn-outline-success">
                    <i class="fa fa-pencil"></i> Edit
                  </button>
                </router-link>
                <button class="btn btn-danger" @click="deleteIdea(key)">Delete</button>
              </div>
              <!-- End of buttons -->
            </div>
          </div>
        </div>
        <!-- End of ideas list-->
      </div>
    </div>
  </div>
</template>

<script>
import Idea from "./../classes/Idea.js";
let idea = new Idea();

export default {
  name: "ListOfIdeas",
  data() {
    return {
      ideas: {},
      categories: {},
      realisations: {}
    };
  },
  methods: {
    deleteIdea(key) {
      idea.deleteIdea(key);
    }
  },
  created() {
    this.ideas = idea.getIdeas();
    console.log(this.ideas);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
