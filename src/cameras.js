import React from 'react'

const Cameras = ({ cameras, activeCamera, selectCamera }) =>
  cameras.length === 1 || (
    <section>
      <h2>Cameras</h2>
      {cameras.length === 0 ? (
        <p>No available cameras</p>
      ) : (
        <ul>
          {cameras.map(cam => (
            <Camera
              key={cam.id}
              isActive={activeCamera && cam.id === activeCamera.id}
              camera={cam}
              selectCamera={selectCamera}
            />
          ))}
        </ul>
      )}
    </section>
  )
export default Cameras

const Camera = ({ camera, isActive, selectCamera }) => (
  <li className={isActive ? 'active' : ''}>
    {isActive ? (
      <strong>{camera.name || '(unknown)'}</strong>
    ) : (
      <a
        onClick={React.useCallback(() => selectCamera(camera), [
          camera,
          selectCamera,
        ])}
      >
        {camera.name || '(unknown)'}
      </a>
    )}
  </li>
)
