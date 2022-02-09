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
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import {DATA} from '../../models/info';
import Appbar2 from '../appbar/appbar2';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Wishlist extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFav: true,
      dataSrc: DATA,
    };
  }

  getData = data => {
    this.props.navigation.navigate(data.nav);
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Appbar2
          data={'Wishlist'}
          nav={'ShoppingBag'}
          changeSelectionCallback={this.getData.bind(this)}
        />

        <View
          style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/empty.png')}
            style={{width: 100, height: 100}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: colors.black,
              padding: '5%',
            }}>
            Your Wishlist is Empty
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logo: {
    height: 105,
    width: windowWidth / 2.5,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: windowWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: colors.secondary,
  },
});
