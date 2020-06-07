import React, { useRef, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { Emitter } from 'react-native-particles'

const getRandom = (min, max) => Math.random() * (max - min) + min

export const CircleParticle = () => {
  const [size] = useState(Math.round(getRandom(5, 25)))
  const [opacity] = useState(getRandom(0.2, 1))

  return (
    <View
      style={{
        borderRadius: size / 2,
        width: size,
        height: size,
        backgroundColor: 'blue',
        opacity,
      }}
    />
  )
}

const App = () => {
  const emitterRef = useRef()
  const dimensions = useWindowDimensions()

  return (
    <>
      <Emitter
        ref={(emitter) => (emitterRef.current = emitter?.emitter)}
        autoStart
        infiniteLoop
        numberOfParticles={200}
        interval={5}
        emissionRate={5}
        particleLife={12000}
        direction={0}
        spread={1000}
        speed={10}
        segments={75}
        gravity={-0.2}
        fromPosition={{ x: dimensions.width / 2, y: dimensions.height / 2 }}
      >
        <CircleParticle />
      </Emitter>
    </>
  )
}

export default App
