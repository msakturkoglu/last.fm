import React from 'react'
import { CardWrapper } from './Card.css'

type TCardProps = {
    children?: React.ReactNode;
}
export const Card: React.FC<TCardProps> = ({children}) => {
  return (
    <CardWrapper>{children}</CardWrapper>
  )
}