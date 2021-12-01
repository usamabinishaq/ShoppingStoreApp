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
import Appbar2 from '../appbar/appbar2';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class AllProducts extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFav: true,
      dataSrc: [
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/shirt.png',
        },
        {
          category: 'Wallets',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/2.jpeg',
        },
        {
          category: 'Hoodies',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/7.jpeg',
        },
        {
          category: 'Pants',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/shirt3.jpeg',
        },
        {
          category: 'SweatPants',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/shirt3.jpeg',
        },
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/shirt3.jpeg',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar2 data={'All Products'} />
        <View
          style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
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
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              height: 30,
              width: 60,
              backgroundColor: colors.secondary,
              justifyContent: 'center',
              borderTopLeftRadius: 10,
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Buy Now
            </Text>
          </View>
          <Icon
            name="star-sharp"
            color={colors.secondary}
            size={18}
            style={{margin: 7.5, justifyContent: 'center'}}
          />
        </View>
        <Image
          style={[styles.logo]}
          source={require('../../assets/images/shirt3.jpeg')}
        />
        <View
          style={{flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 13,
              color: colors.secondary,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 12,
                color: colors.secondary,
              }}>
              {item.price}
            </Text>
          </View>
        </View>
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
    height: windowHeight / 3.5,
    width: windowWidth / 2.5,
    elevation: 8,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: colors.secondary,
  },
});
