<template>
  <div class="right-content">
    <div class="head">
      <button
        @click="handleClickGoToEditor()"
        class="flex items-center gap-2 px-2 border-solid head-button"
      >
        <img src="../../../assets/design/ic-t.png" alt="" />
        <span>テキスト</span>
      </button>

      <button
        @click="handleClickGoToEditor()"
        class="flex items-center gap-2 px-2 border-solid head-button"
      >
        <input
          ref="imageDesign"
          type="file"
          class="hidden h-100"
          maxlength="1"
        />
        <img src="../../../assets/design/ic-mountain.png" alt="" />
        <span>画像読込</span>
      </button>

      <button
        @click="handleClickGoToStamp"
        class="flex items-center gap-2 px-2 border-solid head-button"
      >
        <img src="../../../assets/design/ic-person.png" alt="" />
        <span>スタンプ</span>
      </button>

      <button
        class="active flex items-center gap-2 px-2 border-solid head-button"
      >
        <img src="../../../assets/design/ic-my.png" alt="" />
        <span>保存画像</span>
      </button>
    </div>

    <div class="preview-editor flex border-solid border-2 border-black p-4">
      <div class="h-100 w-1/4">
        <p class="text-sm">プリント画像作成：</p>
        <p class="text-sm">【1200pxx1200px】</p>
      </div>
      <div class="h-100 p-0 w-2/3">
        <canvas
          ref="design-frame-ref"
          id="design-frame"
          class="canvas-design"
          width="370"
          height="280"
        ></canvas>
      </div>
    </div>

    <div class="action">
      <button class="head-button active px-2 border-solid rounded-md active">
        <span>←プレビュー反映</span>
      </button>
      <div>
        <!-- reset design-->
        <button
          @click="handleReset"
          class="head-button px-2 border-solid rounded-md"
        >
          <span>リセット</span>
        </button>
        <!--  download image preview-->
        <button class="head-button px-2 border-solid rounded-md ml-2">
          <span>プリント画像確定</span>
        </button>
      </div>
    </div>

    <div class="editor"></div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "MyTemplateComponent",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },

  methods: {
    handleReset() {
      // this.canvas.clear();
    },

    handleClickGoToEditor() {
      this.router.push("/design/editor");
    },

    handleClickGoToStamp() {
      this.router.push("/design/stamp");
    },
  },
};
</script>

<style scoped>
.content .right {
  height: 100%;
}
.content .right .right-content {
  height: 100%;
  padding: 0px 10px;
}
.content .right .right-content .head {
  display: flex;
  justify-content: space-between;
}
.content .right .right-content .head .head-button {
  /* border: 1px solid #000000; */
  background-color: #939494;
  border-radius: 6px;
}
.content .right .right-content .head .head-button span {
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  color: #000000;
}
.content .right .right-content .head .active {
  background-color: #cae5fb !important;
}
.content .right .right-content .preview-editor {
  /*height: 45%;*/
  width: 100%;
  /*background-color: rgb(21, 135, 201);*/
  margin: 15px 0 10px 0;
}
.content .right .right-content .action {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.content .right .right-content .action button {
  border-radius: 5px;
  background-color: #dee1e2;
}
.content .right .right-content .action .active {
  background-color: #cae5fb !important;
}
.content .right .right-content .editor {
  height: 40%;
  border: 2px solid #000000;
  padding: 10px 20px;
}
.content .right .right-content .editor .color-logo .items .item {
  height: 30px;
  width: 30px;
  padding: 3px;
  margin: 5px;
  border: 1px solid gray;
}
.content .right .right-content .editor .color-logo .items .item .color {
  height: 22px;
  width: 22px;
  border: 1px solid lightgray;
}
.content .right .right-content .editor .color-logo .items .active {
  border: 2px solid black;
}
.content .right .right-content .editor .color-logo .items .active .color {
  height: 20px;
  width: 20px;
}
input,
textarea,
select {
  border: solid 1px black;
}
canvas {
  /*border: solid 1px black;*/
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>
