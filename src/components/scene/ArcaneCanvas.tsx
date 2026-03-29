import { Float, Line, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';

type ArcaneCanvasProps = {
  variant?: 'hall' | 'library' | 'deep' | 'planner' | 'constellation';
  className?: string;
};

type Point3 = [number, number, number];

const lineSets: Record<NonNullable<ArcaneCanvasProps['variant']>, Point3[][]> = {
  hall: [
    [[-2.6, 0.8, 0], [-1.6, 1.6, 0], [-0.6, 0.6, 0], [0.2, 1.2, 0]],
    [[1.1, 1.2, 0], [2.2, 1.8, 0], [2.8, 0.7, 0]],
  ],
  library: [
    [[-2.6, -0.1, 0], [-1.7, 0.9, 0], [-0.8, 0.2, 0], [0.1, 0.8, 0]],
    [[1.3, -0.7, 0], [2.1, 0.1, 0], [2.9, -0.3, 0]],
  ],
  deep: [
    [[-2.7, 1.6, 0], [-2.1, 0.8, 0], [-1.3, 1.2, 0], [-0.5, 0.5, 0]],
    [[1.5, 1.2, 0], [2.1, 0.4, 0], [2.7, 1.5, 0]],
  ],
  planner: [
    [[-2.2, 0.4, 0], [-1.4, 1, 0], [-0.6, 0.2, 0], [0.2, 0.9, 0], [1.1, 0.3, 0], [1.9, 1.1, 0]],
    [[-1.8, -0.8, 0], [-0.9, -0.3, 0], [0.1, -0.9, 0], [0.9, -0.2, 0], [1.8, -0.8, 0]],
  ],
  constellation: [
    [[-2.7, 0.9, 0], [-1.9, 0.4, 0], [-1.1, 0.7, 0], [-0.2, 0.1, 0]],
    [[0.1, -0.1, 0], [0.9, 0.8, 0], [1.8, 0.2, 0], [2.8, 0.9, 0]],
    [[0.2, -0.2, 0], [0.9, -1, 0], [1.8, -0.2, 0], [2.7, -0.8, 0]],
  ],
};

const palette = {
  hall: '#74f5ff',
  library: '#78eeff',
  deep: '#90ffff',
  planner: '#7ff1ff',
  constellation: '#7ce8ff',
};

const sparkleCount = {
  hall: 80,
  library: 120,
  deep: 55,
  planner: 65,
  constellation: 140,
};

function ArcaneCluster({ variant }: { variant: NonNullable<ArcaneCanvasProps['variant']> }) {
  const ref = useRef<Group | null>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={ref}>
      {lineSets[variant].map((points, index) => (
        <Line
          key={`${variant}-${index}`}
          points={points}
          color={palette[variant]}
          lineWidth={1.2}
          transparent
          opacity={0.8}
        />
      ))}

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh position={variant === 'constellation' ? [0.4, -0.2, 0] : [0, 0, 0]}>
          <octahedronGeometry args={[0.18, 0]} />
          <meshBasicMaterial color={palette[variant]} transparent opacity={0.8} />
        </mesh>
      </Float>

      <Float speed={0.9} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[-1.2, 1.1, 0]}>
          <icosahedronGeometry args={[0.08, 0]} />
          <meshBasicMaterial color="#f8d892" transparent opacity={0.75} />
        </mesh>
      </Float>

      <Float speed={0.7} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[1.6, -0.8, 0]}>
          <dodecahedronGeometry args={[0.1, 0]} />
          <meshBasicMaterial color={palette[variant]} transparent opacity={0.55} />
        </mesh>
      </Float>
    </group>
  );
}

export function ArcaneCanvas({ variant = 'hall', className }: ArcaneCanvasProps) {
  return (
    <div className={className}>
      <Canvas orthographic camera={{ zoom: 90, position: [0, 0, 10] }}>
        <ArcaneCluster variant={variant} />
        <Sparkles
          count={sparkleCount[variant]}
          scale={[7, 4, 2]}
          size={2}
          speed={0.25}
          color={palette[variant]}
          opacity={0.7}
        />
      </Canvas>
    </div>
  );
}
