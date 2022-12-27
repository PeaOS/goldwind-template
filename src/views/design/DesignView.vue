<template>
  <!--  body -->
  <div class="container content">
    <div class="row h-100">
      <!-- left column preview -->
      <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 left">
        <div class="preview">
          <h5 class="title p-3">仕上りイメージ：右袖</h5>
          <div class="h-4/5 preview-content overflow-scroll">
            <div class="w-1/6 previous z-10">
              <img
                class="cursor-pointer"
                @click="handleClickPreviousImage()"
                height="100"
                width="50"
                src="../../assets/design/ic-previous.png"
                alt=""
              />
            </div>
            <div class="preview-image w-4/6">
              <canvas
                ref="preview-frame-ref"
                id="preview-canvas"
                width="1000"
                height="1000"
              ></canvas>
              <!--              <img :src="previewState.previewUrl" alt="" />-->
              <!--              <img :src="previewUrl[currentImageIndex]" alt="" />-->
            </div>
            <div class="w-1/6 pl-5 end z-10">
              <img
                class="cursor-pointer"
                @click="handleClickNextImage()"
                height="100"
                width="50"
                src="../../assets/design/ic-next.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- end left column preview -->

      <!-- right column design-->
      <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 right">
        <LogoEditorComponent
          ref="logo-editor"
          @handleCallBackPreview="handleCreatePreviewImage"
          @handleCallBackReset="handleResetCanvas"
        ></LogoEditorComponent>
      </div>
      <!--  end right column design -->
    </div>
  </div>

  <!--  end body -->
</template>

<script>
import { previewState } from "../../states/previewState";
import LogoEditorComponent from "./component/LogoEditorComponent.vue";
import { ImageModel } from "../../assets";
import { Direction } from "../../enums/Direction";
export default {
  name: "DesignView",
  components: { LogoEditorComponent },
  data() {
    return {
      ImageModel: ImageModel,
      previewState,
      currentImageIndex: previewState.currentIndexUrl,
      canvas: null,
    };
  },
  mounted() {
    this.canvas = this.$refs["preview-frame-ref"];
    previewState.drawTShirt(previewState.previewUrl, this.canvas);
    previewState.drawStrokeLine(this.canvas);
  },
  methods: {
    handleCreatePreviewImage() {
      previewState.drawPreviewWithLogo(this.canvas);
    },

    handleResetCanvas() {
      previewState.resetCanvas(this.canvas);
    },

    handleClickNextImage() {
      if (this.currentImageIndex >= ImageModel.length - 1) return;
      this.currentImageIndex++;

      previewState.setPreviewUrl(ImageModel[this.currentImageIndex]);

      this.changeDirection(this.currentImageIndex);
      this.handleResetCanvas();
      this.$refs["logo-editor"].setHeightWidthForCanvas();
    },

    handleClickPreviousImage() {
      if (this.currentImageIndex === 0) return;
      this.currentImageIndex--;

      previewState.setPreviewUrl(ImageModel[this.currentImageIndex]);

      this.changeDirection(this.currentImageIndex);
      this.handleResetCanvas();
      this.$refs["logo-editor"].setHeightWidthForCanvas();
    },

    changeDirection(index) {
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
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 30px;
  margin-bottom: 30px;
  /*height: 800px;*/
  padding: 20px 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  /*border: 3px solid #000000;*/
}
.content .left {
  height: 100%;
}
.content .left .preview {
  height: 100%;
  /*border: 2px solid #000000;*/
  padding: 0px 10px;
}
.content .left .preview .preview-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content .left .preview .preview-image {
  /*box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;*/
  /*padding: 20px;*/
  height: 650px;
  /* margin: 0 auto; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.preview-content {
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.preview-content::-webkit-scrollbar {
  display: none;
}

.title {
  font-family: "Helvetica 65 Medium 700", sans-serif;
}

.right {
  padding: 10px 0;
}
/*# sourceMappingURL=index.css.map */
</style>
