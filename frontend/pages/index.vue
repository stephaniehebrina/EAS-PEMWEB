<template>
    <div>
      <navbar />
      <home />
      <!-- <HomeView /> -->
      <!-- <AboutView /> -->
      <!-- < BlogView /> -->
      <FooterView />
    </div>
  </template>
  
  <script>
  // import AboutView from "@/pages/AboutView.vue";
  // import BlogView from "@/pages/BlogView.vue"; 
  import NavbarView from "@/components/navbar.vue";
  import Home from "@/components/home.vue";

//   import HomeView from "@/components/HomeView.vue";
//   import FooterView from "@/components/FooterView.vue";
  
  export default {
    components: {
      // AboutView,
      NavbarView,
    //   HomeView,
    //   FooterView,
    },
    data() {
      return {
        blogPosts: [],
      };
    },


  };
  </script>