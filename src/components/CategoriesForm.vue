<template>
  <div class="container">
    <h2>Categories</h2>
    <hr />
    <form @submit.prevent class="mt-4 mx-auto mb-4" style="width:65%">
      <!-- Category input -->
      <div class="form-row align-items-center">
        <div class="col-md-8 col-lg-8">
          <input type="text" v-model="category_name" class="form-control mb-2" id="inlineFormInput" />
        </div>
        <!-- Add Category button -->
        <div class="col-auto">
          <button
            type="submit"
            class="btn btn-primary mb-2"
            v-if="!edit_cat"
            @click="addCategory()"
          >
            <i class="fa fa-plus"></i> Add
          </button>
          <!-- <button type="submit" class="btn btn-success mb-2" v-else @click="editCategory()">
                <i class="fa fa-pencil"></i> Edit
          </button>-->
        </div>
      </div>
    </form>
    <!-- <sortable-tree :data="converted_categories[0]">
      <template slot-scope="{converted_categories}">
        <span>{{converted_categories}}</span>
      </template>
    </sortable-tree>-->
    <!-- <tree-view :tree.sync="converted_categories" :editable="editable" @click="show(parent_id)" /> -->
  </div>
</template>

<script>
import Category from "./../classes/Category.js";

let categories_obj = new Category();

export default {
  name: "CategoriesForm",
  data() {
    return {
      categories: {},
      converted_categories: {},
      category_name: "",
      parent_id: 0,
      edit_cat: false
    };
  },
  methods: {
    addCategory() {
      if (this.parent_id == null) {
        this.parent_id = 0;
      }
      categories_obj.addCategory(this.category_name, this.parent_id);
    },
    show(parent_id) {
      console.log("aa");
    }
  },
  // created hook
  created() {
    this.categories = categories_obj.getCategories();
    console.log(this.categories[0]);

    this.converted_categories = categories_obj.convert(this.categories);
    console.log(this.converted_categories);
  }
};
</script>

<style></style>
