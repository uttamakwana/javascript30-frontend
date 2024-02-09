import "./skeleton-card.css";

const SkeletonCard = () => {
  return (
    <div className="project-card-skeleton">
      <p className="project-card-skeleton-name"></p>
      <p className="project-card-skeleton-tech"></p>
      <div className="project-card-skeleton-buttons">
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
  );
};

export default SkeletonCard;
