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

    var img1 = loadImage(
      "https://cdn.pixabay.com/photo/2022/12/21/12/14/black-circle-7669912_640.png",
      main
    );
    var img2 = loadImage(url, main);
    console.log("img2: ", img2);

    function main() {
      imagesLoaded += 1;

      console.log("imagesLoaded: ", imagesLoaded);
      if (imagesLoaded == 2) {
        img1.crossOrigin = "Anonymous";
        ctx.drawImage(img1, 0, 0, 200, 200);

        ctx.save();
        ctx.beginPath();
        ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
        ctx.strokeStyle = "#2465D3";
        ctx.stroke();
        ctx.clip();
        ctx.drawImage(img2, 20, 20, 180, 180);
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

  return <canvas key={url} width="200" height="200" id="canvas"></canvas>;
};
