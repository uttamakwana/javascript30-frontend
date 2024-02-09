import { lazy } from "react";

const ProjectCard = lazy(() => import("./ProjectCard/ProjectCard.jsx"));
const SkeletonCard = lazy(() => import("./SkeletonCard/SkeletonCard.jsx"));

export { ProjectCard, SkeletonCard };
