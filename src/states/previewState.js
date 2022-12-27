import { reactive } from "vue";
import { meshCoordinates } from "../consts/meshCoordinates";
import { Direction } from "../enums/Direction";

export const previewState = reactive({
  previewUrl: "",
  direction: Direction.FRONT,
  logoUrl: "",
  currentIndexUrl: 0,

  setLogoUrl(url) {
    this.logoUrl = url;
  },

  setPreviewUrl(url) {
    this.previewUrl = url;
  },

  setDirection(direction) {
    this.direction = direction;
  },

  setCurrentIndexUrl(index) {
    this.currentIndexUrl = index;
  },

  getDirection(direction) {
    // default front
    let mesh = meshCoordinates.front;

    switch (direction) {
      case Direction.RIGHT:
        mesh = meshCoordinates.right;
        break;
      case Direction.LEFT:
        mesh = meshCoordinates.left;
        break;
      case Direction.BACK:
        mesh = meshCoordinates.back;
        break;
      default:
        mesh = meshCoordinates.front;
        break;
    }

    return mesh;
  },

  drawTShirt(previewUrl, canvas) {
    const previewImage = new Image();
    previewImage.src = previewUrl;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(previewImage, 0, 0);
  },

  async drawStrokeLine(canvas) {
    let i, j;
    let point0, point1, point2, point3;
    let ctx = await canvas.getContext("2d");
    ctx.restore();

    // パスをリセット
    ctx.beginPath();

    // 線の色
    ctx.strokeStyle = "orange";

    // 線の太さ
    ctx.lineWidth = 2;

    let mesh = this.getDirection(this.direction);

    const split = mesh.length - 1;

    // ワク線表示
    for (i = 0; i <= split; i += 1) {
      for (j = 0; j <= split; j += 1) {
        point0 = mesh[i][j];

        // jが最大なら0
        if (j === split) {
          point1 = 0;
        } else {
          point1 = mesh[i][j + 1];
        }

        // iが最大なら0
        if (i === split) {
          point2 = 0;
          point3 = 0;
        } else {
          point2 = mesh[i + 1][j];

          // jが最大なら0
          if (j === split) {
            point3 = 0;
          } else {
            point3 = mesh[i + 1][j + 1];
          }
        }

        // 横線
        if (i === 0 || i === split) {
          // パスをリセット
          ctx.beginPath();

          // 線を引くスタート地点に移動
          ctx.moveTo(point0.x, point0.y);

          // スタート地点から線を引く
          ctx.lineTo(point1.x, point1.y);

          // 線を描画する
          ctx.stroke();
        }

        // 縦線
        if (j === 0 || j === split) {
          // パスをリセット
          ctx.beginPath();

          // 線を引くスタート地点に移動
          ctx.moveTo(point0.x, point0.y);

          // スタート地点から線を引く
          ctx.lineTo(point2.x, point2.y);

          // 線を描画する
          ctx.stroke();
        }
      }
    }
  },

  async drawPreviewWithLogo(canvas) {
    const logoImage = new Image();
    logoImage.src = this.logoUrl;
    // canvas = document.getElementById("cv");

    let ctx = await canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawTShirt(this.previewUrl, canvas);

    // canvas.width = 1000;
    // canvas.height = 1000;

    const imgW = logoImage.width;
    const imgH = logoImage.height;

    let mesh = this.getDirection(this.direction);

    const split = mesh.length - 1;

    let i, j;
    let point0, point1, point2, point3;

    ctx.save();
    // ロゴ表示
    for (i = 0; i < split; i += 1) {
      for (j = 0; j < split; j += 1) {
        ctx.save();

        point0 = mesh[i][j];
        point1 = mesh[i][j + 1];
        point2 = mesh[i + 1][j];
        point3 = mesh[i + 1][j + 1];

        ctx.beginPath();
        ctx.moveTo(point0.x, point0.y);
        ctx.lineTo(point1.x, point1.y);
        ctx.lineTo(point2.x, point2.y);
        ctx.closePath();
        ctx.clip();
        ctx.transform(
          ((point1.x - point0.x) / imgW) * split,
          ((point1.y - point0.y) / imgW) * split,
          ((point2.x - point0.x) / imgH) * split,
          ((point2.y - point0.y) / imgH) * split,
          point0.x,
          point0.y
        );

        ctx.globalAlpha = 0.9;
        ctx.drawImage(logoImage, (-imgW / split) * j, (-imgH / split) * i);
        ctx.drawImage(logoImage, (-imgW / split) * j, (-imgH / split) * i);

        ctx.restore();
        ctx.save();

        ctx.beginPath();
        ctx.moveTo(point2.x, point2.y);
        ctx.lineTo(point1.x, point1.y);
        ctx.lineTo(point3.x, point3.y);
        ctx.closePath();
        ctx.clip();
        ctx.transform(
          ((point3.x - point2.x) / imgW) * split,
          ((point3.y - point2.y) / imgW) * split,
          ((point3.x - point1.x) / imgH) * split,
          ((point3.y - point1.y) / imgH) * split,
          point2.x,
          point2.y
        );
        ctx.globalAlpha = 0.9;
        ctx.drawImage(
          logoImage,
          (-imgW / split) * j,
          (-imgH / split) * (i + 1)
        );
        ctx.drawImage(
          logoImage,
          (-imgW / split) * j,
          (-imgH / split) * (i + 1)
        );

        ctx.restore();
      }
    }

    // draw line
    this.drawStrokeLine(canvas);
  },

  async resetCanvas(canvas) {
    let ctx = await canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawTShirt(this.previewUrl, canvas);

    await this.drawStrokeLine(canvas, this.direction);
  },
});
