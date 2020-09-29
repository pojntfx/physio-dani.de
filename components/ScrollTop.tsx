import { useScrollTrigger, Zoom } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface IScrollTopProps {
  target: string;
  children: React.ReactElement;
}

export const ScrollTop: React.FC<IScrollTopProps> = ({
  children,
  target,
  ...otherProps
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(target);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger} {...otherProps}>
      <Wrapper onClick={handleClick} role="presentation">
        {children}
      </Wrapper>
    </Zoom>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(2)}px;
  right: ${({ theme }) => theme.spacing(2)}px;
`;
