import React from 'react'
import {Canvas}  from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {Room} from "./Room"
import Herolight from './Herolight'
import { useMediaQuery } from "react-responsive";



const Heroexperience = () => {
   
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
   
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
         <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      {/* <mesh >
        <boxGeometry args={[20,10,20]} />
        <meshStandardMaterial color="orange" />
      </mesh> */} 

      <Herolight/>
      
      <group 
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
       >
        <Room />
      </group>
    
    
    </Canvas>

  )
}

export default Heroexperience
