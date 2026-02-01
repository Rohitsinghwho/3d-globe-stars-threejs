import ScreenManager from "./scene";
import { scene,camera,renderer } from "./scene";
import Globe from "./globe.js";
const solarSystem = new ScreenManager();
const globe= new Globe(scene);

function animate(){
    requestAnimationFrame(animate);
    globe.update();
    renderer.render(scene,camera)
}

animate()