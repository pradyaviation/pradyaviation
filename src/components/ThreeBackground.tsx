
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const NeuralMatrix = () => {
  const meshRef = useRef<THREE.Points>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const colors = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      // Create neural network-like distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 20 + Math.random() * 80;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Blue-cyan color variations
      colors[i * 3] = 0.0 + Math.random() * 0.3;
      colors[i * 3 + 1] = 0.6 + Math.random() * 0.4;
      colors[i * 3 + 2] = 1.0;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.01;
      ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1);
    }
  });

  return (
    <group>
      <Points ref={meshRef} positions={particlesPosition.positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={1.2}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      <mesh ref={ringRef}>
        <torusGeometry args={[40, 0.5, 16, 100]} />
        <meshBasicMaterial 
          color="#00D4FF" 
          transparent 
          opacity={0.3} 
          wireframe 
        />
      </mesh>
    </group>
  );
};

const OrbitalLighting = () => {
  const lightRef = useRef<THREE.PointLight>(null!);
  
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 50;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 50;
      lightRef.current.intensity = 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 20, 0]}
      color="#00D4FF"
      intensity={1}
      distance={200}
    />
  );
};

const CameraController = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.15) * 1;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas
        camera={{ position: [0, 0, 80], fov: 60 }}
        style={{ background: '#000000' }}
        gl={{ antialias: true, alpha: false }}
      >
        <ambientLight intensity={0.2} />
        <OrbitalLighting />
        <NeuralMatrix />
        <CameraController />
        <fog attach="fog" args={['#000000', 60, 200]} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
