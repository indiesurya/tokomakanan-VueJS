<template>
  <div class="successOrder">
    <Navbar />
    <!-- Desktop -->
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-12 d-flex h-100 justify-content-center">
          <img src="assets/img/1.png" width="50%" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12" align="center">
          <h2>
            <strong
              >Pesanan <span class="primary-text">Berhasil</span> Di
              Pesan</strong
            >
            <br />Terimakasih telah berbelanja!
          </h2>
          <p>Silahkan tunggu pesanan anda, kami segera datang</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>