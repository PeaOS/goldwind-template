<template>
  <div
    class="grid max-[375px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6"
  >
    <product-cart-item />
    <product-cart-item />
    <product-cart-item />
    <product-cart-item />
    <product-cart-item />
    <product-cart-item />
  </div>
</template>

<script>
import ProductCartItem from "./ProductCartItem.vue";

export default {
  name: "ProductCartList",
  components: { ProductCartItem },
};
</script>

<style scoped></style>
