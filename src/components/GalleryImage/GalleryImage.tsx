import React from "react";
import { Image } from "./styled-components";

interface Props {
  answer: {
    img: string;
  };
}

const GalleryImage: React.FC<Props> = ({ answer: { img = "" } }) => (
  <li>
    <Image src={img} alt="Gallery gif" />
  </li>
);

export default GalleryImage;
