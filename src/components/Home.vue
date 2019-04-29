<template>
  <div>
    <h1>World Search</h1>
    <hr>
    <h3>世界のエリアを選んでください</h3>
    <ul>
      <li v-for="category in allCategories" :class="'slug-' + category.slug">
        <a href="#" @click="active(category.id, category.name)">{{ category.name }}</a>
      </li>
    </ul>
    <div v-if="isActive">
      <categories-widget :categoryid="categoryid">{{ categoryname }}の国</categories-widget>
    </div>
  </div>
</template>

<script>
import CategoriesWidget from "./widgets/Categories.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    CategoriesWidget,
  },
  data () {
    return {
      isActive: false,
      categoryid: '',
      categoryname: '',
    }
  },
  methods: {
    active: function(categoryid, categoryname) {
      this.categoryid = categoryid;
      this.categoryname = categoryname;
      this.$store.dispatch("getCategorizedPosts", { categoryid: this.categoryid });
      this.isActive = true;
    },
  },
  computed: {
    ...mapGetters({
      allCategories: "allCategories",
    }),
  },
};
</script>

<style>
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 0;
}

ul li {
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  width: 40%;
  text-align: center;
}

ul li a {
  text-decoration: none;
  padding: 10px;
  color: black;
  width: 40%;
}
</style>