
import React, { FC } from 'react'

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: FC<ParagraphProps> = ({
  children,
}) => {

  return (
    <>
      {children}
    </>
  )
}

export default Paragraph
