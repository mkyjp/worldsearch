<template>
  <div class="widget recent-posts">
    <h3>
      <slot></slot>
    </h3>
    <ul v-if="categoriesLoaded">
      <li v-for="post in categorizedPosts" :key="post.id">
        <router-link :to="{ name : 'Post', params : { postSlug: post.slug }}">{{ post.title.rendered }}</router-link>
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["categoryid"],
  computed: {
    ...mapGetters({
      categories: "allCategories",
      categoriesLoaded: "allCategoriesLoaded",
      categorizedPosts: "categorizedPosts"
    })
  },
  mounted() {
    this.$store.dispatch("getCategorizedPosts", { categoryid: this.categoryid });
  }
};
</script>
