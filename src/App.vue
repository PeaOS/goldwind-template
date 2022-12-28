<script setup>
import { RouterView } from "vue-router";
import "./styles/global.css";

import "./styles/global.css";
import FooterComponent from "./components/footer/FooterComponent.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />

  <router-view />

  <FooterComponent />
</template>

<style scoped></style>
