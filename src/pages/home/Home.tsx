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
  ToastAndroid,
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
      isFav: false,
      dataSrc: [
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: require('../../assets/images/shirt.png'),
        },
        {
          category: 'Pants',
          name: 'Black Cotton Pant',
          price: '$97.30 – $139.00',
          img: require('../../assets/images/2.jpeg'),
        },
        {
          category: 'Wallets',
          name: 'Blue Wallet',
          price: '$97.30 – $139.00',
          img: require('../../assets/images/7.jpeg'),
        },
        {
          category: 'Rough',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: require('../../assets/images/shirt3.jpeg'),
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
            <View style={{flex: 0.3}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.categoryTitle}>Categories</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate('AllCategories')
                    }
                    style={[styles.categoryTitle, {marginRight: 2}]}>
                    Show all
                  </Text>
                  <Icon
                    name={'chevron-forward'}
                    size={15}
                    color={colors.secondary}
                    style={{marginTop: 10, marginRight: 5}}
                  />
                </View>
              </View>

              <FlatList
                data={this.state.dataSrc}
                numColumns={1}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => this.renderCategories(item)}
              />
            </View>
            <View style={{flex: 0.7}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.categoryTitle}>New Arrivals</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate('AllCategories')
                    }
                    style={[styles.categoryTitle, {marginRight: 2}]}>
                    Show all
                  </Text>
                  <Icon
                    name={'chevron-forward'}
                    size={15}
                    color={colors.secondary}
                    style={{marginTop: 10, marginRight: 5}}
                  />
                </View>
              </View>
              <FlatList
                data={this.state.dataSrc}
                numColumns={1}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => this.renderChildItem(item)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderCategories = item => {
    return (
      <View
        style={{
          backgroundColor: colors.primary,
          width: 80,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AllProducts')}
          style={{
            width: 80,
            height: 80,
            elevation: 5,
            backgroundColor: colors.white,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 80, height: 80, borderRadius: 10}}
            source={item.img}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              paddingTop: 5,
              fontSize: 12.5,
              fontWeight: 'bold',
              color: colors.secondary,
            }}>
            {item.category}
          </Text>
        </View>
      </View>
    );
  };

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
              height: 25,
              width: 50,
              backgroundColor: colors.secondary,
              justifyContent: 'center',
              borderTopLeftRadius: 10,
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 11,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              Buy Now
            </Text>
          </View>
          <Icon
            name={this.state.isFav == false ? 'star-outline' : 'star-sharp'}
            size={15}
            color={colors.secondary}
            style={{marginRight: 7.5, marginTop: 5}}
            onPress={() =>
              this.state.isFav == true
                ? this.setState({isFav: false})
                : this.setState({isFav: true})
            }
          />
        </View>
        <Image style={[styles.logo]} source={item.img} />
        <View
          style={{flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 12,
              color: colors.secondary,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 11,
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
    marginTop: 10,
    height: 100,
    width: windowWidth / 3.2,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: windowHeight / 4.5,
    width: windowWidth / 3.2,
    elevation: 8,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: colors.secondary,
  },
});
