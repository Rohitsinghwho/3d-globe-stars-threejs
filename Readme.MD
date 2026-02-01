# 3D Globe and Stars - Three.js

A mesmerizing interactive 3D globe surrounded by a dynamic starfield, built with Three.js. Features realistic Earth textures, atmospheric glow, orbit controls, and particle-based stars for an immersive space visualization experience.

## ✨ Features
- Realistic 3D Earth with day/night textures and bump mapping
- Dynamic starfield with thousands of animated particles
- Smooth orbit controls for full 360° navigation
- Atmospheric shader effects for glowing edges
- Responsive design optimized for all screen sizes
- Performant rendering with 60fps target

## 🔗 Live Demo
[![Demo](https://img.shields.io/badge/Live-Demo-blue)](https://earth-rotation-six.vercel.app)

## 🛠️ Tech Stack
| Technology | Purpose |
|------------|---------|
| **Three.js** (r165+) | 3D rendering engine |
| **OrbitControls** | Camera navigation |
| **GLSL Shaders** | Atmosphere effects |
| **HTML5 Canvas** | WebGL rendering |
| **JavaScript ES6+** | Core logic |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
git clone https://github.com/rohitsinghwho/3d-globe-stars-threejs.git
npm install
npm run dev

3d-globe-stars/
├── public/
│   ├── textures/
│   │   ├── earth-day.jpg
│   │   ├── earth-night.jpg
│   │   ├── earth-bump.jpg
│   │   └── stars.png
│   └── index.html
├── src/
│   ├── js/
│   │   ├── scene.js
│   │   ├── globe.js
│   │   ├── stars.js
│   │   └── controls.js
│   └── shaders/
│       ├── atmosphere.vert
│       └── atmosphere.frag
├── index.html
├── package.json
└── README.md


⭐ Star this repo if you found it helpful! ⭐