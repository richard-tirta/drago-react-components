
import React, { FC } from 'react'

interface HeaderProps {
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({
  children,
}) => {


  return (
    <>
      {children}
    </>
  )
}

export default Header
