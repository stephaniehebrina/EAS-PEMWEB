<template>
    <nav class="navbar">
      <div class="navbar-logo">Stephanie Hebrina Mabunbun Simatupang 5027221069</div>
      <ul class="navbar-menu">
        <li class="navbar-item" v-for="(item, index) in menuItems" :key="index">
          <nuxt-link class="navbar-link" :to="item.url">{{ item.label }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { label: "Beranda", url: "/" },
          { label: "Login", url: "/login" },
          { label: "Channel", url: "/channel" },
          { label: "Kontak", url: "/contact" }
        ]
      };
    }
  };
  </script>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f2f2f2;
  }
  
  .navbar-logo {
    font-weight: bold;
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .navbar-item {
    margin-left: 10px;
  }
  
  .navbar-link {
    color: #333;
    text-decoration: none;
  }
  
  .navbar-link:hover {
    text-decoration: underline;
  }
  </style>