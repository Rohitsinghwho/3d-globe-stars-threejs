import ScreenManager from "./scene";
import { scene,camera,renderer } from "./scene";
import Globe from "./globe.js";
import Stars from "./stars.js";
import { controls } from "./controls.js";
const solarSystem = new ScreenManager();
const globe= new Globe(scene);
const stars=new Stars(scene);
function animate(){
    requestAnimationFrame(animate);
    globe.update();
    stars.update();
    controls.update();
    renderer.render(scene,camera)
}

animate()