
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { camera, renderer } from './scene';

export const controls=new OrbitControls(camera,renderer.domElement);
camera.position.set(0,0,5);
controls.enableDamping=true;
controls.dampingFactor=0.05;
controls.autoRotate=true;
controls.autoRotateSpeed=2.0
