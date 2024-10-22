
import React, { FC } from 'react'
import Button from '../button/Button';
import styles from './Drawer.module.scss'
import { DrawerProvider, useDrawerContext } from './DrawerContext';

interface DrawerProps {
  children: React.ReactNode;
}

const Drawer: FC<DrawerProps> = ({
  children,
}) => {

  const { setExpandAll, expandAll } = useDrawerContext();

  const handleExpandAll = () => {
    setExpandAll(true);
  }

  return (
    <div className={styles.drawer}>
      <Button type="tertiary" onClick={handleExpandAll} disabled={expandAll}>Expand All</Button>
      {children}
    </div>
  )
}

const DrawerWithProvider: FC<DrawerProps> = ({ children }) => {
  return (
    <DrawerProvider>
      <Drawer>
        {children}
      </Drawer>
    </DrawerProvider>
  )
}

export default DrawerWithProvider;
