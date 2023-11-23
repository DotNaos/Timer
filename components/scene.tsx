import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useEffect, useRef } from "react";

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<OrbitControls>();

  useEffect(() => {
    controlsRef.current = new OrbitControls(camera, gl.domElement);
    return () => {
      controlsRef.current?.dispose();
    };
  }, [camera, gl]);

  useFrame(() => {
    controlsRef.current?.update();
  });

  return null;
};


function Scene() {
  const particleCount = 5000;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = Math.random() * 20 + 10; // random radius between 10 and 30
    const theta = Math.random() * Math.PI * 2; // random angle between 0 and 2pi
    const phi = Math.random() * Math.PI; // random angle between 0 and pi

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta); // x position
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y position
    positions[i3 + 2] = radius * Math.cos(phi); // z position
  }

  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  return (
    <div
    className="absolute w-screen h-screen -z-[0]">
      <Canvas
        camera={{ position: [0, 0, 35] }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <motion.group>
          <points geometry={particles}>
            <pointsMaterial color={0x000000} size={0.08} />
          </points>
        </motion.group>
        <CameraControls />
        <Animation  particles={particles}/>
      </Canvas>
    </div>
  );
}

function Animation({particles}: any) {
  const { clock, scene } = useThree();
  console.log(particles);

  const positions = particles?.geometry?.attributes.position.array as Float32Array | undefined;
  const particleCount = positions ? positions.length / 3 : 0;

  useFrame(() => {
    const time = clock.getElapsedTime();

    if (positions) {
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = Math.random() * 20 + 10; // random radius between 10 and 30
        const theta = time * 0.5 + i * 0.1; // adjust the speed and rotation
        const phi = time * 0.3 + i * 0.1; // adjust the speed and rotation

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta); // x position
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y position
        positions[i3 + 2] = radius * Math.cos(phi); // z position
      }
    }
  });

  return null;
}

export default Scene;
