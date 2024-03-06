import { useEffect } from "react";
import Tabs from "./components/Tabs";
import CanvasContextProvider from "./ContextProviders/CanvasContextProvider";
import CanvasRenderer from "./components/CanvasRenderer";
import VideosRenderer from "./components/VideosRenderer";
import ImagesRendrer from "./components/ImagesRendrer";




function App() {
 
  useEffect(()=>{
  const message = "child message";
  window.parent.postMessage(message, "*");
  },[])

  return (
    <CanvasContextProvider>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-blue-600/100 mb-[14px]">Fabric.js demos · Kitchensink</h1>
        <div className="flex gap-4">
          <CanvasRenderer />
          <Tabs />
        </div>
        <ImagesRendrer />
        <VideosRenderer />
      </div>
    </CanvasContextProvider>
  )
}

export default App
