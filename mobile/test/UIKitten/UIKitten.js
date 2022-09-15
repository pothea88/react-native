import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Button,
  Icon,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const UIKitten = () => {
  const FacebookIcon = props => <Icon name="facebook" {...props} />;
  return (
    <>
      
      <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
        <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button>HOME</Button>
          <Button accessoryLeft={FacebookIcon} style={{marginTop: 20}}>
            Login with Facebook
          </Button>
        </Layout>
      </ApplicationProvider>
    </>
  );
};
export default UIKitten;
