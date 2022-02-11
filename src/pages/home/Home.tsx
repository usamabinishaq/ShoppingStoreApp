import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors/colors';
import axios from 'axios';
import Appbar from '../appbar/appbar';
import {api, getProducts} from '../../services/StoreFrontAPI/APIService';
import NetInfo from '@react-native-community/netinfo';
import Modal from 'react-native-modal';
import {ActivityIndicator} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

var data = null;
export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFav: false,
      products: [],
      productsList: [],
      network: true,
      modal: false,
      retry: false,
      isLogin: false,
    };
  }

  componentDidMount = async () => {
    this.checkNetwork();
    let token = await AsyncStorage.getItem('@CustomerAccesstoken');
    token ? this.setState({isLogin: true}) : null;
  };
  checkNetwork() {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        this.setState({network: true, retry: false});
        this.getProductsList();
      } else {
        this.setState({network: false, retry: false});
      }
    });
  }
  getProductsList = async () => {
    data = getProducts(12);
    await axios({
      method: 'post',
      url: api.url,
      headers: api.token,
      data: data,
    })
      .then(response => {
        if (response.data.data) {
          this.setState({productsList: response.data.data.products.edges});
        }
      })
      .catch(function (error) {
        console.log(error);
        this.setState({network: false});
      });
  };

  renderModal() {
    return (
      <Modal isVisible={this.state.modal}>
        <View style={{flex: 1, borderRadius: 5}}>
          <ImageBackground
            source={require('../../assets/images/modal.jpg')}
            style={{flex: 0.4}}>
            <Icon
              name={'close'}
              size={25}
              color={colors.white}
              style={{alignSelf: 'flex-end', padding: '2.5%'}}
              onPress={() => {
                this.setState({modal: false});
              }}
            />
          </ImageBackground>
          <View
            style={{
              flex: 0.6,
              backgroundColor: colors.white,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: colors.black,
                padding: '2.5%',
                letterSpacing: 1.5,
              }}>
              {"We've got a sweet reward just for you!"}
              <Text
                style={{
                  fontSize: 16,
                  color: colors.secondPrimary,
                  padding: '2.5%',
                  marginTop: 10,
                }}>
                Subscribe to get a 10% OFF now!
              </Text>
            </Text>
            <TextInput
              placeholder="Full Name"
              style={{
                borderWidth: 1,
                padding: '2.5%',
                height: 40,
                borderRadius: 5,
                borderColor: colors.secondPrimary,
                margin: '2.5%',
              }}
            />
            <TextInput
              placeholder="Email"
              style={{
                borderWidth: 1,
                height: 40,
                padding: '2.5%',
                borderRadius: 5,
                borderColor: colors.secondPrimary,
                margin: '2.5%',
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondPrimary,
                justifyContent: 'center',
                alignItems: 'center',
                margin: '2.5%',
                borderRadius: 5,
                height: 40,
              }}>
              <Text
                style={{fontSize: 14, color: colors.white, padding: '2.5%'}}>
                SUBSCRIBE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
  getData = data => {
    this.props.navigation.navigate(data.nav);
  };
  render() {
    return (
      <SafeAreaView style={styles.mainView}>
        <Appbar
          nav={'ShoppingBag'}
          changeSelectionCallback={this.getData.bind(this)}
        />
        {this.state.network ? (
          <TouchableOpacity
            onPress={() => {
              this.setState({modal: true});
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 15,
              right: 15,
              zIndex: 1,
              backgroundColor: colors.white,
            }}>
            <Image
              source={require('../../assets/images/discount_fab.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
        ) : null}

        {this.renderModal()}
        {this.state.network ? (
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
                  letterSpacing: 2.5,
                }}>
                {`THE COMBINATION OF DESIGN & QUALITY`}
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
              source={require('../../assets/images/img3.png')}
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
                onPress={() => this.props.navigation.navigate('AllProducts')}
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
                LUXURY{'\n'}COLLECTION
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AllProducts')}
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
                data={this.state.productsList.slice(0, 6)}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => this.renderChildItem(item)}
                initialNumToRender={6}
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
                source={require('../../assets/images/s2.jpg')}
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
                LUXURY HOODIES COLLECTION
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.secondPrimary,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: colors.white,
                    padding: '2.5%',
                    paddingLeft: '5%',
                    paddingRight: '5%',
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
                OUR FAVORITE COLLECTIONS
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
              data={this.state.productsList.slice(7, 15)}
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
                source={require('../../assets/images/img1.jpg')}
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
                {'LUXURY SWEATPANTS'.toUpperCase()}
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
                }}>
                <Text
                  style={{
                    color: colors.white,
                    padding: '2.5%',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    letterSpacing: 2.5,
                  }}>
                  {'View Collection'.toUpperCase()}
                </Text>
              </TouchableOpacity>
            </View>
            {this.state.isLogin ? null : (
              <View>
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
              </View>
            )}
          </ScrollView>
        ) : (
          <View
            style={{
              flex: 0.9,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name={'alert-circle-outline'}
              color={colors.lightGray}
              size={45}
            />
            <Text
              style={{
                fontSize: 14,
                color: colors.lightGray,
                textAlign: 'center',
                marginTop: '2.5%',
              }}>
              Oops! It seems to be a problem connecting with Server. Try
              Checking Your Internet Connection and Try Again
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({retry: true});
                this.checkNetwork();
              }}
              style={{
                width: 75,
                height: 35,
                backgroundColor: colors.secondPrimary,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5%',
              }}>
              {this.state.retry ? (
                <ActivityIndicator size={'small'} color={colors.white} />
              ) : (
                <Text style={{color: colors.white, fontSize: 14}}>RETRY</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }

  renderChildItem = item => {
    return (
      <View key={item.node.id} style={styles.card}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('ProductDetails', {
              product: item.node,
            })
          }
          style={{flex: 0.8}}>
          <Image
            style={{
              width: windowWidth / 2.2,
              height: windowHeight / 3.5,
              resizeMode: 'contain',
            }}
            source={{uri: item.node.featuredImage.url}}
          />
          <Text
            style={{
              fontSize: 16,
              color: colors.secondary,
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: 2,
            }}>
            {item.node.title.toUpperCase()}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: colors.secondary,
              textAlign: 'center',
              marginTop: '2%',
            }}>
            {'$' + item.node.variants.edges[0].node.price}
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
  backgroundVideo: {
    width: 200,
    height: 200,
    left: 50,
    top: 50,
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
