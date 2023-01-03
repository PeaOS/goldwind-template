<template>
  <div
    class="preview-image border-2 border-gray-300 h-[280px] bg-gray-default opacity-100"
  >
    <canvas
      class="w-full h-full"
      ref="preview-frame-ref"
      id="preview-canvas"
    ></canvas>
    <!--              <img :src="previewState.previewUrl" alt="" />-->
    <!--              <img :src="previewUrl[currentImageIndex]" alt="" />-->
  </div>

  <div class="w-full flex flex-col gap-y-5 items-center py-5 mt-4 mb-14">
    <button
      @click="handleGoSelectFormat"
      class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
    >
      プレビューを閉じる
    </button>
    <button
      @click="handleBackToSelectArea"
      class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
    >
      デザインを決定する
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ModalPreviewLogo",

  data() {
    return {
      isVisible: ref(false),
    };
  },

  methods: {
    toggleDialog() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped></style>
