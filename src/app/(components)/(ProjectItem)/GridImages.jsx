"use client";
import "./GridImages.scss";
import Image from "next/image";

export const GridImages = ({ data }) => {
  return (
    <div className="container">
      <div className="grid-images">
        <div className="grid-image-group">
          <div className="grid-image">
            <div className="grid-image__wrap">
              <Image src={data?.img1.url} width={500} height={500} alt="" />
            </div>
          </div>
        </div>
        <div className="grid-image-group">
          <div className="grid-image">
            <div className="grid-image__wrap">
              <Image src={data?.img2.url} width={500} height={500} alt="" />
            </div>
          </div>
          <div className="grid-image">
            <div className="grid-image__wrap">
              <Image src={data?.img3.url} width={500} height={500} alt="" />
            </div>
          </div>
        </div>
        <div className="grid-image-group">
          <div className="grid-image">
            <div className="grid-image__wrap">
              <Image src={data?.img4.url} width={500} height={500} alt="" />
            </div>
          </div>
          <div className="grid-image">
            <div className="grid-image__wrap">
              <Image src={data?.img5.url} width={500} height={500} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
