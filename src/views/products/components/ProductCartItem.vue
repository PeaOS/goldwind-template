<template>
  <div class="cart" @click="handleGoToDetail">
    <div class="thumbnail">
      <img
        class="object-contain"
        height="100%"
        width="100%"
        src="/src/assets/direct.jpg"
        alt=""
      />
    </div>
    <div class="cart-body p-2">
      <div class="branch-name">
        <span class="text-xs font-semibold text-default">THE NORTH FACE</span>
      </div>
      <div class="product-name">
        <span class="text-xs font-semibold text-title-default"
          >詳細・スペックなどはECの内容に準拠して</span
        >
      </div>
      <div class="flex justify-between pt-2">
        <span class="code text-xs text-default">NBW82231R</span>
        <span class="price text-xs text-default">$000,0000</span>
      </div>
      <div class="colors flex justify-between py-2 mt-1">
        <div class="color flex gap-2">
          <div
            class="border p-[3px] border-black rounded-full h-5 w-5 flex items-center justify-center"
          >
            <div class="bg-black rounded-full w-full h-full"></div>
          </div>
          <div class="border-black rounded-full h-5 w-5 p-0.5">
            <div class="bg-[#CDD6DD] rounded-full h-full w-full"></div>
          </div>
          <div class="border-black rounded-full h-5 w-5 p-0.5">
            <div class="bg-[#707F89] rounded-full h-full w-full"></div>
          </div>
          <div class="border-black rounded-full h-5 w-5 p-0.5">
            <div class="bg-[#004BB1] rounded-full h-full w-full"></div>
          </div>
        </div>
        <div class="status font-bold text-xs text-default">SOLDOUT</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCartItem",

  methods: {
    handleGoToDetail() {
      this.$router.push({ name: "product-detail" });
    },
  },
};
</script>

<style scoped>
@import "../styles/ProductCartItem.css";
</style>
