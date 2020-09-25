<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <a class="navbar-brand" href="#">Idea App</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <!-- <button class="btn btn-light" @click="shareData">Categories</button> -->
        <router-link :to="`/`">
          <button class="btn btn-light">Home</button>
        </router-link>
        <router-link :to="`/categories`">
          <button class="btn btn-light">Categories</button>
        </router-link>
        <router-link :to="`/add_idea`">
          <button class="btn btn-light">Add Idea</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style></style>
