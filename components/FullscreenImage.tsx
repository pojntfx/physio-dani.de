import React from "react";
import Lightbox from "react-image-lightbox";
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

      {open && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setOpen(false)}
          imageCaption={alt}
        />
      )}
    </>
  );
};

const ClickableImage = styled.img`
  cursor: pointer;
`;
