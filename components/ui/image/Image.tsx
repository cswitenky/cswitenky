import React from 'react';
import NextImage, { ImageProps } from 'next/image';

type Props = ImageProps & {
  alt: string;
};

const Image: React.FC<Props> = (props) => {
  return <NextImage {...props} />;
};

export default Image;
