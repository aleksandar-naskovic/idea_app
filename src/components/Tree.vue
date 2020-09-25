<template>
  <div class="container">
    <h1>{{selectItem}}</h1>
    <v-tree-select
      :data="converted_categories"
      value-field-name="category_id"
      placeholder="Categories"
      v-model="selectItem"
    ></v-tree-select>
  </div>
</template>

<script>
import VTreeselect from "vue-treeselect";
import Category from "./../classes/Category.js";

let categories_obj = new Category();
export default {
  name: "VTreeselect",
  components: {
    "v-tree-select": VTreeselect
  },
  data() {
    return {
      categories_obj: [],
      converted_categories: [],
      categories: {},
      selectItem: null
    };
  },
  methods: {},
  created() {
    // categories_obj.getCategories().then(result => {
    //   this.categories = result;
    // });
    // console.log(this.categories);

    this.converted_categories = categories_obj.convert().then(result => {
      this.categories = result;
    });
    console.log(this.categories);
    console.log(this.converted_categories);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.custom-tree-content {
  position: relative;
  top: 2px;
  z-index: 1;
  &.exitChild {
    margin-left: -7px;
  }
}
</style>