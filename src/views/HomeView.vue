<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <h2 class="text-center my-3">
        <strong>Best<span class="primary-text"> Foods</span></strong>
      </h2>
      <div class="row">
        <div
          class="col-md-4 justify-content-center d-flex"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
      <div class="row my-4 justify-content-center">
        <router-link class="btn btn-success" to="/daftar-makanan"
          >Lihat Semua</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.getProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
