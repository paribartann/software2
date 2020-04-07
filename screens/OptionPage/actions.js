import { OPEN_CAMERA, CHANGE_CAMERA_TYPE } from './constants';

export function openCamera(hasPermission, type_) {
  return {
    type: OPEN_CAMERA,
    hasPermission,
    type_
  };
}


export function changeCameraType( type_ ) {
  return {
    type: CHANGE_CAMERA_TYPE,
    type_,
  };
}