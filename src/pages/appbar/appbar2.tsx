import React, {Component} from 'react';
import colors from '../../colors/colors';
import {Appbar} from 'react-native-paper';

export default class Appbar2 extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Appbar.Header
        style={{
          backgroundColor: colors.primary,
          elevation: 2.5,
        }}>
        <Appbar.BackAction
          onPress={() => {
            this.props.navigation.bac;
          }}
        />
        <Appbar.Content title={'Search'} color={colors.black} />
        <Appbar.Action
          icon="shopping"
          size={25}
          style={{margin: 0}}
          onPress={() => {
            this.props.navigation.navigate('ShoppingBag');
          }}
        />
      </Appbar.Header>
    );
  }
}
