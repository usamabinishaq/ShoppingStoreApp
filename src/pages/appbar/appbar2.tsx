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
          elevation: 0,
        }}>
        <Appbar.Content title={this.props.data} color={colors.black} />
        <Appbar.Action
          icon="shopping"
          size={25}
          style={{margin: 0}}
          onPress={() => {
            this.props.changeSelectionCallback({nav: this.props.nav});
          }}
        />
      </Appbar.Header>
    );
  }
}
