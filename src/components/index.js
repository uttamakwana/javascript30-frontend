import { lazy } from "react";

const Header = lazy(() => import("./Header/Header.jsx"));
const Hero = lazy(() => import("./Hero/Hero.jsx"));
const Projects = lazy(() => import("./Projects/Projects.jsx"));

export { Header, Hero, Projects };

// // 1st project
// const JavaScriptDrumkit = lazy(() =>
//   import("./JavaScript/JavaScriptDrumKit/JavaScriptDrumkit.jsx")
// );
// // 2nd project
// const CSSJSClock = lazy(() => import("./JavaScript/CSSJSClock/CSSJSClock.jsx"));
// // 3rd project
// const CSSVariableJS = lazy(() =>
//   import("./JavaScript/CSSVariableJS/CSSVariableJS.jsx")
// );
// // 4th project
// const ArrayCardio = lazy(() =>
//   import("./JavaScript/ArrayCardio/ArrayCardio.jsx")
// );
// // 5th project
// const FlexGallery = lazy(() =>
//   import("./JavaScript/FlexGallery/FlexGallery.jsx")
// );
// // 6th project
// const AjaxAhead = lazy(() => import("./JavaScript/AjaxAhead/AjaxAhead.jsx"));
// // 7th project
// const ArrayCardio2 = lazy(() =>
//   import("./JavaScript/ArrayCardio2/ArrayCardio2.jsx")
// );
// // 8th project
// const HTMLCanvas = lazy(() => import("./JavaScript/HTMLCanvas/HTMLCanvas.jsx"));
// // 9th project
// const DevTools = lazy(() => import("./JavaScript/DevTools/DevTools.jsx"));
// // 10th project
// const CustomCheckbox = lazy(() =>
//   import("./JavaScript/CustomCheckbox/CustomCheckbox.jsx")
// );
// // 11th project
// const CustomVideoPlayer = lazy(() =>
//   import("./JavaScript/CustomVideoPlayer/CustomVideoPlayer.jsx")
// );

// export {
//   JavaScriptDrumkit,
//   CSSJSClock,
//   CSSVariableJS,
//   ArrayCardio,
//   FlexGallery,
//   AjaxAhead,
//   ArrayCardio2,
//   HTMLCanvas,
//   DevTools,
//   CustomCheckbox,
//   CustomVideoPlayer,
// };
