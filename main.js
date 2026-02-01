import * as THREE from 'three';

// step 1 create a scene

const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=3;

const renderer=new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth,window.innerHeight); 
document.appendChild(renderer.domElement);


// step 2 create a sphere for earth
