<template>
  <div class="footer flex items-center justify-between px-4">
    <div>
      <div class="text-white text-xs">Our sale is limited to JAPAN only.</div>
      <div class="text-white text-xs mb-3">
        Copyright 2016 GOLDWIN inc. All Right Reserved.
      </div>
      <div class="text-white text-base">GOLDWIN INC</div>
    </div>
    <div>
      <img
        class="mt-4"
        style="object-fit: cover"
        src="../../assets/header/logo.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  height: 85px;
  background-color: black;
}
</style>
