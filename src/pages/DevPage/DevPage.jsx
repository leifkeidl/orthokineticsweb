import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import jawModelUrl from "../../assets/models/upper_jaw.stl";

export default function DevPage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountEl = mountRef.current;
    if (!mountEl) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);

    const camera = new THREE.PerspectiveCamera(
      60,
      mountEl.clientWidth / mountEl.clientHeight,
      0.1,
      5000
    );
    camera.position.set(0, -120, 80);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountEl.clientWidth, mountEl.clientHeight);
    mountEl.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(100, 100, 100);
    scene.add(directionalLight);

    const material = new THREE.MeshStandardMaterial({
      color: 0xd9d9d9,
      metalness: 0.1,
      roughness: 0.7,
    });

    let mesh = null;
    let animationFrameId = null;

    const loader = new STLLoader();
    loader.load(
      jawModelUrl,
      (geometry) => {
        geometry.computeVertexNormals();
        geometry.computeBoundingBox();
        geometry.center();

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const box = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        box.getSize(size);

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = (camera.fov * Math.PI) / 180;
        const cameraZ = Math.abs((maxDim / 2) / Math.tan(fov / 2)) * 1.8;

        camera.position.set(0, -cameraZ * 0.7, cameraZ * 0.45);
        camera.near = Math.max(0.1, maxDim / 100);
        camera.far = maxDim * 20;
        camera.updateProjectionMatrix();

        controls.target.set(0, 0, 0);
        controls.update();
      },
      undefined,
      (error) => {
        console.error("Failed to load STL:", error);
      }
    );

    const handleResize = () => {
      if (!mountEl) return;
      const width = mountEl.clientWidth;
      const height = mountEl.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      animationFrameId = window.requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }

      controls.dispose();
      renderer.dispose();

      if (mesh) {
        mesh.geometry.dispose();
      }

      if (mountEl && renderer.domElement && mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}
