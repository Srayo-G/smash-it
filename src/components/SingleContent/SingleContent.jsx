//jshint esversion: 6
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import Badge from "@material-ui/core/Badge";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt=""
      />
      <b className="title">{title}</b>
      <div className="subTitle">
        <p>{media_type === "tv" ? "TV Series" : "Movie"}</p>
        <p>{date}</p>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
