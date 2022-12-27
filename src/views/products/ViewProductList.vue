<template>
  <div>
    <div class="head h-full flex items-center justify-center">
      <h3 class="font-bold">対象商品一覧</h3>
    </div>
    <div class="filters w-full px-4 py-7">
      <div class="filter w-full flex justify-between mb-3">
        <div>
          <select
            class="border-solid rounded-2xl border-2 border-gray-300 px-3 font-bold text-default h-[33px]"
            name=""
            id=""
          >
            <option value="">絞り込み</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <select
            class="border-solid rounded-2xl border-2 border-gray-300 px-3 mx-2 font-bold text-default h-[33px]"
            name=""
            id=""
          >
            <option value="">並び替え</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div class="switch-button relative">
          <label
            for="switch"
            class="text-[#F8F9FA] text-sm absolute z-10 right-3 top-1.5"
          >
            単色
          </label>
          <label id="switch" class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div class="filter-selected flex flex-wrap gap-2 pr-3">
        <div class="flex bg-slate-100 rounded-xl px-3 py-1">
          <span class="mr-3 text-xs">THE NORTH FACE</span>
          <div class="text-xs">x</div>
        </div>
        <div class="flex bg-slate-100 rounded-xl px-3 py-1">
          <span class="mr-3 text-xs">THE NORTH</span>
          <div class="text-xs">x</div>
        </div>
        <div class="flex bg-slate-100 rounded-xl px-3 py-1">
          <span class="mr-3 text-xs">THE NORTH</span>
          <div class="text-xs">x</div>
        </div>
        <div class="flex bg-slate-100 rounded-xl px-3 py-1">
          <span class="mr-3 text-xs">THE NORTH</span>
          <div class="text-xs">x</div>
        </div>
        <div class="flex bg-slate-100 rounded-xl px-3 py-1">
          <span class="mr-3 text-xs">THE NORTH</span>
          <div class="text-xs">x</div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="p-2">
      <product-cart-list />
    </div>
    <div class="w-full flex justify-center py-5 mb-60">
      <button
        class="py-2.5 px-7 rounded-full bg-[#707F89] text-white font-semibold"
      >
        さらに表
      </button>
    </div>
  </div>
</template>

<script>
import ProductCartList from "./components/ProductCartList.vue";

export default {
  name: "ViewProductList",
  components: { ProductCartList },
};
</script>

<style scoped>
@import "styles/ViewProductList.css";
</style>
