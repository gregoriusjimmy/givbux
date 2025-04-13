import { getImageProps } from "next/image";
import React from "react";

type Props = {
  alt: string;
  className?: string;
  containerClassName?: string;
  mobile: {
    width: number;
    height: number;
    src: string;
  };
  desktop: {
    width: number;
    height: number;
    src: string;
  };
};

const ImageResponsive = ({
  alt,
  className,
  containerClassName,
  mobile,
  desktop,
}: Props) => {
  const common = { alt };

  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({
    ...common,
    ...mobile,
  });

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    ...desktop,
  });

  return (
    <picture className={containerClassName}>
      <source media="(min-width: 1025px)" srcSet={desktopSrcSet} />
      <source media="(max-width: 1024px)" srcSet={mobileSrcSet} />
      <img {...rest} className={className} alt={alt} />
    </picture>
  );
};

export default ImageResponsive;
