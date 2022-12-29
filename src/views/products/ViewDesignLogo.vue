<template>
  <div>
    <div class="h-[100px] bg-[#F0F3F5] relative">
      <div
        class="back absolute top-4 left-5 bg-gray-default text-default rounded-full px-3 py-1"
      >
        B
      </div>
      <div class="w-full h-2/3 step flex justify-center items-center relative">
        <span class="text-white bg-gray-default rounded-full px-3 py-1">1</span>
        <div class="h-[3px] w-6 rounded-xl bg-gray-default"></div>
        <span class="text-white bg-default rounded-full px-3 py-1">2</span>
        <div class="h-[3px] w-6 rounded-xl bg-gray-default"></div>
        <span class="text-white bg-gray-default rounded-full px-3 py-1">3</span>
        <div class="h-[3px] w-6 rounded-xl bg-gray-default"></div>
        <span class="text-white bg-gray-default rounded-full px-3 py-1">4</span>
        <!--        <h3 class="font-bold text-default absolute w-full bottom-0 left-28">-->
        <!--          対象商覧-->
        <!--        </h3>-->
      </div>
    </div>
    <div class="p-2">
      <div class="py-2">
        <span class="font-medium text-default text-sm mr-4">Width: 99cm</span>
        <span class="font-medium text-default text-sm mr-4">Height: 99cm</span>
      </div>
      <div class="preview-image border-2 border-gray-300 h-[280px]">
        <canvas
          class="w-full h-full"
          ref="preview-frame-ref"
          id="preview-canvas"
        ></canvas>
        <!--              <img :src="previewState.previewUrl" alt="" />-->
        <!--              <img :src="previewUrl[currentImageIndex]" alt="" />-->
      </div>
      <div class="flex justify-between mt-6">
        <div
          class="bg-default text-white font-semibold w-full py-2 text-center border-2"
        >
          1 行間
        </div>
        <div
          class="bg-white text-default font-semibold w-full py-2 text-center border-2"
        >
          2 行間
        </div>
        <div
          class="bg-white text-default font-semibold w-full py-2 text-center border-2"
        >
          3 行間
        </div>
      </div>
      <div class="w-full bg-[#F0F3F5]">
        <div class="item h-[350px] w-full">
          <div class="p-2">
            <textarea class="w-full" rows="3"></textarea>
          </div>
          <div class="flex justify-end gap-7 px-2 relative">
            <span class="absolute left-4 top-2 text-default"> > </span>
            <div class="flex items-center gap-2">
              <input
                id="text-bold"
                class="w-7 h-7 bg-bl mt-2"
                type="radio"
                checked
              />
              <span class="font-extrabold mt-1">BOLD</span>
            </div>
            <div class="flex items-center gap-2">
              <input id="text-bold" class="w-7 h-7 bg-bl mt-2" type="radio" />
              <span class="font-medium mt-1">MEDIUM</span>
            </div>
            <div class="flex items-center gap-2">
              <input id="text-bold" class="w-7 h-7 bg-bl mt-2" type="radio" />
              <span class="font-light mt-1">LIGHT</span>
            </div>
          </div>

          <div class="colors relative">
            <span class="absolute left-4 top-2 text-default"> > </span>
            <div class="mt-7 flex justify-end">
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

          <div class="px-2 flex justify-between mt-8">
            <div class="font-size">
              <label for="font-size" class="text-default font-bold"
                >フォントのサイ</label
              >
              <div id="font-size" class="flex mt-2">
                <button
                  class="text-default text-4xl bg-white text-center w-12 h-12 rounded-tl-2xl rounded-bl-2xl border pb-2"
                >
                  -
                </button>
                <div
                  class="text-default text-xl bg-white text-center w-[65px] h-12 border pt-2 px-4"
                >
                  20
                </div>
                <button
                  class="text-default text-4xl bg-white text-center w-12 h-12 rounded-tr-2xl rounded-br-2xl border pb-2"
                >
                  +
                </button>
              </div>
            </div>
            <div class="font-size">
              <label for="font-size" class="text-default font-bold">行間</label>
              <div id="font-size" class="flex mt-2">
                <button
                  class="text-default text-4xl bg-white text-center w-12 h-12 rounded-tl-2xl rounded-bl-2xl border pb-2"
                >
                  -
                </button>
                <div
                  class="text-default text-xl bg-white text-center w-[65px] h-12 border pt-2 px-4"
                >
                  20
                </div>
                <button
                  class="text-default text-4xl bg-white text-center w-12 h-12 rounded-tr-2xl rounded-br-2xl border pb-2"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col gap-y-5 items-center py-5 mt-5 mb-14">
      <button
        @click="handleGoSelectFormat"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        プリントプレビュー
      </button>
      <button
        @click="handleBackToSelectArea"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        デザインを決定する
      </button>
      <button
        @click="handleBackToSelectArea"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        フォーマット選択に戻る
      </button>
    </div>
  </div>
</template>

<script>
import { fabric } from "fabric";

export default {
  name: "ViewDesignLogo",

  data() {
    return {
      canvas: null,
    };
  },
  mounted() {
    this.canvas = new fabric.Canvas(this.$refs["design-frame-ref"], {
      // backgroundColor: "white",
      isDrawingMode: false,
      fireRightClick: true,
      stopContextMenu: true,
    });
  },
  methods: {
    handleBackToSelectArea() {
      this.$router.push({ name: "select-area" });
    },
  },
};
</script>

<style scoped></style>
