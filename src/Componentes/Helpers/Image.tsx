import styled from "styled-components";
import { useState } from "react";
const Wrapper = styled.div`
  display: grid;
`;

export const ImgCard = styled.img`
  width: 150px;
`;

const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
export interface TypeAlt {
  src: string;
}
const ImageCard: React.FC<TypeAlt> = ({ src, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad(event: React.ChangeEvent<HTMLImageElement>) {
    const target = event.target;
    setSkeleton(false);
    target.style.opacity = "1";
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton></Skeleton>}
      <ImgCard onLoad={handleLoad} src={src} {...props} />
    </Wrapper>
  );
};
export default ImageCard;
