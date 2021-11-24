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
export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataSrc: [
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/' + 'shirt.png',
        },
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/' + '2.jpeg',
        },
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/' + '7.jpeg',
        },
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/' + 'shirt3.jpeg',
        },
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/' + 'shirt3.jpeg',
        },
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/' + 'shirt3.jpeg',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar />
        <View
          style={{
            flex: 0.1,
            backgroundColor: colors.secondary,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 12,
              fontWeight: '700',
              textAlign: 'center',
            }}>
            5 – 30 DAYS FREE WORLDWIDE DELIVRY
          </Text>
        </View>
        <ScrollView style={{flex: 0.8}}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                textAlign: 'center',
                color: colors.secondary,
                letterSpacing: 2,
                marginTop: 10,
              }}>
              New Arrivals
            </Text>
            <FlatList
              data={this.state.dataSrc}
              numColumns={1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => this.renderChildItem(item)}
            />
            <View
              style={{
                backgroundColor: colors.secondary,
                width: 100,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 2,
                marginTop: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: colors.white}}>
                Shop Now
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                textAlign: 'center',
                color: colors.secondary,
                letterSpacing: 2,
                marginTop: 10,
              }}>
              Wallets
            </Text>
            <FlatList
              data={this.state.dataSrc}
              numColumns={1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => this.renderChildItem(item)}
            />
            <View
              style={{
                backgroundColor: colors.secondary,
                width: 100,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 2,
                marginTop: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: colors.white}}>
                Shop Now
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                textAlign: 'center',
                color: colors.secondary,
                letterSpacing: 2,
                marginTop: 10,
              }}>
              Hoodies
            </Text>
            <FlatList
              data={this.state.dataSrc}
              numColumns={1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => this.renderChildItem(item)}
            />
            <View
              style={{
                backgroundColor: colors.secondary,
                width: 100,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 2,
                marginTop: 20,
              }}>
              <Text style={{fontWeight: 'bold', color: colors.white}}>
                Shop Now
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderChildItem = item => {
    return (
      <View style={styles.card}>
        <Icon
          name="star-outline"
          color={colors.secondary}
          size={18}
          style={{
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
            paddingTop: 10,
            paddingRight: 15,
          }}
          onPress={() => {
            console.log(item.img);
          }}
        />
        <Image
          style={styles.logo}
          source={require('../../assets/images/' + 'shirt3.jpeg')}
        />

        <Text style={{fontSize: 12, color: colors.lightGray}}>
          {item.category}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.secondary,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: colors.secondary,
            fontWeight: '700',
          }}>
          {item.price}
        </Text>
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
    height: windowHeight / 4.5,
    width: windowWidth / 1.9,
  },
  card: {
    alignItems: 'center',
    height: windowHeight / 2.5,
    width: windowWidth / 1.8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 5,
  },
});
