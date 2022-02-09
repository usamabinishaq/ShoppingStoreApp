import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../colors/colors';
import {DATA} from '../../models/info';
import {openDatabase} from 'react-native-sqlite-storage';
import {API} from '../../services/api';
import axios from 'axios';
import {ActivityIndicator, Appbar} from 'react-native-paper';

const db = openDatabase({name: 'cart.db', createFromLocation: 1});

export default class ShoppingBag extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      qty: 1,
      cart: [],
      products: [],
      isLoaded: false,
      subTotal: 0,
    };
  }
  componentDidMount = () => {
    this.loadCart();
  };

  loadCart = async () => {
    var temp = 0;
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM cart', [], (tx, results) => {
        var len = results.rows.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            this.state.cart.push(results.rows.item(i));
            temp += results.rows.item(i).price * results.rows.item(i).quantity;
            this.setState({subTotal: temp});
            if (i == len - 1) {
              this.setState({isLoaded: true});
            }
          }
        } else {
          this.setState({isLoaded: true});
        }
      });
    });
  };
  removeFromCart = product => {
    db.transaction(tx => {
      tx.executeSql(
        'Delete FROM cart where cid=?',
        [product.cid],
        (tx, results) => {
          var len = results.rowsAffected;
          if (len > 0) {
            this.setState({
              cart: this.state.cart.filter(i => i != product),
              subTotal: this.state.subTotal - product.quantity * product.price,
            });
          }
        },
      );
    });
  };
  addQuantity = (item, index) => {
    let temp = [...this.state.cart];
    // let tempTotal = this.state.subTotal;
    item.quantity += 1;
    temp[index] = item;
    this.updateCart(item);
    this.setState({
      cart: temp,
      subTotal: this.state.subTotal + item.price,
    });
  };
  removeQuantity = (item, index) => {
    let temp = [...this.state.cart];
    // let tempTotal = this.state.subTotal;
    item.quantity -= 1;
    // item.price -= item.price;
    // tempTotal -= item.price;

    temp[index] = item;
    this.updateCart(item);
    this.setState({
      cart: temp,
      subTotal: this.state.subTotal - item.price,
    });
  };
  updateCart = item => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE cart set quantity=? where variantId=?',
        [item.quantity, item.variantId],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log(`Results, ${results.rowsAffected}`);
          }
        },
      );
    });
  };
  checkout() {
    this.props.navigation.navigate('Checkout', {
      sub: this.state.subTotal,
      cart: this.state.cart,
    });
  }
  render() {
    return (
      <View style={styles.mainView}>
        <Appbar.Header
          style={{
            backgroundColor: colors.primary,
            elevation: 0,
          }}>
          <Appbar.BackAction />
          <Appbar.Content title={'Shopping Cart'} color={colors.black} />
        </Appbar.Header>
        {this.state.isLoaded ? (
          <View style={{flex: 1}}>
            <View style={{flex: 0.65}}>
              <FlatList
                data={this.state.cart}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => this.renderMyBag(item, index)}
              />
            </View>
            <View
              style={{
                flex: 0.35,
                backgroundColor: colors.white,
                elevation: 10,
              }}>
              <View style={styles.receiptView}>
                <Text style={[styles.receiptText, {fontSize: 15}]}>
                  Subotal
                </Text>
                <Text
                  style={[
                    styles.receiptText,
                    {fontSize: 17.5},
                  ]}>{`$${this.state.subTotal}`}</Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: colors.secondary,
                  margin: '5%',
                }}>
                Shipping and discount codes calculated at checkout. Taxes are
                not included in the product price
              </Text>
              <TouchableOpacity
                style={{justifyContent: 'flex-end'}}
                onPress={() => this.checkout()}>
                <View
                  style={[
                    styles.signinButtonContainer,
                    styles.ButtonContainer,
                  ]}>
                  <Text style={{fontWeight: 'bold', color: colors.white}}>
                    Proceed to checkout
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color={colors.black} size={'small'} />
          </View>
        )}
      </View>
    );
  }
  renderMyBag = (item, index) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.white,
          marginBottom: 0,
          margin: '6%',
          borderTopWidth: 1,
          borderColor: colors.lightGray,
        }}>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: item.pimg}}
            style={{
              height: 100,
              width: 100,
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flex: 0.6,
            marginLeft: 10,
            marginTop: 10,
            marginRight: 5,
          }}>
          <View style={{alignContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                color: colors.secondary,
                fontWeight: 'bold',
                paddingTop: 10,
                paddingLeft: 5,
                paddingBottom: 10,
              }}>
              {item.pname}
            </Text>

            <Text
              style={{
                color: colors.black,
                letterSpacing: 1,
                paddingLeft: 5,
                paddingBottom: 5,
              }}>
              {item.size.includes('$') ? 'Denominations: ' : 'Size: '}
              <Text
                style={{
                  fontSize: 14.5,
                  color: colors.black,
                  paddingLeft: 5,
                  fontWeight: 'bold',
                }}>
                {item.size}
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  padding: 3.5,
                  width: '25%',
                  marginRight: '10%',
                }}>
                <Icon
                  onPress={() =>
                    item.quantity > 1 ? this.removeQuantity(item, index) : null
                  }
                  name={'remove-circle'}
                  size={20}
                  color={
                    item.quantity > 1 ? colors.secondary : colors.lightGray
                  }
                />
                <Text
                  style={{
                    fontSize: 14.5,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    textAlign: 'justify',
                    paddingLeft: '15%',
                    paddingRight: '15%',
                  }}>
                  {item.quantity}
                </Text>
                <Icon
                  onPress={() =>
                    item.size.includes('$')
                      ? this.addQuantity(item, index)
                      : item.quantity < item.max_stock
                      ? this.addQuantity(item, index)
                      : null
                  }
                  name={'add-circle'}
                  size={20}
                  color={
                    item.size.includes('$')
                      ? colors.secondary
                      : item.quantity < item.max_stock
                      ? colors.secondary
                      : colors.lightGray
                  }
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.black,
                  fontWeight: 'bold',
                  paddingLeft: '5%',
                  padding: 10,
                  marginLeft: '10%',
                }}>
                {'$'}
                {item.price * item.quantity}
              </Text>
            </View>
          </View>
        </View>
        <Icon
          name={'close'}
          size={20}
          color={colors.secondary}
          style={{marginTop: 10, flex: 0.1}}
          onPress={() => this.removeFromCart(item)}
        />
      </View>
    );
  };
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
    backgroundColor: colors.primary,
    flexDirection: 'row',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  bagView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  logoView: {justifyContent: 'center', alignItems: 'center', marginLeft: 10},
  InputContainer: {
    marginRight: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  textInput: {
    fontSize: 15,
    color: colors.lightGray,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  receiptView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  receiptText: {color: colors.secondary, fontWeight: 'bold'},
});
