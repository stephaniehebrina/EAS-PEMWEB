<template>
    <div class="login-container">
      <div class="login-box">
        <h2>Halaman Login</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button type="submit">Masuk</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: ""
      };
    },
    methods: {
      login() {
        // Lakukan proses login di sini
        // Misalnya dengan mengirim data ke server atau memvalidasi di sisi klien
        // Anda dapat menggunakan axios atau library HTTP lainnya untuk mengirim permintaan HTTP
        // Setelah login berhasil, Anda dapat mengarahkan pengguna ke halaman lain
      }
    }
  };
  </script>
  
  <style>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-box {
    width: 300px;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button[type="submit"] {
    width: 100%;
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