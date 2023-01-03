<template>
  <div>
    <div class="p-2 my-5">
      <div class="w-full">
        <span class="px-4 py-1 rounded-3 text-white bg-default">NEW</span>
        <div class="branch text-default my-2">THE NORTH FACE / NBW82231R</div>
        <div class="name font-bold text-default my-1">
          詳細・スペックなどはECの内容に準拠して
        </div>
        <div class="price text-default font-bold">$000.000</div>
      </div>
      <!--      <div class="flex justify-center items-center mb-10">-->
      <!--        <carousel class="h-80 w-80 mb-4" :settings="settings">-->
      <!--          <slide v-for="(imageModel, index) in ImageModel" :key="index">-->
      <!--            <img class="h-80" :src="imageModel" />-->
      <!--          </slide>-->
      <!--          <template #addons="{ slideWidth, currentSlide }">-->
      <!--            <navigation />-->
      <!--            <pagination />-->
      <!--          </template>-->
      <!--        </carousel>-->
      <!--      </div>-->
    </div>
    <!--    <vueper-slides :slide-ratio="0.2" bullets-outside>-->
    <!--      <vueper-slide-->
    <!--        v-for="(imageModel, index) in ImageModel"-->
    <!--        :key="index"-->
    <!--        :image="imageModel"-->
    <!--      />-->
    <!--    </vueper-slides>-->
    <div class="px-14 w-full">
      <vueper-slides
        class="no-shadow"
        arrows-outside
        bullets-outside
        transition-speed="250"
      >
        <vueper-slide
          v-for="(imageModel, i) in ImageModel"
          :key="i"
          :image="imageModel"
        />
      </vueper-slides>
    </div>

    <div
      class="w-full flex flex-col gap-y-4 items-center py-4 mb-4 bg-gray-default"
    >
      <div class="w-3/5 flex items-center gap-x-4">
        <div class="w-3/6 text-md font-bold text-default text-right">価格</div>
        <div
          class="w-3/6 font-bold text-md text-default text-left"
          id="print-cost"
        >
          $000,000
        </div>
      </div>
      <button
        @click="handleGoSelectFormat"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        デザインを追加・編集する
      </button>
    </div>

    <div class="detail-price w-full flex flex-col gap-y-2 items-center">
      <div class="w-3/5 flex items-center gap-x-6">
        <div class="w-3/6 text-md text-default text-right">本体価格</div>
        <div
          class="w-3/6 font-bold text-md text-default text-left"
          id="print-cost"
        >
          $000,000
        </div>
      </div>
      <div class="w-3/5 flex items-center gap-x-6">
        <div class="w-3/6 text-md text-default text-right">プリント代</div>
        <div
          class="w-3/6 font-bold text-md text-default text-left"
          id="print-cost"
        >
          $000,000
        </div>
      </div>
      <div class="w-3/4 h-0.5 mx-2 bg-gray-300"></div>
      <div class="w-3/5 flex items-center gap-x-6">
        <div class="w-3/6 text-md text-default text-right">合計</div>
        <div
          class="w-3/6 font-bold text-md text-default text-left"
          id="print-cost"
        >
          $000,000
        </div>
      </div>
      <a
        class="text-xs underline underline-offset-1 decoration-1 text-default font-semibold"
        href="#"
        >データアップロード</a
      >
    </div>

    <div class="w-full flex flex-col gap-y-5 items-center py-5 mt-4 mb-14">
      <button
        @click="handleGoSelectFormat"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        サイズを選んでカートに入れる
      </button>
      <button
        @click="handleBackToSelectArea"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        デザインを保存する
      </button>
      <button
        @click="handleBackToSelectArea"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        別の商品を選ぶ
      </button>
    </div>
  </div>
</template>

<script>
import { ImageModel } from "../../assets/index";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "ViewConfirmDesign",
  components: {
    VueperSlides,
    VueperSlide,
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
  methods: {
    handleGoSelectArea() {
      this.$router.push({ name: "select-area" });
    },
  },
};
</script>

<style scoped></style>
