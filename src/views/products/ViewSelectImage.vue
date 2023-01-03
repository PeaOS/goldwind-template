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
        <span class="text-white bg-gray-default rounded-full px-3 py-1">2</span>
        <div class="h-[3px] w-6 rounded-xl bg-gray-default"></div>
        <span class="text-white bg-gray-default rounded-full px-3 py-1">3</span>
        <div class="h-[3px] w-6 rounded-xl bg-gray-default"></div>
        <span class="text-white bg-default rounded-full px-3 py-1">4</span>
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
    </div>

    <div class="w-full flex flex-col gap-y-5 items-center py-5">
      <button
        @click="handleGoSelectFormat"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        データアップロード
      </button>
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
export default {
  name: "ViewSelectImage",
};
</script>

<style scoped></style>
