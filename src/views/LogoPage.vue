<template>
  <div class="flex flex-column page-min-height items-center">
    <div class="text-center">
      <h1>DESIGN</h1>
      <h2>ベースのデザインを選ぶ</h2>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <div class="flex flex-col pt-0.5 p-2.5 w-[155px] h-[204px] border-form">
        <p class="mb-2.5">1行</p>

        <div class="boxing-logo">
          <p>1966</p>
        </div>
      </div>
      <div class="flex flex-col pt-0.5 p-2.5 w-[155px] h-[204px] border-form">
        <p class="mb-2.5">2行</p>

        <div class="boxing-logo">
          <p>MARK ON</p>
        </div>
      </div>
      <div class="flex flex-col pt-0.5 p-2.5 w-[155px] h-[204px] border-form">
        <p class="mb-2.5">3行</p>
        <div class="boxing-logo">
          <p>Everest Denali Aconcagua</p>
        </div>
      </div>
      <div class="flex flex-col pt-0.5 p-2.5 w-[155px] h-[204px] border-form">
        <p class="mb-2.5">1行（大）</p>
        <div class="boxing-logo">
          <p>803</p>
        </div>
      </div>
      <div class="flex flex-col pt-0.5 p-2.5 w-[155px] h-[204px] border-form">
        <p class="mb-2.5">2行（大小）</p>
        <div class="boxing-logo flex flex-col">
          <p>MARK ON</p>
          <p>803</p>
        </div>
      </div>
      <div
        @click="clickLogo"
        class="cursor-pointer flex flex-col items-center pt-0.5 p-2.5 w-[155px] h-[204px] border-form"
      >
        <p class="mb-2.5">オリジナルデザイン</p>
        <div class="boxing-logo">
          <p>THE NORTH FACE</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between my-10">
      <button
        class="hover:bg-gray-300 hover:text-white border-2 border-black w-[275px] h-[50px] mb-[20px]"
      >
        クリア
      </button>
      <button
        class="hover:bg-gray-300 hover:text-white border-black border-[1px] w-[275px] h-[50px]"
      >
        キャンセル
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoPage",
  methods: {
    clickLogo() {
      this.$router.push({ name: "logo-editor" });
    },
  },
};
</script>

<style scoped>
.boxing-logo {
  position: relative;
  margin: 10px auto;
  /* width: 80%; */
  width: 100%;
  /* padding-bottom: 20%; */
  background-color: white;
  border: 1px solid black;
  height: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
}

.boxing-logo::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  border: 1px solid #fff;
  height: 100%;
  width: 100%;
  border-radius: 10%;
}

.boxing-logo::after {
  content: "";
  position: absolute;
  bottom: -1px;
  right: -1px;
  border: 1px solid #fff;
  height: 100%;
  width: 100%;
  border-radius: 10%;
}

.border-form {
  border: 1px solid #cccccc;
}

p {
  font-family: "Meiryo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
}

/* 
.boxing-logo::before,
.boxing-logo::after,
.boxing-logo:first-child::before,
.boxing-logo:first-child::after {
    position: absolute;
    width: 80px;
    height: 80px;
    border-color: black;
    border-style: solid;
    content: '';
}

.boxing-logo::before {
    top: 0;
    left: 0;
    border-width: 1px 0 0 1px;
}

.boxing-logo::after {
    top: 0;
    right: 0;
    border-width: 1px 1px 0 0;
} */

/* .boxing-logo:first-of-type::before {
    bottom: 0;
    right: 0;
    border-width: 0 1px 1px 0;
    background-color: red;
}

.boxing-logo>:first-of-type::after {
    bottom: 0;
    left: 0;
    border-width: 0 0 1px 1px;
} */
</style>
