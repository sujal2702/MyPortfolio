
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, useMatcapTexture } from '@react-three/drei';
import * as THREE from 'three';

const Scene: React.FC = () => {
    const { viewport, camera } = useThree();
    const ref = useRef<THREE.Mesh>(null!);
    const [matcap] = useMatcapTexture('3B3C3F_DAD9D5_929290_ABACA8', 256);

    useFrame(({ clock, pointer }) => {
        if (ref.current) {
            ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
            ref.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.3) * 0.3;
            ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, pointer.x * (viewport.width / 4), 0.1);
            ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, pointer.y * (viewport.height / 4), 0.1);
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Icosahedron args={[1.5, 0]} ref={ref}>
                <meshMatcapMaterial matcap={matcap} />
            </Icosahedron>
        </>
    );
};

export default Scene;
