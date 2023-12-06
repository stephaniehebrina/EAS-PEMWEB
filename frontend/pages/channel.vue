<template>
    <div>
      <h2>Create Channel</h2>
      <form @submit.prevent="createChannel">
        <div class="form-group">
          <label for="channelName">Channel Name</label>
          <input type="text" id="channelName" v-model="channelName" required>
        </div>
        <div class="form-group">
          <label for="channelDescription">Channel Description</label>
          <textarea id="channelDescription" v-model="channelDescription" required></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        channelName: '',
        channelDescription: ''
      };
    },
    methods: {
      createChannel() {
        // Lakukan proses pembuatan channel di sini
        // Misalnya dengan mengirim data ke server
        // Anda dapat menggunakan axios atau library HTTP lainnya untuk mengirim permintaan HTTP
  
        // Setelah channel berhasil dibuat, arahkan pengguna ke halaman join channel
        this.$router.push('/join-channel');
      }
    }
  };
  </script>
  
  <style>
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button[type="submit"] {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #45a049;
  }
  </style>