<template>
  <div class="food">
    <Navbar />
    <div class="container mt-5">
      <!-- Breadcrumb -->
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/"
                  ><span style="color: black">Beranda</span></router-link
                >
              </li>
              <li class="breadcrumb-item">
                <router-link to="/daftar-makanan"
                  ><span style="color: black">Menu</span></router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Detail Pesanan
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img
            :src="'../assets/img/' + product.gambar"
            class="img-fluid shadow"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <h2>{{ product.nama }}</h2>
          <h6>
            Harga : <strong>Rp.{{ product.harga }}</strong>
          </h6>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlahPemesanan">Jumlah Pesanan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlahPesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                class="form-control"
                placeholder="Keterangan seperti : pedas, jangan pakai bawang"
                name=""
                id=""
                cols="30"
                rows="4"
                v-model="pesan.keterangan"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">
              Pesan <b-icon-arrow-bar-right></b-icon-arrow-bar-right>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    getProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlahPesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            alert("Pesanan berhasil masuk keranjang!");
            this.$router.push({ path: "/keranjang" });
          })
          .catch((err) => console.log(err));
      } else {
        console.log("Gagal");
        alert("Silahkan isi pesanan terlebih dahulu!");
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.getProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>