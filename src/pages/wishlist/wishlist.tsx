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
import Appbar from '../appbar/appbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Wishlist extends Component<any, any> {
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
        <Appbar />

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
            flex: 0.75,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageBackground
            style={[
              styles.logo,
              {alignItems: 'flex-end', justifyContent: 'flex-start'},
            ]}
            source={require('../../assets/images/shirt3.jpeg')}>
            <Icon
              name={this.state.isFav == false ? 'star-outline' : 'star-sharp'}
              size={16}
              color={colors.secondary}
              style={{marginRight: 5}}
              onPress={() =>
                this.state.isFav == true
                  ? this.setState({isFav: false})
                  : this.setState({isFav: true})
              }
            />
          </ImageBackground>
        </View>
        <View style={{flex: 0.25, alignItems: 'center'}}>
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
    height: 120,
    width: windowWidth / 2.75,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
