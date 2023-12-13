<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Create Channel</h1>
    <form @submit.prevent="createChannel">
      <div class="mb-4">
        <label for="channelName" class="block text-gray-700 text-sm font-bold mb-2">Channel Name</label>
        <input v-model="channelName" type="text" id="channelName" name="channelName" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500">
      </div>
      <button type="submit" class="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create</button>
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
    createChannel() {
      // Logika untuk membuat channel di sini

      // Simpan nama channel yang dibuat ke dalam variabel createdChannelName di Vuex atau komponen yang berbagi state
      // Misalnya, this.$store.commit('setCreatedChannelName', this.channelName);

      // Reset input field
      this.channelName = '';

      // Navigasi ke halaman "Join Channel"
      this.$router.push('/join-channel');
    }
  }
};
</script>