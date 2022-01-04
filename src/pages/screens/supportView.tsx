import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Appbar2 from '../appbar/appbar2';
import colors from '../../colors/colors';
export default class SupportView extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: this.props.route.params.data.url}}
          onError={() => {
            alert('Netwrok Error');
          }}
        />
      </View>
    );
  }
}
