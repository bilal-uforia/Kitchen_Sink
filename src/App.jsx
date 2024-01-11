import Tabs from "./components/Tabs";
import CanvasContextProvider from "./ContextProviders/CanvasContextProvider";
import CanvasRenderer from "./components/CanvasRenderer";
import VideosRenderer from "./components/VideosRenderer";



function App() {

  return (
    <CanvasContextProvider>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-blue-600/100 mb-[14px]">Fabric.js demos · Kitchensink</h1>
        <div className="flex gap-4">
          <CanvasRenderer />
          <Tabs />
        </div>
        <VideosRenderer />
      </div>
    </CanvasContextProvider>
  )
}

export default App
