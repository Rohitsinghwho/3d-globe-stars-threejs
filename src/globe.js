import * as THREE from 'three';

export class Globe{
    constructor(scene,radius=1.2){
        this.scene=scene;
        this.radius=radius;
        this.mesh=this.createGlobe();
        this.scene.add(this.mesh)
    }

    createGlobe(){
        const geometry=new THREE.SphereGeometry(this.radius,64,64);


        const textureLoader=new THREE.TextureLoader();
        const texture=textureLoader.load('../public/earth/flat_earth03.jpg');
        const material=new THREE.MeshPhongMaterial({map:texture});
        const globe=new THREE.Mesh(geometry,material)

        this.rotationSpeed=0.005;
        return globe;
    }

    update(){
        if(this.mesh){
            this.mesh.rotation.y+=this.rotationSpeed;
        }
    }
}

export default Globe;