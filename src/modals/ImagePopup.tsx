import React from "react";
import Lightbox from "yet-another-react-lightbox";





type DataType = {
  images: any;
  setIsOpen: any;
  photoIndex: any;
  setPhotoIndex: any;

}

const ImagePopup = ({ images, setIsOpen, photoIndex, setPhotoIndex }:  DataType ) => {
  return (
    <React.Fragment>
      <Lightbox
        open={true}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={(images || []).map((src: string) => ({ src }))}
        on={{ view: ({ index }) => setPhotoIndex(index) }}
      />
    </React.Fragment>
  );
};

export default ImagePopup;



