import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Float, PerspectiveCamera } from '@react-three/drei';
import { Vector3, Group, Mesh, BufferGeometry, Material, NormalBufferAttributes } from 'three';
import { useTheme } from '../../providers/ThemeProvider';

type GeometryMeshProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  scale?: number;
  type: 'cube' | 'sphere' | 'torus' | 'cone' | 'cylinder';
  speed?: number;
  floatIntensity?: number;
};

const GeometryMesh: React.FC<GeometryMeshProps> = ({ 
  position, 
  rotation = [0, 0, 0], 
  color, 
  scale = 1, 
  type, 
  speed = 0.5,
  floatIntensity = 1
}) => {
  const meshRef = useRef<Group>(null);
  const rotationSpeedX = Math.random() * 0.001 * speed;
  const rotationSpeedY = Math.random() * 0.002 * speed;
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeedX;
      meshRef.current.rotation.y += rotationSpeedY;
    }
  });
  
  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.2} 
      floatIntensity={floatIntensity}
      position={position}
    >
      <group ref={meshRef} rotation={rotation as [number, number, number]} scale={scale}>
        {type === 'cube' && (
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} wireframe />
          </mesh>
        )}
        {type === 'sphere' && (
          <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.7, 16, 16]} />
            <meshStandardMaterial color={color} wireframe />
          </mesh>
        )}
        {type === 'torus' && (
          <mesh castShadow receiveShadow>
            <torusGeometry args={[0.5, 0.2, 16, 32]} />
            <meshStandardMaterial color={color} wireframe />
          </mesh>
        )}
        {type === 'cone' && (
          <mesh castShadow receiveShadow>
            <coneGeometry args={[0.7, 1.5, 16]} />
            <meshStandardMaterial color={color} wireframe />
          </mesh>
        )}
        {type === 'cylinder' && (
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.5, 0.5, 1.5, 16]} />
            <meshStandardMaterial color={color} wireframe />
          </mesh>
        )}
      </group>
    </Float>
  );
};

// Scene with multiple floating elements
const Scene = () => {
  const { theme } = useTheme();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { mouse } = useThree();
  
  // Interpolated camera position based on mouse
  useFrame((state) => {
    if (cameraRef.current) {
      // Subtle camera movement based on mouse position
      cameraRef.current.position.x = THREE.MathUtils.lerp(
        cameraRef.current.position.x,
        mouse.x * 2,
        0.05
      );
      cameraRef.current.position.y = THREE.MathUtils.lerp(
        cameraRef.current.position.y,
        mouse.y * 1,
        0.05
      );
      cameraRef.current.lookAt(new Vector3(0, 0, 0));
    }
  });
  
  const primaryColor = theme === 'dark' ? '#6d28d9' : '#8b5cf6';
  const secondaryColor = theme === 'dark' ? '#0d9488' : '#14b8a6';
  const accentColor = theme === 'dark' ? '#f59e0b' : '#facc15';
  
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 10]}
        fov={60}
        near={0.1}
        far={1000}
      />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      
      {/* Primary color elements */}
      <GeometryMesh type="cube" position={[-3, 2, -5]} color={primaryColor} scale={1.5} speed={0.2} />
      <GeometryMesh type="sphere" position={[4, -2, -8]} color={primaryColor} scale={1.2} speed={0.3} />
      <GeometryMesh type="torus" position={[-5, -3, -10]} color={primaryColor} speed={0.4} />
      
      {/* Secondary color elements */}
      <GeometryMesh type="cone" position={[5, 3, -12]} color={secondaryColor} scale={1.3} speed={0.25} />
      <GeometryMesh type="sphere" position={[-2, -4, -6]} color={secondaryColor} scale={0.8} speed={0.35} />
      <GeometryMesh type="cube" position={[3, 4, -9]} color={secondaryColor} scale={0.9} speed={0.3} />
      
      {/* Accent color elements */}
      <GeometryMesh type="cylinder" position={[0, 3, -7]} color={accentColor} scale={1.1} speed={0.2} />
      <GeometryMesh type="torus" position={[-4, 0, -12]} color={accentColor} scale={0.7} speed={0.4} />
    </>
  );
};

type Background3DProps = {
  className?: string;
};

const Background3D: React.FC<Background3DProps> = ({ className = '' }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <div className={`fixed inset-0 -z-10 opacity-40 ${className}`}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D;