/* globals Instascan */
import React from 'react'
import { render } from 'react-dom'

import Cameras from './cameras'
import Scans from './scans'
import './styles.css'

function App() {
  const scannerRef = React.useRef()
  const [scans, setScans] = React.useState([])
  const [cameras, setCameras] = React.useState([])
  const [activeCamera, setActiveCamera] = React.useState(null)
  React.useEffect(
    () => {
      if (activeCamera) {
        scannerRef.current.start(activeCamera)
      }
    },
    [activeCamera],
  )

  if (scannerRef.current == null) {
    scannerRef.current = new Instascan.Scanner({
      video: document.getElementById('preview'),
      backgroundScan: false,
      scanPeriod: 5,
    })
    scannerRef.current.addListener('scan', (content, image) => {
      setScans(scans => [{ date: +Date.now(), content }, ...scans])
    })
    Instascan.Camera.getCameras()
      .then(cameras => {
        setCameras(cameras)
        if (cameras.length > 0) {
          setActiveCamera(cameras[0])
        } else {
          console.error('No cameras found.')
        }
      })
      .catch(e => console.error(e))
  }
  return (
    <React.Fragment>
      <Cameras
        cameras={cameras}
        activeCamera={activeCamera}
        selectCamera={setActiveCamera}
      />
      <Scans scans={scans} />
    </React.Fragment>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
