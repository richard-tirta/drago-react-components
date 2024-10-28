
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
  const { expandAll, updateSubDrawerState } = useDrawerContext();
  const [open, setOpen] = useState(expandAll);
  const isRegistered = useRef(false);

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

  useEffect(() => {
    if (!isRegistered.current) {
      updateSubDrawerState(id, open);
      isRegistered.current = true;
    }
  }, [id, open, updateSubDrawerState]);

  useEffect(() => {
    if (expandAll) {
      setOpen(true);
    }
  }, [expandAll]);

  const handleToggle = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault();
    setOpen((prevOpen) => !prevOpen); // Only toggle the local state
    updateSubDrawerState(id, open);
  }, []);

  return (
    <>
      {header && paragraph ? (
        <div className={`${styles.subdrawer} ${open ? styles.drawer__paragraph_open : styles.drawer__paragraph_closed}`}>
          <a href="#" onClick={(e) => {handleToggle(e)}} className={styles.drawer_header} data-testid={`toggle-${id}`}>
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
