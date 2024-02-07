import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader.jsx";
import { Header, Hero, Projects } from "./components";

const App = () => {
  return (
    <main className="app app-wrapper">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/project" element={<ProjectList />}>
              <Route path="javascriptdrumkit" element={<JavaScriptDrumkit />} />
              <Route path="cssjsclock" element={<CSSJSClock />} />
              <Route path="cssvariablejs" element={<CSSVariableJS />} />
              <Route path="arraycardio" element={<ArrayCardio />} />
              <Route path="flexgallery" element={<FlexGallery />} />
              <Route path="ajaxahead" element={<AjaxAhead />} />
              <Route path="arraycardio2" element={<ArrayCardio2 />} />
              <Route path="htmlcanvas" element={<HTMLCanvas />} />
              <Route path="devtools" element={<DevTools />} />
              <Route path="customcheckbox" element={<CustomCheckbox />} />
              <Route path="customvideoplayer" element={<CustomVideoPlayer />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </main>
  );
};

export default App;
