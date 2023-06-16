import React from "react";
import {
  ZapparCamera,
  ImageTracker,
  ZapparCanvas,
} from "@zappar/zappar-react-three-fiber";

const targetFile = new URL(
  "./assets/example-tracking-image.zpt",
  import.meta.url
).href;
(function () {
  var s = document.createElement("script");
  s.src = "https://remotejs.com/agent/agent.js";
  s.setAttribute(
    "data-consolejs-channel",
    "ae3384b4-9d95-b13d-3fc4-aca3e1090a6f"
  );
  document.head.appendChild(s);
})();

function App() {
  return (
    <ZapparCanvas>
      <ZapparCamera environmentMap />
      <ImageTracker
        onNotVisible={(anchor) => console.log(`Not visible ${anchor.id}`)}
        onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
        onVisible={(anchor) => console.log(`Visible ${anchor.id}`)}
        targetImage={targetFile}
      >
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" roughness={0} metalness={1} />
        </mesh>
      </ImageTracker>
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
    </ZapparCanvas>
  );
}

export default App;
