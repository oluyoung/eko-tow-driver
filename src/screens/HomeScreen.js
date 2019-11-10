import React from 'react';
import { Container, Header, Left, Button, Icon, Content } from 'native-base';

import HomeContainer from '../components/Home/HomeContainer';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <Container>
      <Header transparent>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
      </Header>
      <Content contentContainerStyle={{flex: 1}}>
        <HomeContainer />
      </Content>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
