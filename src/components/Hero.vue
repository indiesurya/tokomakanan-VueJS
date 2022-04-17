<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="container">
      <div class="d-none d-md-block">
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Delicious Food Menu</strong> <br />Lets Order!</h2>
                <p>Silahkan pesan makanan yang anda sukai</p>
                <router-link class="btn btn-success" to="/daftar-makanan"
                  >Pesan <b-icon-arrow-bar-right></b-icon-arrow-bar-right
                ></router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <img src="assets/img/1.png" width="100%" />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="container">
      <div class="d-sm-block d-md-none">
        <div class="row mt-3">
          <div class="col">
            <img src="../assets/img/1.png" width="100%" />
          </div>
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center text-center">
                <h2><strong>Delicious Food Menu</strong> <br />Lets Order!</h2>
                <p>Silahkan pesan makanan yang anda sukai</p>
                <button class="btn btn-success">
                  Pesan <b-icon-arrow-bar-right></b-icon-arrow-bar-right>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style>
</style>