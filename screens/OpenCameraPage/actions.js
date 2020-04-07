import { CHANGE_CAMERA_TYPE, TAKE_PICTURE, OPEN_GALLERY } from './constants';

export function openGallery() {
  return {
    type: OPEN_GALLERY,
    //image_
  };
}

export function changeCameraType( type_ ) {
    return {
      type: CHANGE_CAMERA_TYPE,
      type_,
    };
  }


  export function savePicture( image_ ) {
    return {
      type: TAKE_PICTURE,
      image_,
    };
  }

  