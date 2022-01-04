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
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors/colors';
import Appbar from '../appbar/appbar';
import {DATA} from '../../models/info';
import {Shirts} from '../../models/shirts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFav: false,
      dataSrc: DATA,
      shirts: Shirts,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.mainView}>
        <Appbar />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            backgroundColor: colors.lightRed,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 15,
            right: 15,
            zIndex: 1,
          }}>
          <Icon name={'gift'} size={25} color={colors.white} />
          {/* <Image
            source={require('../../assets/images/favcart.png')}
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
              borderRadius: 35 / 2,
            }}
          /> */}
        </TouchableOpacity>
        <ScrollView style={{flex: 0.9}} showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: 40,
              backgroundColor: colors.lightRed,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 12,
                fontWeight: 'bold',
                textAlign: 'center',
                letterSpacing: 5,
              }}>
              FREE SHIPPING WORLDWIDE
            </Text>
          </View>
          <ImageBackground
            style={{
              flex: 0.7,
              width: windowWidth,
              height: windowHeight,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../../assets/images/img3.jpg')}
            resizeMode="cover">
            <Text
              style={{
                color: colors.white,
                fontSize: 35,
                fontWeight: '700',
                textAlign: 'center',
                letterSpacing: 7.5,
              }}>
              PIERO LUXURY DESIGN
            </Text>
            <Text
              style={{
                marginTop: '2%',
                color: colors.white,
                fontSize: 18,
                textAlign: 'center',
                letterSpacing: 1,
              }}>
              The combination of design {'&'} quality
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ShoppingBag')}
              style={{
                marginTop: '5%',
                borderWidth: 2,
                borderColor: colors.white,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: colors.white,
                  padding: 10,
                  letterSpacing: 2.5,
                }}>
                SHOP NOW
              </Text>
            </TouchableOpacity>
          </ImageBackground>

          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: colors.black,
                padding: 15,
                fontWeight: '800',
                letterSpacing: 5,
              }}>
              FEATURED{'\n'}COLLECTION
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: colors.black,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: colors.black,
                  padding: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  letterSpacing: 2.5,
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true}>
            <FlatList
              data={this.state.dataSrc}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => this.renderChildItem(item)}
            />
          </ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              margin: '5%',
              marginTop: '15%',
            }}>
            <Image
              style={{
                width: windowWidth / 1.1,
                height: windowHeight / 1.5,
              }}
              source={require('../../assets/images/img2.jpg')}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 12.5,
                letterSpacing: 5,
                textAlign: 'center',
                padding: 10,
                marginTop: '2%',
              }}>
              {'New & Trending'.toUpperCase()}
            </Text>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: colors.black,
                padding: 10,
                fontWeight: '800',
                letterSpacing: 5,
              }}>
              HOODIES COLLECTION
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondPrimary,
                justifyContent: 'center',
                alignSelf: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  color: colors.white,
                  padding: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  letterSpacing: 2.5,
                }}>
                {'View Collection'.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: '10%',
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: colors.black,
                padding: 15,
                fontWeight: '800',
                letterSpacing: 5,
              }}>
              FEATURED{'\n'}COLLECTION
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: colors.black,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: colors.black,
                  padding: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  letterSpacing: 2.5,
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.shirts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => this.renderChildItem(item)}
          />
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              margin: '5%',
              marginTop: '15%',
            }}>
            <Image
              style={{
                width: windowWidth / 1.1,
                height: windowHeight / 1.5,
              }}
              source={require('../../assets/images/img4.jpg')}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 12.5,
                letterSpacing: 5,
                textAlign: 'center',
                padding: 10,
                marginTop: '2%',
              }}>
              {'BLOCKBUSTERS'.toUpperCase()}
            </Text>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: colors.black,
                padding: 10,
                fontWeight: '800',
                letterSpacing: 5,
              }}>
              BEST SELLERS
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondPrimary,
                justifyContent: 'center',
                alignSelf: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  color: colors.white,
                  padding: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  letterSpacing: 2.5,
                }}>
                {'View Collection'.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color: colors.black,
              fontWeight: '800',
              letterSpacing: 5,
              marginTop: '5%',
            }}>
            SIGN UP AND SAVE
          </Text>
          <Text
            style={{
              color: colors.black,
              fontSize: 14,
              letterSpacing: 1,
              textAlign: 'center',
              paddingLeft: '8.5%',
              paddingRight: '8.5%',
              marginTop: '1%',
              marginBottom: '3.5%',
            }}>
            {
              'Subscribe to get special offers, giveaways, and once-in-a-lifetime deals.'
            }
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '75%',
              height: 35,
              alignSelf: 'center',
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor={colors.lightGray}
            />
            <TouchableOpacity
              style={{
                marginLeft: 5,
                backgroundColor: colors.secondPrimary,
                height: 35,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                style={{
                  color: colors.white,
                }}
                name="arrow-right"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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
    marginTop: 10,
    height: 100,
    width: windowWidth / 2,
    flex: 0.7,
    alignSelf: 'center',
  },
  card: {
    width: windowWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: colors.secondary,
  },
  textInput: {
    borderColor: colors.black,
    borderWidth: 1,
    width: '80%',
    height: 35,
    color: colors.black,
    fontSize: 14,
    letterSpacing: 1,
  },
});
