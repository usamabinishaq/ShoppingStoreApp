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

export default class ShoppingBag extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      qty: 1,
      dataSrc: DATA,
      totalPrice: 0,
    };
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.appbar}>
          <StatusBar
            animated={true}
            backgroundColor={colors.primary}
            barStyle={'dark-content'}
          />
          <View style={styles.bagView}>
            <Icon
              onPress={() => console.log('Back')}
              name="arrow-back"
              color={colors.secondary}
              size={24}
            />
          </View>
          <View style={styles.logoView}>
            <Text style={styles.logoText}>Shopping Bag</Text>
          </View>
        </View>
        <View style={{flex: 0.7}}>
          <FlatList
            data={this.state.dataSrc}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => this.renderMyBag(item)}
          />
        </View>
        <View style={{flex: 0.3, backgroundColor: colors.white, elevation: 10}}>
          <View style={styles.receiptView}>
            <Text style={styles.receiptText}>Subotal</Text>
            <Text style={styles.receiptText}>$100</Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'center',
              color: colors.secondary,
              margin: '5%',
            }}>
            Shipping and discount codes calculated at checkout. Taxes are not
            included in the product price
          </Text>
          <TouchableOpacity
            style={{justifyContent: 'flex-end'}}
            onPress={() => this.props.navigation.navigate('Checkout')}>
            <View
              style={[styles.signinButtonContainer, styles.ButtonContainer]}>
              <Text style={{fontWeight: 'bold', color: colors.white}}>
                Proceed to checkout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderMyBag = item => {
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
            source={item.img}
            style={{
              height: 100,
              width: 100,
            }}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            flex: 0.7,
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
              {item.name}
            </Text>

            <Text
              style={{
                color: colors.black,
                letterSpacing: 1,
                paddingLeft: 5,
                paddingBottom: 5,
              }}>
              Size:{' '}
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
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                  padding: 3.5,
                  width: '25%',
                }}>
                <Icon
                  onPress={() =>
                    this.state.qty > 1
                      ? this.setState({qty: this.state.qty - 1})
                      : null
                  }
                  name={'remove-circle'}
                  size={20}
                  color={
                    this.state.qty > 1 ? colors.secondary : colors.lightGray
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
                  {this.state.qty}
                </Text>
                <Icon
                  onPress={() => this.setState({qty: this.state.qty + 1})}
                  name={'add-circle'}
                  size={20}
                  color={colors.secondary}
                />
              </View>

              <Text
                style={{
                  fontSize: 16,
                  color: colors.black,
                  fontWeight: 'bold',
                  paddingLeft: '5%',
                  padding: 10,
                }}>
                {'$ '}
                {item.price}
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={{flex: 0.1, alignItems: 'flex-end'}}>
          <Icon
            name={'close'}
            size={20}
            color={colors.secondary}
            style={{marginTop: 5, marginRight: 5}}
          />
        </View> */}
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
  receiptText: {fontSize: 15, color: colors.secondary, fontWeight: 'bold'},
});
