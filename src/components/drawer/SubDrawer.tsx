
import React, { FC, useEffect, useMemo, useState, useRef, useCallback } from 'react'
import Header from '../component_support/Header';
import Paragraph from '../component_support/Paragraph';
import { useDrawerContext } from './DrawerContext';
import styles from './Drawer.module.scss'

interface SubDrawerProps {
  children: React.ReactNode;
  id: string;
}

const SubDrawer: FC<SubDrawerProps> = ({
  children,
  id,
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

  const { expandAll, registerSubDrawer, updateSubDrawerState } = useDrawerContext();
  const [open, setOpen] = useState(expandAll);
  const isRegistred = useRef(false);

  useEffect(() => {
    console.log('registering', id, open);
    if (!isRegistred.current) {
      registerSubDrawer(id, open);
      isRegistred.current = true;
    }
  }, [id, open, registerSubDrawer]);

  useEffect(() => { 
    console.log('expandAll', expandAll);
    if (expandAll) {
      setOpen(true);
    }
  }, [expandAll]);

  const handleToggle = useCallback((e : React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault();
    setOpen((prevOpen) => {
      const newOpen = !prevOpen;
      console.log('updating', id, newOpen);
      updateSubDrawerState(id, newOpen);
      return newOpen;
    })
  }, [id, updateSubDrawerState]);

  return (
    <>
      {header && paragraph ? (
        <div className={`${styles.subdrawer} ${open ? styles.drawer__paragraph_open : styles.drawer__paragraph_closed}`}>
          <a href="#" onClick={(e) => {handleToggle(e)}} className={styles.drawer_header}>
            {header}
            <span className={styles.drawer_icon}>{open ? '+' : '-'}</span>
          </a>
          <div className={styles.drawer_paragraph_container}>
            <div className={styles.drawer_paragraph}>
              {paragraph}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default React.memo(SubDrawer);
