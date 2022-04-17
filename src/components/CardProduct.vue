<template>
  <div class="text-center">
    <div class="card shadow" style="width: 20rem">
      <img :src="'../assets/img/' + product.gambar" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.nama }}</h5>
        <p class="card-text">Harga : Rp.{{ product.harga }}</p>
        <router-link
          class="btn btn-success"
          :to="'/detail-makanan/' + product.id"
          >Pesan <b-icon-cart></b-icon-cart
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>