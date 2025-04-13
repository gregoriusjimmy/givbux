import { getImageProps } from "next/image";
import React from "react";

type Props = {
  alt: string;
  width: number;
  containerClassName?: string;
  className?: string;
  height: number;
  srcDark: string;
  srcLight: string;
};

const ImageTheme = ({
  srcDark,
  srcLight,
  className,
  containerClassName,
  ...restProps
}: Props) => {
  const common = { ...restProps };

  const {
    props: { srcSet: dark },
  } = getImageProps({ ...common, src: srcDark });

  const {
    props: { srcSet: light, ...rest },
  } = getImageProps({ ...common, src: srcLight });

  return (
    <picture className={containerClassName}>
      <source media="(prefers-color-scheme: dark)" srcSet={dark || srcDark} />
      <source
        media="(prefers-color-scheme: light)"
        srcSet={light || srcLight}
      />
      <img {...rest} className={className} alt={rest.alt} />
    </picture>
  );
};

export default ImageTheme;
