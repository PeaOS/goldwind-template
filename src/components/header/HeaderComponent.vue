<template>
  <div class="header flex items-center justify-between px-4">
    <div class="pt-2">
      <img src="../../assets/header/logo.png" alt="" />
      <h6 class="text-white mt-1">MARK ON</h6>
    </div>
    <div class="pt-2 flex gap-3">
      <img src="../../assets/header/ic-person.png" alt="" />
      <img src="../../assets/header/ic-menu.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header {
  height: 64px;
  background-color: black;
}
</style>
