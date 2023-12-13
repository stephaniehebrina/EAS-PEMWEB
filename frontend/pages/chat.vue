<template>
    <div class="min-h-screen bg-gray-100 flex flex-col">
      <div class="py-4 px-6 bg-white shadow-md">
        <h1 class="text-3xl font-bold">iMessage</h1>
      </div>
      <div class="flex-grow p-6">
        <div class="mb-6 max-h-96 overflow-y-auto">
          <div v-for="message in messages" :key="message.id" class="mb-2">
            <div v-if="message.isMe" class="text-right">
              <span class="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block">{{ message.content }}</span>
            </div>
            <div v-else>
              <span class="bg-gray-200 px-4 py-2 rounded-lg inline-block">{{ message.content }}</span>
            </div>
          </div>
        </div>
        <form @submit.prevent="sendMessage" class="flex">
          <input
            v-model="newMessage"
            type="text"
            class="flex-grow rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-indigo-500"
            placeholder="Type your message..."
            required
          >
          <button type="submit" class="bg-indigo-500 text-white px-6 py-2 rounded-r-lg ml-2 focus:outline-none focus:shadow-outline">
            Send
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [],
        newMessage: ''
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() === '') {
          return;
        }
        const newMsg = {
          id: this.messages.length + 1,
          content: this.newMessage,
          isMe: true
        };
        this.messages.push(newMsg);
        this.newMessage = '';
      }
    }
  };
  </script>
  
  <style>
  /* Other styles here */
  </style>