<template>
  <div class="right-content">
    <!-- ===============>>>>>   Head <<<<==================-->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 head">
      <!--      add text-->
      <button
        @click="handleAddTextToCanvas()"
        :class="{ active: selectedAction === action.TEXT }"
        class="flex items-center gap-2 px-2 border-solid head-button"
      >
        <img src="../../../assets/design/ic-t.png" alt="" />
        <span>テキスト</span>
      </button>

      <!--      add image-->
      <button
        @click="handleClickAddImageToCanvas()"
        :class="{ active: selectedAction === action.IMAGE }"
        class="flex items-center gap-2 px-2 border-solid head-button"
      >
        <input
          @change="handleAddNewImage"
          ref="imageDesign"
          type="file"
          class="hidden h-100"
          maxlength="1"
        />
        <img src="../../../assets/design/ic-mountain.png" alt="" />
        <span>画像読込</span>
      </button>

      <!--      go to template-->
      <button
        @click="handleGoToDesignTemplate"
        :class="{ active: selectedAction === action.STAMP }"
        class="flex items-center gap-2 px-2 border-solid head-button"
      >
        <img src="../../../assets/design/ic-person.png" alt="" />
        <span>スタンプ</span>
      </button>

      <!--      go to my template-->
      <button
        @click="handleGoToMyLogo"
        :class="{ active: selectedAction === action.TEMPLATE }"
        class="flex items-center gap-2 px-2 border-solid head-button"
      >
        <img src="../../../assets/design/ic-my.png" alt="" />
        <span>保存画像</span>
      </button>
    </div>
    <!-- ===============>>>>>   End head <<<<==================-->

    <!-- ===============>>>>>   Preview in canvas  <<<<==================-->
    <div class="preview-editor lg:flex p-4">
      <div class="md:w-1/4">
        <p class="text-sm">プリント画像作成：</p>
        <p class="text-xs">
          Width: {{ getHeightWidthOfCanvas.widthCm }}cm({{
            getHeightWidthOfCanvas.widthPx
          }}px)
        </p>
        <p class="text-xs">
          Height: {{ getHeightWidthOfCanvas.heightCm }}cm(
          {{ getHeightWidthOfCanvas.heightPx }}px)
        </p>
      </div>
      <div
        ref="design-frame-ref-div"
        class="design-frame h-100 p-0 w-2/3 relative"
      >
        <img
          @click="deleteSelectedObjectsFromCanvas"
          ref="delete-btn"
          v-show="!isSelectedElement"
          class="btn-delete-element"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tah7xmVep-Rqpcu-Vevu1avBALUz9xo6Eg&usqp=CAU"
          alt=""
          :style="{ top: btnTop + 'px', left: btnLeft + 'px' }"
        />
        <span
          @click="handleBringToFront"
          ref="bring-to-front"
          v-show="!isSelectedElement"
          class="bring-to-front-element cursor-pointer"
          :style="{
            top: btnBringToFrontTop + 'px',
            left: btnBringToFrontRight + 'px',
          }"
        >
          前面に出す
        </span>
        <canvas
          ref="design-frame-ref"
          id="design-frame"
          class="canvas-design"
          width="380"
          height="280"
        ></canvas>
      </div>
    </div>
    <!-- ===============>>>>>   End preview in canvas <<<<==================-->

    <!-- ===============>>>>>   Action <<<<==================-->
    <div class="action">
      <button
        @click="handleToShowPreview"
        class="head-button active px-2 border-solid rounded-md active"
      >
        <span>←プレビュー反映</span>
      </button>
      <div>
        <!-- reset design-->
        <button
          @click="handleReset"
          class="head-button px-2 border-solid rounded-md border-black"
        >
          <span>リセット</span>
        </button>
        <!--  download image preview-->
        <button
          @click="handleToDownloadPreview"
          class="head-button px-2 border-solid rounded-md border-black ml-2"
        >
          <span>プリント画像確定</span>
        </button>
      </div>
    </div>
    <!-- ===============>>>>>   End Action <<<<==================-->

    <!-- ===============>>>>>   Logo editor <<<<==================-->
    <div v-if="selectedAction === action.TEXT" class="editor">
      <div>
        <label class="m-0" for="content-logo">入力フォーム：</label>
        <textarea
          @input="handleChangeContentOfElement"
          :disabled="isDisableTextEditor"
          v-model="currentPropertyOfText.contentOfElement"
          name="content-logo"
          placeholder="Please select text"
          cols="62"
          class="w-100 p-2"
        ></textarea>
      </div>
      <div class="d-flex">
        <!--fonts - color-->
        <div class="w-4/6">
          <div>
            <label class="m-0" for="font-logo">入力フォーム：</label>
            <select
              @change="handleChangeFontFamily"
              v-model="currentPropertyOfText.fontFamily"
              :disabled="isDisableTextEditor"
              class="w-100 px-2"
              name="font-logo"
              id=""
            >
              <option v-for="font in fonts" :key="font" :value="font">
                {{ font }}
              </option>
            </select>
          </div>

          <div class="mt-3">
            <label class="m-0" for="color-logo">テキストカラー：</label>
            <div name="color-logo" class="color-logo">
              <div class="w-3/5 grid grid-cols-5 items">
                <div
                  v-for="color in colors"
                  :key="color"
                  :class="{
                    active: currentPropertyOfText.color === color,
                  }"
                  class="item cursor-pointer"
                  @click="handleSelectColor(color)"
                >
                  <div
                    v-bind:style="{ backgroundColor: color }"
                    class="color"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  end fonts - color -->
        <div class="w-2/6 pl-5">
          <!--  fonts size-->
          <div class="w-100 mt-1">
            <label class="m-0" for="font-size">フォントサイズ：</label>
            <div class="d-flex w-100" name="font-size">
              <button
                @click="handleIncreaseFontSize"
                :disabled="isDisableTextEditor"
                class="px-2 bg-zinc-400"
              >
                +
              </button>
              <input
                min="4"
                :disabled="isDisableTextEditor"
                v-model="currentPropertyOfText.fontSize"
                @change="applyChangeToTextElement"
                class="w-100 text-center"
                type="number"
              />
              <button
                @click="handleDecreaseFontSize"
                :disabled="isDisableTextEditor"
                class="px-2 bg-zinc-400"
              >
                -
              </button>
            </div>
          </div>

          <!--  space character-->
          <div class="w-100 mt-2">
            <label class="m-0" for="font-size">文字間隔：</label>
            <div class="d-flex w-100" name="font-size">
              <button
                @click="handleIncreaseSpaceCharacter"
                :disabled="isDisableTextEditor"
                class="px-2 bg-zinc-400"
              >
                +
              </button>
              <input
                min="5"
                :disabled="isDisableTextEditor"
                v-model="currentPropertyOfText.charSpacing"
                @change="applyChangeToTextElement"
                class="w-100 text-center"
                type="number"
              />
              <button
                @click="handleDecreaseSpaceCharacter"
                :disabled="isDisableTextEditor"
                class="px-2 bg-zinc-400"
              >
                -
              </button>
            </div>
          </div>

          <!--  line height-->
          <div class="w-100 mt-2">
            <label class="m-0" for="font-size">文字行間：</label>
            <div class="d-flex w-100" name="font-size">
              <button
                @click="handleIncreaseLineHeight"
                :disabled="isDisableTextEditor"
                class="px-2 bg-zinc-400"
              >
                +
              </button>
              <input
                min="0.2"
                :disabled="isDisableTextEditor"
                v-model="currentPropertyOfText.lineHeight"
                @change="applyChangeToTextElement"
                class="w-100 text-center"
                type="number"
              />
              <button
                @click="handleDecreaseLineHeight"
                :disabled="isDisableTextEditor"
                class="px-2 bg-zinc-400"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--  end right column design -->
    </div>
    <!-- ===============>>>>>   End Logo editor <<<<==================-->

    <!-- ===============>>>>>   Image editor <<<<==================-->
    <div v-if="selectedAction === action.IMAGE" class="editor"></div>
    <!-- ===============>>>>>   End image editor <<<<==================-->

    <!-- ===============>>>>>   stamp editor <<<<==================-->
    <div v-if="selectedAction === action.STAMP" class="editor stamp-editor">
      <div class="grid grid-cols-4 gap-2 px-5">
        <div
          class="cursor-pointer stamp-item relative"
          :class="{ active: index === selectStampIndex }"
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

      <div class="color-logo flex justify-center mt-2">
        <div class="w-2/5 grid grid-cols-5 gap-0 items">
          <div
            v-for="color in colors"
            :key="color"
            class="item cursor-pointer"
            :class="{
              active: currentColorStamp === color,
            }"
            @click="handleSelectStampColor(color)"
          >
            <div v-bind:style="{ backgroundColor: color }" class="color"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===============>>>>>   End stamp editor <<<<==================-->

    <!-- ===============>>>>>   Template <<<<==================-->
    <div v-if="selectedAction === action.TEMPLATE" class="editor stamp-editor">
      <div class="grid grid-cols-4 gap-2 px-5">
        <div
          class="cursor-pointer stamp-item relative"
          :class="{ active: index === selectTemplateIndex }"
          v-for="(stampUrl, index) in myTemplates"
          :key="index"
          @click="handleToSelectMyTemplate(stampUrl, index)"
        >
          <img width="100" height="90" :src="stampUrl.imageUrl" alt="stamp" />
          <!--          <img-->
          <!--            width="24"-->
          <!--            height="24"-->
          <!--            src="../../../assets/stamp/ic-search.png"-->
          <!--            alt=""-->
          <!--            class="edit-stamp absolute"-->
          <!--          />-->
        </div>
      </div>
    </div>

    <!-- ===============>>>>>   Template <<<<==================-->
  </div>
</template>

<script>
import { fabric } from "fabric";
// import { saveAs } from "file-saver";
import { previewState } from "../../../states/previewState";
import { Direction } from "../../../enums/Direction";
import { canvasSize } from "../../../consts/canvasSize";
import { colors } from "../../../consts/colors";

export default {
  name: "LogoEditorComponent",

  data() {
    return {
      colors: colors,
      previewState,

      isShowBringToFront: false,
      btnBringToFrontTop: 0,
      btnBringToFrontRight: 0,

      isShowDeleteButton: false,
      btnTop: 0,
      btnLeft: 0,

      selectedAction: "TEXT",

      canvasHeight: 0,
      canvasWidth: 0,

      imageUrl: "",

      elementsSelected: [],

      currentPropertyOfText: {
        contentOfElement: "",
        lineHeight: 1.5,
        charSpacing: 20,
        color: "",
        fontFamily: "YuGothL",
        fontSize: 18,
      },

      // =========== stamp data ========\\
      selectStampIndex: -1,
      currentColorStamp: "#000000",

      selectTemplateIndex: -1,
    };
  },

  emits: ["handleCallBackPreview", "handleCallBackReset"],

  setup() {
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

    const myTemplates = [];

    const defaultPropertyOfText = {
      contentOfElement: "Type your text",
      lineHeight: 1.5,
      charSpacing: 20,
      color: "#000000",
      fontFamily: "YuGothL",
      fontSize: 18,
    };

    const action = {
      TEXT: "TEXT",
      IMAGE: "IMAGE",
      STAMP: "STAMP",
      TEMPLATE: "TEMPLATE",
    };
    const fonts = [
      "YuGothL",
      "YuGothR",
      "YuGothB",
      "HelveticaL",
      "HelveticaR",
      "HelveticaB",
    ];
    const canvas = null;

    return {
      canvas,
      action,
      fonts,
      defaultPropertyOfText,
      myTemplates,
      stampUrls,
    };
  },

  mounted() {
    this.canvas = new fabric.Canvas(this.$refs["design-frame-ref"], {
      // backgroundColor: "white",
      isDrawingMode: false,
      fireRightClick: true,
      stopContextMenu: true,
    });

    this.setHeightWidthForCanvas();

    this.addEventToCanvas();
    this.addDeleteKeyPress();
  },

  computed: {
    isSelectedElement() {
      return this.elementsSelected.length === 0;
    },

    isDisableTextEditor() {
      return (
        this.selectedAction !== this.action.TEXT ||
        this.elementsSelected.length === 0
      );
    },

    getHeightWidthOfCanvas() {
      return previewState.direction === Direction.RIGHT ||
        previewState.direction === Direction.LEFT
        ? canvasSize.right
        : previewState.direction === Direction.FRONT
        ? canvasSize.front
        : canvasSize.back;
    },
  },

  methods: {
    // ====================>>>>>> Action button click <<<<================== \\
    handleClickAddImageToCanvas() {
      this.$refs.imageDesign.click();
    },

    handleAddNewImage(e) {
      if (this.selectedAction === this.action.STAMP) {
        this.handleClearCanvas();
      }
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (events) => {
        this.imageUrl = events.target.result;

        fabric.Image.fromURL(
          this.imageUrl,
          (image) => {
            const newImage = image.set({
              left: 0,
              top: 0,
              angle: 0,
              scaleX: this.canvasWidth / image.width / 2,
              scaleY: this.canvasWidth / image.width / 2,
              originX: "left",
              originY: "top",
              lockRotation: true,
            });
            newImage.hasRotatingPoint = false;
            newImage.controls = {
              ...fabric.Text.prototype.controls,
              mtr: new fabric.Control({ visible: false }),
            };
            // disable scale by height
            newImage.setControlsVisibility({
              bl: true,
              br: true,
              tl: true,
              tr: true,
              mt: false,
              mb: false,
              ml: false,
              mr: false,
            });
            newImage.customType = "IMAGE";
            this.canvas.add(newImage);
            this.setActiveElementInCanvas(newImage);
            this.selectedAction = this.action.IMAGE;
          },
          {}
        );
      };
    },

    /**
     * download preview
     */
    handleToDownloadPreview() {
      if (!confirm("このデザインを必ず保存してください")) return;

      const imageUrl = this.canvas.toDataURL({
        format: "png",
      });

      const jsonOfCanvas = this.canvas.toDatalessJSON(["customType"]);

      const newItem = { imageUrl, jsonOfCanvas };

      let myTemplate = JSON.parse(localStorage.getItem("myItems"));
      if (myTemplate) {
        localStorage.removeItem("myItems");
        myTemplate.push(newItem);
      } else {
        myTemplate = [];
        myTemplate.push(newItem);
      }

      localStorage.setItem("myItems", JSON.stringify(myTemplate));

      this.handleClearCanvas();
    },

    handleAddTextToCanvas() {
      if (this.selectedAction === this.action.STAMP) {
        this.handleClearCanvas();
      }
      this.selectedAction = this.action.TEXT;
      const newText = new fabric.Textbox(
        this.defaultPropertyOfText.contentOfElement,
        {
          width: 150,
          top: 0,
          left: 0,
          textAlign: "left",
          centeredScaling: false,
          lineHeight: this.defaultPropertyOfText.lineHeight,
          fontSize: this.defaultPropertyOfText.fontSize,
          charSpacing: this.defaultPropertyOfText.charSpacing,
          fill: this.defaultPropertyOfText.color,
          fontFamily: this.defaultPropertyOfText.fontFamily,
          lockRotation: true,
        }
      );
      // disable scale by height
      newText.setControlsVisibility({
        bl: true,
        br: true,
        tl: true,
        tr: true,
        mt: false,
        mb: false,
        ml: false,
        mr: false,
      });
      newText.controls = {
        ...fabric.Text.prototype.controls,
        mtr: new fabric.Control({ visible: false }),
      };
      newText.customType = "TEXT_BOX";
      this.canvas.add(newText);
      this.setActiveElementInCanvas(newText);
    },

    // ====================>>>>>> End action button click <<<<================== \\

    // ====================>>>>>> Those method use for Editor text <<=================== \\

    setHeightWidthForCanvas() {
      const height =
        previewState.direction === Direction.RIGHT ||
        previewState.direction === Direction.LEFT
          ? 200
          : previewState.direction === Direction.BACK
          ? 220
          : 280;
      const width =
        previewState.direction === Direction.RIGHT ||
        previewState.direction === Direction.LEFT
          ? 200
          : 380;

      this.canvas.setDimensions({ width: width, height: height });

      this.canvasHeight = height;
      this.canvasWidth = width;
    },

    handleSelectElementOnCanvas(object) {
      if (object.selected.length > 1) {
        this.canvas.discardActiveObject();
        return;
      }

      this.elementsSelected = object.selected;
      if (this.elementsSelected.length === 0) return;

      const targetElementSelected = this.elementsSelected[0];

      this.handleSwitchEditor(targetElementSelected);

      this.setCoordinatesToDeleteButton(targetElementSelected.oCoords);
      this.setCoordinatesToBringToFrontButton(targetElementSelected);

      // if (targetElementSelected.text) return;

      this.currentPropertyOfText.fontSize = targetElementSelected.fontSize;
      this.currentPropertyOfText.fontFamily = targetElementSelected.fontFamily;
      this.currentPropertyOfText.color = targetElementSelected.fill;
      this.currentPropertyOfText.contentOfElement = targetElementSelected.text;
      this.currentPropertyOfText.lineHeight = targetElementSelected.lineHeight;
      this.currentPropertyOfText.charSpacing =
        targetElementSelected.charSpacing;
    },

    /**
     * handle change color
     * @param color
     */
    handleSelectColor(color) {
      if (this.isDisableTextEditor) return;
      this.currentPropertyOfText.color = color;
      if (
        this.canvas.getActiveObject() &&
        this.canvas.getActiveObject()._objects
      ) {
        this.canvas.getActiveObject()._objects.forEach((element) => {
          element.set("fill", color);
        });
      } else {
        this.canvas.getActiveObject().set("fill", color);
      }
      this.reRenderElementOnCanvas();
    },

    handleChangeFontFamily() {
      this.applyChangeToTextElement();
    },

    handleChangeContentOfElement() {
      this.applyChangeToTextElement();
    },

    handleIncreaseFontSize() {
      this.currentPropertyOfText.fontSize++;
      this.applyChangeToTextElement();
    },

    handleDecreaseFontSize() {
      if (this.currentPropertyOfText.fontSize < 5) return;

      this.currentPropertyOfText.fontSize--;
      this.applyChangeToTextElement();
    },

    handleIncreaseLineHeight() {
      this.currentPropertyOfText.lineHeight += 0.1;
      this.currentPropertyOfText.lineHeight =
        Math.round(this.currentPropertyOfText.lineHeight * 10) / 10;
      this.applyChangeToTextElement();
    },

    handleDecreaseLineHeight() {
      if (this.currentPropertyOfText.lineHeight < 0.3) return;
      this.currentPropertyOfText.lineHeight -= 0.1;
      this.currentPropertyOfText.lineHeight =
        Math.round(this.currentPropertyOfText.lineHeight * 10) / 10;
      this.applyChangeToTextElement();
    },

    handleIncreaseSpaceCharacter() {
      this.currentPropertyOfText.charSpacing += 5;
      this.applyChangeToTextElement();
    },

    handleDecreaseSpaceCharacter() {
      if (this.currentPropertyOfText.charSpacing < 10) return;

      this.currentPropertyOfText.charSpacing -= 5;
      this.applyChangeToTextElement();
    },

    // ================>>>> End method use for editor text <<<========================= \\

    // =========>>>> Those method use for canvas <<<<<<================\\

    setActiveElementInCanvas(element) {
      this.canvas.setActiveObject(element);
    },
    /**
     * add event select object on canvas
     */
    addEventToCanvas() {
      this.canvas.on({
        "selection:updated": this.handleSelectElementOnCanvas,
        "selection:created": this.handleSelectElementOnCanvas,
        "object:deselected": this.handleDeselectedElementOnCanvas,
        "selection:cleared": this.handleDeselectedElementOnCanvas,
        "object:moving": this.disableMovingElementOutOfCanvas,
        "object:scaling": this.handleScaleObject,
        "mouse:down": this.handleMouseClick,
      });
    },

    applyChangeToTextElement() {
      console.log("Before apply: ");
      console.log(this.elementsSelected);
      this.elementsSelected.forEach((element) => {
        element.fontSize = this.currentPropertyOfText.fontSize;
        element.fontFamily = this.currentPropertyOfText.fontFamily;
        element.fill = this.currentPropertyOfText.color;
        element.text = this.currentPropertyOfText.contentOfElement;
        element.lineHeight = this.currentPropertyOfText.lineHeight;
        element.charSpacing = this.currentPropertyOfText.charSpacing;
      });
      console.log("After apply: ");
      console.log(this.elementsSelected);
      this.reRenderElementOnCanvas();
    },

    /**
     * reRender all element on canvas
     */
    reRenderElementOnCanvas() {
      this.canvas.requestRenderAll();
    },

    /**
     * clear all object in canvas
     */
    handleReset() {
      this.currentPropertyOfText.fontSize = this.defaultPropertyOfText.fontSize;

      this.currentPropertyOfText.fontFamily =
        this.defaultPropertyOfText.fontFamily;

      this.currentPropertyOfText.color = this.defaultPropertyOfText.color;

      this.currentPropertyOfText.contentOfElement = "";

      this.currentPropertyOfText.lineHeight =
        this.defaultPropertyOfText.lineHeight;

      this.currentPropertyOfText.charSpacing =
        this.defaultPropertyOfText.charSpacing;

      this.elementsSelected = [];
      this.handleClearCanvas();
      this.$emit("handleCallBackReset");
    },

    handleDeselectedElementOnCanvas() {
      if (
        this.elementsSelected.length > 0 &&
        this.elementsSelected[0].get("type") === "textbox"
      ) {
        this.elementsSelected.forEach((element) => {
          element.width = element.width * element.scaleX;
          element.height = element.height * element.scaleY;
          element.scaleX = 1;
          element.scaleY = 1;
          element.fontSize = this.currentPropertyOfText.fontSize;
        });
      }

      this.elementsSelected = [];
      // this.selectedAction = this.action.IMAGE;
      this.btnTop = 0;
      this.btnLeft = 0;
    },

    /**
     * set position to delete button
     * @param e
     */
    setCoordinatesToDeleteButton(e) {
      if (!e) return;

      this.btnLeft = e.tl.x > 10 ? e.tl.x - 10 : 0;
      this.btnTop = e.tl.y > 10 ? e.tl.y - 10 : 0;
    },

    /**
     * set position to delete button
     * @param e
     */
    setCoordinatesToBringToFrontButton(e) {
      if (!e) return;

      this.btnBringToFrontRight = e.oCoords.tr.x;
      this.btnBringToFrontTop = e.oCoords.tl.y - 15;
    },

    disableMovingElementOutOfCanvas(e) {
      const obj = e.target;
      this.setCoordinatesToDeleteButton(e.target.oCoords);
      this.setCoordinatesToBringToFrontButton(e.target);

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

    handleMouseClick(element) {
      if (element.button === 3 && element.target) {
        this.setCoordinatesToBringToFrontButton(element.target);
        this.setCoordinatesToDeleteButton(element.target.oCoords);
        this.elementsSelected = element;
      }
    },

    handleScaleObject(element) {
      if (element.target && element.target.get("type") === "textbox") {
        this.currentPropertyOfText.fontSize = (
          element.target.fontSize * element.target.scaleX
        ).toFixed(0);
      }
    },

    handleBringToFront() {
      if (this.elementsSelected.length > 0) {
        this.elementsSelected[0].bringToFront();
      }
    },

    /**
     * add event press delete button
     */
    addDeleteKeyPress() {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Delete") {
          this.deleteSelectedObjectsFromCanvas();
        }
      });
    },

    deleteSelectedObjectsFromCanvas() {
      if (!confirm("このアイテムを削除してもよろしいですか?")) {
        return;
      }
      const selection = this.canvas.getActiveObject();
      if (selection === undefined || selection === null) return;
      if (selection.type === "activeSelection") {
        const _this = this;
        selection.forEachObject((element) => {
          _this.removeElementInCanvas(element);
        });
      } else {
        this.removeElementInCanvas(selection);
      }
      this.canvas.discardActiveObject();
      this.canvas.requestRenderAll();
    },

    handleToShowPreview() {
      const imageUrlOfCanvas = this.canvas.toDataURL();
      this.previewState.setLogoUrl(imageUrlOfCanvas);

      this.$emit("handleCallBackPreview");
    },

    // =========>>>> End those method use for canvas <<<<<<================\\

    /**
     * remove object in canvas
     * @param element
     */
    removeElementInCanvas(element) {
      this.canvas.remove(element);
      this.elementsSelected = [];
    },

    handleClearCanvas() {
      this.canvas.clear();
    },

    handleSwitchEditor(element) {
      switch (element.get("customType")) {
        case "TEXT_BOX":
          this.selectedAction = this.action.TEXT;
          break;
        case "IMAGE":
          this.selectedAction = this.action.IMAGE;
          break;
        case "STAMP":
          this.selectedAction = this.action.STAMP;
          break;
        default:
          this.selectedAction = this.action.TEXT;
          break;
      }
    },

    handleGoToMyLogo() {
      this.myTemplates = JSON.parse(localStorage.getItem("myItems"));
      this.selectedAction = this.action.TEMPLATE;
      this.handleClearCanvas();
    },

    handleGoToDesignTemplate() {
      this.handleReset();
      this.selectedAction = this.action.STAMP;
    },

    // ================Stamp Editor======================= //

    handleToSelectStamp(url, index) {
      this.handleClearCanvas();
      fabric.Image.fromURL(
        url,
        (image) => {
          const newImage = image.set({
            left: 20,
            top: 20,
            angle: 0,
            // scaleX: this.canvasWidth / image.width / 2,
            // scaleY: this.canvasWidth / image.width / 2,
            originX: "left",
            originY: "top",
          });
          newImage.customType = "STAMP";
          // disable scale by height
          newImage.setControlsVisibility({
            bl: true,
            br: true,
            tl: true,
            tr: true,
            mt: false,
            mb: false,
            ml: false,
            mr: false,
          });
          this.canvas.add(newImage);
          newImage.controls = {
            ...fabric.Text.prototype.controls,
            mtr: new fabric.Control({ visible: false }),
          };
          this.setActiveElementInCanvas(newImage);
          this.handleSelectStampColor(this.currentColorStamp);
        },
        {}
      );

      this.selectStampIndex = index;
    },

    handleSelectStampColor(color) {
      this.currentColorStamp = color;
      const activeObject = this.canvas.getActiveObject();
      if (!activeObject) return;

      activeObject.filters[0] = new fabric.Image.filters.BlendColor({
        color,
        mode: "diff",
        alpha: 1,
      });

      activeObject.applyFilters();

      this.reRenderElementOnCanvas();
    },

    // ================ End stamp Editor======================= //

    // ================ My template Editor======================= //
    handleToSelectMyTemplate(template, index) {
      const json = { objects: template.jsonOfCanvas.objects };

      this.canvas.loadFromJSON(
        JSON.stringify(json),
        this.canvas.renderAll.bind(this.canvas),
        function (o, object) {
          fabric.log(o, object);
        }
      );
      this.selectTemplateIndex = index;
    },
    // ================ End my template Editor======================= //
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
  /*display: flex;*/
  /*justify-content: space-between;*/
}
.content .right .right-content .head .head-button {
  /* border: 1px solid #000000; */
  background-color: #939494;
  border-radius: 6px;
}

/* .head-button {
  border-radius: 6px;
} */
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
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
  padding: 20px 20px;
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
  box-shadow: none;
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
.canvas-design {
  /*border: solid 1px black;*/
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

/*.design-frame {*/
/*  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,*/
/*    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;*/
/*}*/

.btn-delete-element {
  position: absolute;
  /*top: v-bind(btnTop) px;*/
  /*left: v-bind(btnLeft) px;*/
  cursor: pointer;
  width: 15px;
  height: 15px;
  z-index: 99999;
}

.bring-to-front-element {
  position: absolute;
  /*top: v-bind(btnTop) px;*/
  /*left: v-bind(btnLeft) px;*/
  cursor: pointer;
  z-index: 99999;
  font-size: 12px;
  color: lightblue;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
}

/*stamp editor*/
.edit-stamp {
  bottom: 0;
  right: 0;
}

.stamp-item {
  border: 1px solid lightgray;
  padding: 2px;
}
.stamp-editor .active {
  box-shadow: gray 0px 0px 0px 2px;
}

.stamp-item:hover {
  box-shadow: gray 0px 0px 0px 2px;
}
.edit-stamp {
  bottom: 0;
  right: 0;
}

/*end stamp editor*/
</style>
