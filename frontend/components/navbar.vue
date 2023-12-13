<template>
  <nav class="navbar bg-gray-100">
    <div class="navbar-logo text-xl font-bold">Stephanie Hebrina Mabunbun Simatupang 5027221069</div>
    <ul class="navbar-menu flex space-x-4">
      <li class="navbar-item" v-for="(item, index) in menuItems" :key="index">
        <nuxt-link class="navbar-link text-gray-800 hover:text-indigo-500" :to="item.url">{{ item.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Login Here!", url: "/login" }
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