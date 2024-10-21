
import React, { FC, useMemo } from 'react'
import Header from '../component_support/Header';
import Paragraph from '../component_support/Paragraph';

interface DrawerProps {
  children: React.ReactNode;
}

const Drawer: FC<DrawerProps> = ({
  children,
}) => {
  const { header, paragraph } = useMemo(() => {
    let header: React.ReactNode = null;
    let paragraph: React.ReactNode = null;

      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Header) {
            header = child;
          }
          if (child.type === Paragraph) {
            paragraph = child;
          }
        }
      });
    
    return { header, paragraph };
  }, [children]);


  return (
    <>
      {header && paragraph ? (
        <div>
          <div>
            {header}
          </div>
          <div>
            {paragraph}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Drawer
