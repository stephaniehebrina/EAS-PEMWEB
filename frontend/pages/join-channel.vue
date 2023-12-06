<template>
    <div>
      <h2>Join Channel</h2>
      <form @submit.prevent="joinChannel">
        <div class="form-group">
          <label for="channelCode">Channel Code</label>
          <input type="text" id="channelCode" v-model="channelCode" required>
        </div>
        <button type="submit">Join</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        channelCode: ''
      };
    },
    methods: {
      joinChannel() {
        // Lakukan proses join channel di sini
        // Misalnya dengan mengirim data ke server
        // Anda dapat menggunakan axios atau library HTTP lainnya untuk mengirim permintaan HTTP
  
        // Setelah berhasil join channel, arahkan pengguna ke halaman channel yang telah di-join
        this.$router.push('/channel/' + this.channelCode);
      }
    }
  };
  </script>

  