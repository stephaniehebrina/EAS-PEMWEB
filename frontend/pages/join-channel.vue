<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Join Channel</h1>
    <p>Channel Name: {{ channelName }}</p>
    <form @submit.prevent="joinChannel">
      <div class="mb-4">
        <label for="channelName" class="block text-gray-700 text-sm font-bold mb-2">Channel Name</label>
        <input v-model="channelName" type="text" id="channelName" name="channelName" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500">
      </div>
      <button type="submit" class="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Join</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelName: ''
    };
  },
  methods: {
    joinChannel() {
      // Logika untuk join channel di sini
    }
  }
};
</script>