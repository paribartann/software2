import { OPEN_CAMERA } from './constants';

export function openCamera(hasPermission, type_) {
  return {
    type: OPEN_CAMERA,
    hasPermission,
    type_
  };
}