<template>
  <div class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="max-w-md w-full">
      <div class="bg-white p-8 shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold mb-6">Login</h1>
        <button v-if="isLoggedIn" @click="logout" class="w-full bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
        <form v-else @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              id="email" 
              type="email" 
              v-model="email"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Email"
              required
            >
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              id="password" 
              type="password" 
              v-model="password" 
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Password"
              required
            >
          </div>
          <button type="submit" class="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const loginError = ref(false);
const router = useRouter();

const login = async () => {
  try {
    const req = await fetch("http://localhost:8000/api/account/login/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    });

    if (req.status === 200) {
      const res = await req.json();
      router.push("/channel");
    } else {
      loginError.value = true;
    }
  } catch (error) {
    console.error("Login failed:", error);
    loginError.value = true;
  }
};

const isLoggedIn = ref(false);

const logout = () => {
  isLoggedIn.value = false;
};
</script>

<style>
/* Other styles here */
</style>
