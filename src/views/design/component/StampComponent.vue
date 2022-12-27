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
        class="active flex items-center gap-2 px-2 border-solid head-button"
      >
        <img src="../../../assets/design/ic-person.png" alt="" />
        <span>スタンプ</span>
      </button>

      <button
        @click="handleClickGoToMyTemplate"
        class="flex items-center gap-2 px-2 border-solid head-button"
      >
        <img src="../../../assets/design/ic-my.png" alt="" />
        <span>保存画像</span>
      </button>
    </div>

    <div class="preview-editor flex border-black p-4">
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
      <!--      preview-->
      <button
        @click="handleToShowPreview"
        class="head-button active px-2 border-solid border-[1px] rounded-md active"
      >
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

    <div class="editor">
      <div class="grid grid-cols-4 gap-2 px-5">
        <div
          class="cursor-pointer stamp-item relative"
          :class="{ active: index === selectIndex }"
          v-for="(stampUrl, index) in stampUrls"
          :key="index"
          @click="handleToSelectStamp(stampUrl, index)"
        >
          <img width="100" height="90" :src="stampUrl" alt="stamp" />
          <img
            width="24"
            height="24"
            src="../../../assets/stamp/ic-search.png"
            alt=""
            class="edit-stamp absolute"
          />
        </div>
      </div>

      <div class="color-logo flex justify-center">
        <div class="w-2/5 grid grid-cols-5 gap-0 items">
          <div
            v-for="color in colors"
            :key="color"
            class="item cursor-pointer"
            @click="handleSelectColor(color)"
          >
            <div v-bind:style="{ backgroundColor: color }" class="color"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { fabric } from "fabric";
import { previewState } from "../../../states/previewState";
export default {
  name: "StampComponent",
  setup() {
    const canvas = null;
    const stampUrls = [
      "/src/assets/stamp/stamp1.png",
      "/src/assets/stamp/stamp2.png",
      "/src/assets/stamp/stamp3.png",
      "/src/assets/stamp/stamp4.png",
      "/src/assets/stamp/stamp5.png",
      "/src/assets/stamp/stamp6.png",
      "/src/assets/stamp/stamp7.png",
      "/src/assets/stamp/stamp8.png",
    ];

    const colors = [
      "#FFFFFF",
      "#000000",
      "#071F2C",
      "#CCCCCC",
      "#003087",
      "#0272CE",
      "#007A33",
      "#01594C",
      "#DA291C",
      "#F0B323",
    ];
    const router = useRouter();
    return {
      router,
      stampUrls,
      colors,
      canvas,
    };
  },

  data() {
    return {
      selectIndex: -1,
      previewState,
      canvasHeight: 0,
      canvasWidth: 0,
    };
  },

  mounted() {
    this.canvas = new fabric.Canvas(this.$refs["design-frame-ref"], {
      backgroundColor: "white",
      isDrawingMode: false,
      fireRightClick: true,
      stopContextMenu: true,
    });
    this.canvasHeight = this.$refs["design-frame-ref"].height;
    this.canvasWidth = this.$refs["design-frame-ref"].width;

    this.addEventToCanvas();
  },
  methods: {
    addEventToCanvas() {
      this.canvas.on({
        "object:moving": this.disableMovingElementOutOfCanvas,
      });
    },

    disableMovingElementOutOfCanvas(e) {
      const obj = e.target;
      // if object is too big ignore
      if (
        obj.currentHeight > obj.canvas.height ||
        obj.currentWidth > obj.canvas.width
      ) {
        return;
      }
      obj.setCoords();
      // top-left  corner
      if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
        obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
        obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
      }
      // bot-right corner
      if (
        obj.getBoundingRect().top + obj.getBoundingRect().height >
          obj.canvas.height ||
        obj.getBoundingRect().left + obj.getBoundingRect().width >
          obj.canvas.width
      ) {
        obj.top = Math.min(
          obj.top,
          obj.canvas.height -
            obj.getBoundingRect().height +
            obj.top -
            obj.getBoundingRect().top
        );
        obj.left = Math.min(
          obj.left,
          obj.canvas.width -
            obj.getBoundingRect().width +
            obj.left -
            obj.getBoundingRect().left
        );
      }
    },

    handleReset() {
      this.canvas.clear();
      this.previewState.setPreviewUrl(
        "https://itemimg.goldwin.co.jp/itemimg/GDW01/A0GDW00013YV/01_001-750.jpg"
      );
    },

    handleToSelectStamp(url, index) {
      this.handleClearCanvas();
      fabric.Image.fromURL(
        url,
        (image) => {
          const newImage = image.set({
            left: 100,
            top: 50,
            angle: 0,
            // scaleX: this.canvasWidth / image.width / 2,
            // scaleY: this.canvasWidth / image.width / 2,
            originX: "left",
            originY: "top",
          });
          this.canvas.add(newImage);
        },
        {}
      );

      this.selectIndex = index;
    },

    handleToShowPreview() {
      const imageUrlOfCanvas = this.canvas.toDataURL();
      // this.imageUrl = [...this.href];

      this.previewState.setPreviewUrl(imageUrlOfCanvas);
      // saveAs(this.href, "preview.png");
    },

    handleClearCanvas() {
      this.canvas.clear();
    },

    handleClickGoToEditor() {
      this.router.push("/design/editor");
    },

    handleClickGoToMyTemplate() {
      this.router.push("/design/my-template");
    },

    handleSelectColor(color) {
      console.log(color);
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
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
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
  height: 44%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
  padding: 10px 10px;
}

.content .right .right-content .editor .color-logo .items {
  margin-top: 20px;
}
.content .right .right-content .editor .color-logo .items .item {
  height: 30px;
  width: 30px;
  padding: 3px;
  margin: 3px;
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

.stamp-item {
  border: 1px solid lightgray;
  padding: 2px;
}
.editor .active {
  box-shadow: gray 0px 0px 0px 2px;
}

.stamp-item:hover {
  box-shadow: gray 0px 0px 0px 2px;
}
.edit-stamp {
  bottom: 0;
  right: 0;
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
