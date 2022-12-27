<template>
  <div class="flex flex-column items-center">
    <div class="text-center">
      <h1>DESIGN</h1>
      <h2>オリジナルのデザインを作る</h2>
    </div>
    <div class="flex justify-center items-center">
      <!-- this is hard code, alternative with slide later -->
      <!-- Add slide carousel later -->
      <carousel class="h-80 w-80 mb-4" :settings="settings">
        <slide v-for="(imageModel, index) in ImageModel" :key="index">
          <img
            @click="clickImage(imageModel, index)"
            class="h-80"
            :src="imageModel"
          />
        </slide>
        <template #addons="{ slideWidth, currentSlide }">
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

    <p class="text-center mt-1 font-bold font-['Meiryo']">
      デザインしたいエリアを選びましょう
    </p>
    <!-- <div class="d-flex justify-content-center"> -->
    <!-- this is hard code, alternative with slide later -->
    <div class="grid grid-cols-3 gap-4">
      <div
        key="index"
        class="p-2 border-[1px]"
        v-for="(item, index) in ImageModel"
        v-bind:key[index]="msg"
        :key="index"
        @click="clickImage(item, index)"
      >
        <img height="200" width="150" :src="item" />
      </div>
    </div>
    <!-- <div class="d-flex flex-column justify-content-center"> -->
    <div
      class="flex flex-col justify-center items-center mt-[38.5px] border-y-[3px] border-black w-96 px-[10px]"
    >
      <p class="text-center mt-[15.5px] text-[19px] font-medium">Mark On Tee</p>
      <p class="text-center">マークオンティー</p>
      <div class="grid grid-cols-2 border-b-[1px] w-[80%]">
        <p class="mb-0 font-[400px] text-end mr-12 text-[13px]">本体価格</p>
        <p class="mb-0 text-[14px] font-bold mr-10 text-end">4,730円</p>
        <p class="mb-0 font-[400px] text-end mr-12 text-[13px]">プリント代</p>
        <p class="mb-0 text-[14px] font-bold mr-10 text-end">+0円</p>
      </div>
      <div class="flex flex-row border-t-[2px] border-black w-[80%]">
        <p class="w-[400px] text-[13px] text-">合計</p>
        <p class="mb-0 text-[14px] font-bold text-end min-w-fit">
          4,730円 (税込)
        </p>
      </div>
      <p class="text-center my-4">プリント価格について</p>
    </div>
    <div>
      <h3 class="mt-8 mb-4">保存してシェアする</h3>
      <div class="flex flex-row justify-evenly">
        <img src="./../assets/twitter.png" />
        <img src="./../assets/facebook.png" />
        <img src="./../assets/line.png" />
      </div>
    </div>
    <div class="flex flex-col">
      <button class="out-stock">在庫なし</button>
      <button class="save-design">デザインを保存する</button>
      <button class="unsave-exit">保存せずに戻る</button>
      <p class="text-center mt-[20px]">デザイン一覧を見る</p>
    </div>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// import { directSide, leftSide, rightSide, backSide } from "../assets/index"
import { ImageModel } from "./../assets/index";
import { ref } from "vue";
import { previewState } from "../states/previewState";
import { Direction } from "../enums/Direction";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      previewState: previewState,
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
    clickImage(imageUrl, index) {
      switch (index) {
        case 0:
          this.previewState.setDirection(Direction.FRONT);
          break;
        case 1:
          this.previewState.setDirection(Direction.LEFT);
          break;
        case 2:
          this.previewState.setDirection(Direction.RIGHT);
          break;
        case 3:
          this.previewState.setDirection(Direction.BACK);
          break;
      }
      this.previewState.setPreviewUrl(imageUrl);
      this.previewState.setCurrentIndexUrl(index);
      this.$router.push({ name: "logo" });
      return null;
    },
  },
};
const msg = ref("");
</script>

<style scoped>
.out-stock {
  background-color: #666666;
  color: white;
  width: 275px;
  height: 50px;
  margin-top: 40px;
}

.save-design {
  width: 275px;
  height: 50px;
  border: 4px solid black;
  margin-top: 20px;
}

.unsave-exit {
  width: 275px;
  height: 50px;
  margin-top: 20px;
  border: 2px solid black;
}

.carousel__pagination {
  padding: 0;
}
</style>
