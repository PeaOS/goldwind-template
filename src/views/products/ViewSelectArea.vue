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
    <div class="preview">
      <div class="w-full bg-[#F0F3F5]">
        <div class="item h-[350px] w-full">
          <div class="h-3/4 bg-gray-300 rounded-3"></div>
          <div class="pt-4 flex justify-end gap-4">
            <div
              class="bg-default py-1 gap-2 flex justify-between px-3 rounded-full border-2"
            >
              <input type="checkbox" class="w-5 h-5 rounded-full" />
              <span class="text-white font-semibold text-sm">正面</span>
            </div>
            <div class="relative">
              <div
                class="bg-white py-1 gap-2 flex justify-between px-3 rounded-full border-2"
              >
                <input type="checkbox" class="w-5 h-5 rounded-full" />
                <span class="text-default font-semibold text-sm">背面</span>
              </div>
              <div class="absolute text-default font-bold right-1/4">+$500</div>
            </div>
            <div
              class="bg-white py-1 gap-2 flex justify-between px-3 rounded-full border-2"
            >
              <input type="checkbox" class="w-5 h-5 rounded-full" />
              <span class="text-default font-semibold text-sm">右袖</span>
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
        エリアを決定する
      </button>
      <button
        @click="handleGoSelectFormat"
        class="w-3/4 py-2.5 px-7 rounded-full bg-default text-white font-semibold"
      >
        商品選択へ戻る
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewSelectArea",

  methods: {
    handleGoSelectFormat() {
      this.$router.push({ name: "select-format" });
    },
  },
};
</script>

<style scoped></style>
