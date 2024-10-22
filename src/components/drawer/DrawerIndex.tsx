
import Drawer from './Drawer'
import SubDrawer from './SubDrawer'
import Header from '../component_support/Header'
import Paragraph from '../component_support/Paragraph'

const DrawerIndex = () => {


  return (
    <>
      <Drawer>
        <SubDrawer id="drawer1">
          <Header>
            <h3>Drawer</h3>
          </Header>
          <Paragraph>
            <p>
              Drawer is a component used to display a list of items that can be navigated to other pages or sections of a website.
              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
            </p>
          </Paragraph>
        </SubDrawer>
        <SubDrawer id="drawer2">
          <Header>
            <h3>Drawer 2</h3>
          </Header>
          <Paragraph>
            <p>
              Drawer is a component used to display a list of items that can be navigated to other pages or sections of a website.
              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
            </p>
          </Paragraph>
        </SubDrawer>
      </Drawer>
    </>
  )
}

export default DrawerIndex
