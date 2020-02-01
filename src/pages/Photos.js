import React, { useContext } from "react";

import Image from "../components/Image";
import { getClass } from "../utils";

import { Context } from "../ContextPics";

function Photos() {
  const { allPhotos } = useContext(Context);

  const Images = allPhotos.map((photo, index) => (
    <Image key={photo.id} image={photo} className={getClass(index)}/>
  ));

  return <main className="photos">{Images}</main>;
}

export default Photos;
