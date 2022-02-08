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
  TextInput,
  Alert,
  LogBox,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/FontAwesome5';

import colors from '../../colors/colors';
import Appbar2 from '../appbar/appbar2';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RenderHtml from 'react-native-render-html';
import {openDatabase} from 'react-native-sqlite-storage';
import {Appbar} from 'react-native-paper';
import globalStyles from '../../styles/globalStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const db = openDatabase({name: 'cart.db', createFromLocation: 1});

export default class ProductDetails extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFav: true,
      images: props.route.params.product.images.edges,
      variants: props.route.params.product.variants.edges,
      selectedSize: {
        id: props.route.params.product.variants.edges[0].node.id,
        size: props.route.params.product.variants.edges[0].node.title,
        stock:
          props.route.params.product.variants.edges[0].node.quantityAvailable,
        price: props.route.params.product.variants.edges[0].node.price,
      },

      sliderImages: [],
      isOpen: false,
    };
  }
  componentDidMount = () => {
    this.state.images.map(i => {
      this.state.sliderImages.push(i.node.url);
    });
  };
  getData = data => {
    this.props.navigation.navigate(data.nav);
  };
  renderSize(item, index) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            selectedSize: {
              id: item.node.id,
              size: item.node.title,
              stock: item.node.quantityAvailable,
              price: item.node.price,
            },
          });
        }}
        key={index}
        style={[
          styles.sizeView,
          {
            borderWidth:
              this.state.selectedSize.size == item.node.title ? 1.5 : 0,
            width: this.state.selectedSize.size.includes('$') ? 65 : 45,
            borderColor:
              this.state.selectedSize.size == item.title
                ? colors.secondPrimary
                : null,
          },
        ]}>
        <Text
          style={{
            color: colors.black,
            fontWeight: 'bold',
          }}>
          {item.node.title}
        </Text>
      </TouchableOpacity>
    );
  }
  addToCartClick = () => {
    //Checking is there any item already exists in Cart
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM cart where variantId = ?',
        [this.state.selectedSize.id],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            //if exists
            alert('Already Added to cart');
          } else {
            //if not exists
            db.transaction(tx => {
              tx.executeSql(
                'Insert into cart (pid,variantId,pname,pimg,price,quantity,size,max_stock) VALUES (?,?,?,?,?,?,?,?);',
                [
                  this.props.route.params.product.id,
                  this.state.selectedSize.id,
                  this.props.route.params.product.title,
                  this.props.route.params.product.featuredImage.url,
                  this.state.selectedSize.price,
                  1,
                  this.state.selectedSize.size,
                  this.state.selectedSize.stock,
                ],
                (tx, results) => {
                  console.log('Results:', results.rowsAffected);
                  alert('Successfully added to cart');
                },
                err => {
                  console.error(err);
                },
              );
            });
          }
        },
      );
    });
  };
  render() {
    return (
      <View style={styles.mainView}>
        {/* <Appbar2
          data={'View Product'}
          nav={'ShoppingBag'}
          changeSelectionCallback={this.getData.bind(this)}
        /> */}
        <Appbar.Header
          style={{
            backgroundColor: colors.primary,
            elevation: 0,
          }}>
          <Appbar.BackAction />
          <Appbar.Content title={'View Product'} color={colors.black} />
          <Appbar.Action
            icon="cart"
            onPress={() => {
              this.props.navigation.navigate('ShoppingBag');
            }}
          />
        </Appbar.Header>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <View style={{flex: 0.7}}>
            <SliderBox
              images={this.state.sliderImages}
              sliderBoxHeight={windowHeight / 2.5}
              dotColor={colors.secondary}
              inactiveDotColor="#90A4AE"
              resizeMethod={'resize'}
              resizeMode={'contain'}
              imageLoadingColor={colors.black}
              backgroundColor={colors.white}
              circleloop
              paginationBoxVerticalPadding={0}
              autoPlay
            />
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.secondary,
                padding: 5,
              }}>
              {this.props.route.params.product.productType}
            </Text>
            <Text style={styles.itemTitle}>
              {this.props.route.params.product.title.toUpperCase()}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: colors.secondary,
                fontWeight: 'bold',
              }}>
              {'$' + this.state.selectedSize.price}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: colors.lightGray,
                paddingTop: '2.5%',
              }}>
              Shipping calculated at checkout.
            </Text>
          </View>
          <View>
            <Text style={styles.heading}>
              {this.state.selectedSize.size.includes('$')
                ? 'DENOMINATIONS'
                : 'Select Size'}
            </Text>
            <View
              style={{
                marginLeft: '4.5%',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}>
              {this.state.variants.map((item, index) => {
                return this.renderSize(item, index);
              })}
            </View>
            {this.state.selectedSize.size.includes('$') ? null : (
              <Text
                style={{
                  color:
                    this.state.selectedSize.stock > 0
                      ? colors.secondPrimary
                      : colors.red,
                  marginLeft: '3%',
                  padding: '2.5%',
                  fontSize: 14.5,
                  fontWeight: 'bold',
                }}>
                {this.state.selectedSize.stock > 0
                  ? `Only ${this.state.selectedSize.stock} items in stock!`
                  : 'No Stock Available'}
              </Text>
            )}
          </View>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text style={styles.heading}>Description</Text>
            <RenderHtml
              contentWidth={Dimensions.get('window').width}
              source={{
                html: `${this.props.route.params.product.descriptionHtml}`,
              }}
              tagsStyles={{
                body: {
                  color: 'black',
                  fontSize: 16,
                  lineHeight: 30,
                },
                img: {
                  width: windowWidth / 1.1,
                  resizeMode: 'contain',
                },
                p: {
                  paddingLeft: '5%',
                  paddingRight: '5%',
                  fontSize: 15,
                },
              }}
            />
          </View>
          {/* <View
            style={{
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.heading}>Reviews</Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingRight: '3.5%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    paddingRight: 5,
                    color: colors.black,
                  }}>
                  No reviews yet
                </Text>
                <Icon
                  name="star-o"
                  size={15}
                  color={colors.black}
                  style={{padding: 2.5}}
                />
                <Icon
                  name="star-o"
                  size={15}
                  style={{padding: 2.5}}
                  color={colors.black}
                />
                <Icon
                  name="star-o"
                  size={15}
                  style={{padding: 2.5}}
                  color={colors.black}
                />
                <Icon
                  name="star-o"
                  size={15}
                  style={{padding: 2.5}}
                  color={colors.black}
                />
                <Icon
                  name="star-o"
                  size={15}
                  style={{padding: 2.5}}
                  color={colors.black}
                />
              </View>
            </View>
          </View> */}
        </ScrollView>

        <TouchableOpacity
          style={{flex: 0.1, justifyContent: 'flex-end'}}
          onPress={() =>
            this.state.selectedSize.size.includes('$')
              ? this.addToCartClick()
              : this.state.selectedSize.stock > 0
              ? this.addToCartClick()
              : alert('No Stock Available For Selected Size')
          }>
          <View style={[styles.signinButtonContainer, styles.ButtonContainer]}>
            <Text style={{fontWeight: 'bold', color: colors.white}}>
              Add To Cart
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  ButtonContainer: {
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    width: '90%',
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,
  },
  signinButtonContainer: {
    backgroundColor: colors.secondPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbar: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.secondary,
    marginLeft: 15,
  },
  bagView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    flex: 0.9,
    justifyContent: 'center',
    padding: 10,
  },
  InputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginLeft: 20,
    marginRight: 20,
    margin: '2.5%',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  textInput: {
    flex: 0.9,
    fontSize: 15,
    padding: 15,
    color: colors.lightGray,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 3.5,
    marginTop: 3.5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'center',
    paddingTop: '1.5%',
    paddingBottom: '1.5%',
  },
  sizeView: {
    borderRadius: 5,

    height: 45,
    backgroundColor: colors.whiteSmoke,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
  },
});
