<template>
  <div>
    <div class="h-[100px] bg-[#F0F3F5] relative">
      <div
        class="back absolute top-4 left-5 bg-gray-default text-default rounded-full p-1.5"
      >
        <Icon
          icon="ic:outline-arrow-back-ios"
          color="#7e8c96"
          width="20"
          height="20"
        />
      </div>
      <div class="w-full h-2/3 step flex justify-center items-center">
        <div class="relative">
          <span class="text-white bg-default rounded-full px-3 py-1">1</span>
          <h3 class="font-bold text-default absolute w-full">対象商覧</h3>
        </div>
        <div class="h-[3px] w-6 rounded-xl bg-gray-default"></div>
        <span class="text-white bg-gray-default rounded-full px-3 py-1">2</span>
        <div class="h-[3px] w-6 rounded-xl bg-gray-default"></div>
        <span class="text-white bg-gray-default rounded-full px-3 py-1">3</span>
        <div class="h-[3px] w-6 rounded-xl bg-gray-default"></div>
        <span class="text-white bg-gray-default rounded-full px-3 py-1">4</span>
      </div>
    </div>
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

    <div class="p-2">
      <div class="colors px-2">
        <label for="color-item" class="text-default font-semibold"
          >カラーを選択</label
        >
        <div id="color-item" class="py-2 mt-1">
          <div class="color flex gap-2">
            <div
              class="border p-[8px] border-black rounded-full h-12 w-12 flex items-center justify-center"
            >
              <div class="bg-black rounded-full w-full h-full"></div>
            </div>
            <div class="border-black rounded-full h-12 w-12 p-[8px]">
              <div class="bg-[#CDD6DD] rounded-full h-full w-full"></div>
            </div>
            <div class="border-black rounded-full h-12 w-12 p-[8px]">
              <div class="bg-[#707F89] rounded-full h-full w-full"></div>
            </div>
            <div class="border-black rounded-full h-12 w-12 p-[8px]">
              <div class="bg-[#004BB1] rounded-full h-full w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="size mt-5 px-2">
        <label class="label">
          <span class="text-default font-semibold">>>出荷に目安</span>
          <span
            class="text-default font-semibold text-xs underline decoration-1 ml-4"
            >>>出荷に目安</span
          >
        </label>
        <div class="flex flex-wrap gap-2 items-center gap-4">
          <div class="item mt-4 flex flex-col items-center">
            <span
              class="w-14 text-center py-0.5 border-solid rounded-2xl border-2 border-gray-300 text-default font-bold"
              >XS</span
            >
            <span>o</span>
          </div>
          <div class="item mt-4 flex flex-col items-center">
            <span
              class="w-14 text-center py-0.5 border-solid rounded-2xl border-2 border-gray-300 text-default font-bold"
              >S</span
            >
            <span>o</span>
          </div>
          <div class="item mt-4 flex flex-col items-center">
            <span
              class="w-14 text-center py-0.5 border-solid rounded-2xl border-2 border-gray-300 text-default font-bold"
              >M</span
            >
            <span>o</span>
          </div>
          <div class="item mt-4 flex flex-col items-center">
            <span
              class="w-14 text-center py-0.5 border-solid rounded-2xl border-2 border-gray-300 text-default font-bold"
              >L</span
            >
            <span>o</span>
          </div>
          <div class="item mt-4 flex flex-col items-center">
            <span
              class="w-14 text-center py-0.5 border-solid rounded-2xl border-2 border-gray-300 text-default font-bold"
              >XL</span
            >
            <span>o</span>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col gap-y-3 items-center py-5 mt-5 mb-14">
        <button
          @click="handleGoSelectArea"
          class="py-2.5 px-7 rounded-full bg-default text-white font-semibold"
        >
          この商品をデザインする
        </button>
        <span
          class="text-xs underline underline-offset-1 decoration-1 text-default font-semibold"
          >>>マーキング価格について
        </span>
        <span
          class="text-xs underline underline-offset-1 decoration-1 text-default font-semibold"
          >>>出荷に目安</span
        >
      </div>

      <div class="h-0.5 mx-2 bg-gray-300 mb-3"></div>

      <div class="similar-product px-2">
        <div class="px-5 py-2 flex justify-between">
          <span class="font-bold text-default">デザインギャラリー</span>
          <span class="font-bold text-default">^</span>
        </div>

        <div class="w-full bg-[#F0F3F5]">
          <div class="item h-[300px] w-full p-7 pb-0">
            <div class="h-5/6 bg-default rounded-3"></div>
            <div class="pt-4">
              <span class="name-product text-default font-bold"
                >デザインギャラリー</span
              >
            </div>
          </div>
          <div class="item h-[300px] w-full p-7 pb-0">
            <div class="h-5/6 bg-default rounded-3"></div>
            <div class="pt-4">
              <span class="name-product text-default font-bold"
                >デザインギャラリー</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="p-2">
        <div class="px-5 py-2 flex justify-between">
          <span class="font-bold text-default">アイテム情報 </span>
          <span class="font-bold text-default">^</span>
        </div>

        <div class="w-full bg-[#F0F3F5] h-[550px]"></div>
      </div>

      <div class="p-2">
        <div class="px-5 py-2 flex justify-between">
          <span class="font-bold text-default">サイズ寸法（実寸)</span>
          <span class="font-bold text-default">^</span>
        </div>

        <div class="w-full bg-[#F0F3F5] h-[550px]"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ImageModel } from "../../assets/index";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { Icon } from "@iconify/vue";

export default {
  name: "ViewProductDetail",
  components: {
    Icon,
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

<style>
.vueperslides__parallax-wrapper {
  height: 200px !important;
}
</style>
