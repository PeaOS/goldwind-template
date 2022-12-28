<template>
  <div class="flex flex-column page-min-height items-center">
    <div class="itms-pg-hd">
      <div class="text-center">
        <h1>DESIGN</h1>
        <h2>デザインしたアイテムを購入できます</h2>
      </div>
      <div class="flex justify-center mb-10">
        <button class="btn-black mr-1">保存したデザイン</button>
        <button class="btn-white ml-1">注文履歴</button>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <carousel class="h-80 w-80" :settings="settings">
        <slide v-for="imageModel in ImageModel" :key="imageModel">
          <img class="h-80" :src="imageModel" />
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="flex flex-col items-center mt-10">
      <h2>BC Duffel M / TR</h2>
      <p>BC Duffel M / TNFレッド</p>
      <h2>19,800円 (税込)</h2>
      <div class="grid grid-cols-2">
        <div class="border-r-2 text-end pr-4">
          プリント
          <p>上面:1色</p>
          <p>正面:1色</p>
        </div>
        <div class="text-start pl-4">
          カラー
          <p class="text-center">TNF レッド</p>
        </div>
      </div>
    </div>
    <div class="flex justify-evenly mt-12 mb-8">
      <button class="border-solid border-2 py-2 px-8 h-12 mr-2">削除</button>
      <button class="border-solid border-2 py-2 px-8 border-black h-12 mx-2">
        編集
      </button>
      <button class="border-solid border-2 py-2 px-4 border-black h-12 ml-2">
        商品詳細
      </button>
    </div>
    <button
      class="border-solid border-2 border-black p-[1px] min-w-[348px] h-12 mb-12"
    >
      <p
        class="bg-black text-white w-100 h-100 text-center flex items-center justify-center"
      >
        カートに入れる
      </p>
    </button>
  </div>
</template>

<script>
import { ImageModel } from "../assets/index";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

export default {
  name: "ItemsPage",
  components: {
    Carousel,
    Navigation,
    Pagination,
    Slide,
  },
  data() {
    return {
      ImageModel: ImageModel,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        wrapAround: true,
        mouseDrag: false,
      },
    };
  },
};
</script>

<style scoped>
.carousel__pagination {
  padding: 0;
}

p {
  margin-bottom: 0px;
}
</style>
