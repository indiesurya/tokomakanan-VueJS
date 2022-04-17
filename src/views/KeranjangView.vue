<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs" />
    <div class="container mt-5">
      <div class="container">
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
                  Keranjang
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>
              <strong>Keranjang<span class="primary-text"> Saya</span></strong>
            </h2>
            <table class="table mt-4">
              <thead align="center">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody align="center">
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/img/' + keranjang.products.gambar"
                      class="img-fluid shadow"
                      alt=""
                      width="200px;"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td>{{ keranjang.jumlahPesanan }}</td>
                  <td>Rp.{{ keranjang.products.harga }}</td>
                  <td>
                    Rp.{{ keranjang.products.harga * keranjang.jumlahPesanan }}
                  </td>
                  <td class="text-danger">
                    <b-icon-trash
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="8" align="right">
                    <button
                      type="submit"
                      class="btn btn-success float-right"
                      @click="checkout"
                    >
                      Tambah pesanan<b-icon-plus></b-icon-plus>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga :</strong>
                  </td>
                  <td>
                    <strong>Rp.{{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-md-4">
            <form v-on:submit.prevent>
              <div class="form-group">
                <label for="namaPemesan">Nama Pemesan :</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="pesan.namaPemesan"
                />
              </div>
              <div class="form-group">
                <label for="keterangan">Nomor Meja :</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="pesan.nomorMeja"
                />
              </div>
              <button
                type="submit"
                class="btn btn-success float-right"
                @click="checkout"
              >
                Pesan <b-icon-arrow-bar-right></b-icon-arrow-bar-right>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "KeranjangView",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    setPesanans(data) {
      this.pesan = data;
    },
    hapusKeranjang(id) {
      axios
        //.delete menghapus data dengan mengirim variabel id
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          alert("Pesanan dihapus!");
          //reload halaman api /keranjangs
          axios
            .get("http://localhost:3000/keranjangs")
            //mengirimkan data melalui fungsi setKeranjangs ke variable keranjangs
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })

        .catch((error) => console.log(error));
    },
    checkout() {
      //jika nama pemesanan dan nomor meja terisi
      if (this.pesan.namaPemesan && this.pesan.nomorMeja) {
        //masukan isi keranjang lama ke variable keranjang baru
        this.pesan.keranjangs = this.keranjangs;
        //setelah melakukan pemesanan, isi keranjang dihapus
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            this.keranjangs.map(function (item) {
              return (
                axios
                  //.delete menghapus data dengan mengirim variabel item.id(foreach)
                  .delete("http://localhost:3000/keranjangs/" + item.id)
                  .catch((error) => console.log(error))
              );
            });
            alert("Sukses dipesan!");
            this.$router.push({ path: "/terimakasih" });
          })
          .catch((error) => console.log(error));
      } else {
        alert("Nama Pemesan dan Nomor Meja kosong!");
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlahPesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>