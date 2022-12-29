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

      <div class="w-full bg-[#F0F3F5]">
        <div class="item py-5 w-full">
          <div class="px-2 relative flex gap-4">
            <!--            <span class="absolute left-4 top-2 text-default"> > </span>-->
            <div>
              <img
                src="../../assets/direct.jpg"
                alt=""
                height="100px"
                width="100px"
              />
            </div>
            <div>
              <img
                src="../../assets/direct.jpg"
                alt=""
                height="100px"
                width="100px"
              />
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

          <div class="flex justify-end gap-4 px-2 relative mt-10">
            <span class="absolute left-4 top-2 text-default"> > </span>
            <div class="flex items-center gap-2">
              <input
                id="text-bold"
                class="w-7 h-7 bg-bl mt-2"
                type="radio"
                checked
              />
              <span class="font-normal mt-1 text-xs">Large</span>
            </div>
            <div class="flex items-center gap-2">
              <input id="text-bold" class="w-7 h-7 bg-bl mt-2" type="radio" />
              <span class="font-normal mt-1 text-xs">Medium</span>
            </div>
            <div class="flex items-center gap-2">
              <input id="text-bold" class="w-7 h-7 bg-bl mt-2" type="radio" />
              <span class="font-normal mt-1 text-xs">Small</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col gap-y-5 items-center py-5 mt-5 mb-14">
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
export default {
  name: "ViewSelectStamp",
};
</script>

<style scoped></style>
