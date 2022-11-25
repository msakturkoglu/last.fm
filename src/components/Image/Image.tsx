import React from 'react'
import { StyledImage } from './image.css';

export type TImageSize = "small" | "medium" | "large" | "extralarge";

export const Image: React.FC<{src?: string}> = ({src, ...rest}) => {
  return (
    <StyledImage src={src} alt="" {...rest}/>
  )
}