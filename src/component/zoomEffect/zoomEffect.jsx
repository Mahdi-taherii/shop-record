import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

function ZoomEffect(src, width, height) {
  return (
    <div className="cursor-zoom-in pt-100 mt-80">
      <InnerImageZoom width={width} height={height} src={src} zoomSrc={src} />
    </div>
  );
}

export default ZoomEffect;
