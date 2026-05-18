import React from "react";
import Lightbox from "yet-another-react-lightbox";
import styled from "styled-components";

export interface IFullscreenImageProps {
  src: string;
  alt: string;
}

export const FullscreenImage: React.FC<IFullscreenImageProps> = ({
  src,
  alt,
  ...otherProps
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ClickableImage
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        {...otherProps}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src, alt }]}
        carousel={{ finite: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
};

const ClickableImage = styled.img`
  cursor: pointer;
`;
