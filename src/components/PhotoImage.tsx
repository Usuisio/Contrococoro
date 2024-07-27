import styled from "styled-components";

const PhotoImageDiv = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 80%;
  object-fit: contain;
  z-index: 9;
`;
const WholePhotoImageDiv = styled.div`
  position: absolute;
  top: auto;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const base_url = import.meta.env.BASE_URL;

type photoType = "photoA" | "photoB";

type PhotoImageProps = {
    photo: photoType;
    };

export default function PhotoImage({ photo }:PhotoImageProps) {
  return (
    <WholePhotoImageDiv>
      <PhotoImageDiv
        src={base_url + `images/${photo}.png`}
        alt={`写真 `}
      />
    </WholePhotoImageDiv>
  );
}
