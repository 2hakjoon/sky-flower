import { useEffect } from "react";
interface ImageOverlayProps {
  url?: string;
  onOverlayed: (blob: File) => void;
}
var imagesLoaded = 0;
export const ImageOverlay = ({ url, onOverlayed }: ImageOverlayProps) => {
  useEffect(() => {
    var canvas = document.getElementById("canvas") as any;
    if (!canvas) return;
    var ctx = canvas.getContext("2d");

    var img1 = loadImage("/marker-frame.png", main);
    var img2 = loadImage(url, main);
    console.log("img2: ", img2);

    function roundedImage(
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function main() {
      imagesLoaded += 1;

      console.log("imagesLoaded: ", imagesLoaded);
      if (imagesLoaded == 2) {
        img1.crossOrigin = "Anonymous";
        ctx.drawImage(img1, 0, 0, 90, 98);

        ctx.save();
        roundedImage(9, 9, 72, 72, 10);
        ctx.clip();
        ctx.drawImage(img2, 9, 9, 72, 72);
        ctx.restore();
        canvas.toBlob((blob: any) => {
          let file = new File([blob], "fileName.jpg", { type: "image/png" });
          // console.log("file: ", file);
          onOverlayed(file);
        }),
          "image/png";
        imagesLoaded = 1;
      }
    }

    function loadImage(src: any, onload: any) {
      var img = new Image();

      img.onload = onload;
      img.src = src;

      return img;
    }
  }, [url]);

  return <canvas key={url} width="90" height="98" id="canvas"></canvas>;
};
