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
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import {DATA} from '../../models/info';
import Appbar2 from '../appbar/appbar2';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class AllProducts extends Component<any, any> {
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
          data={'All Products'}
          nav={'ShoppingBag'}
          changeSelectionCallback={this.getData.bind(this)}
        />
        <View style={{flex: 0.9}}>
          <FlatList
            data={this.state.dataSrc}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => this.renderChildItem(item)}
          />
        </View>
      </View>
    );
  }

  renderChildItem = item => {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ProductDetails', {product: item})
          }
          style={{flex: 0.8}}>
          <Image
            style={{
              width: windowWidth / 2.2,
              height: windowHeight / 3.5,
              resizeMode: 'contain',
            }}
            source={item.img}
          />
          <Text
            style={{
              fontSize: 16,
              color: colors.secondary,
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: 2,
            }}>
            {item.name.toUpperCase()}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: colors.secondary,
              textAlign: 'center',
              marginTop: '2%',
            }}>
            {item.price}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
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
