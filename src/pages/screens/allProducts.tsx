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

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar2 data={'All Products'} />
        <View style={{flex: 0.9}}>
          <FlatList
            data={this.state.dataSrc}
            numColumns={1}
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
      <View
        style={{
          flexDirection: 'row',
          height: windowHeight / 4.5,
          backgroundColor: colors.white,
          margin: 10,
          borderRadius: 15,
          elevation: 10,
        }}>
        <View
          style={{
            flex: 0.4,
            justifyContent: 'flex-start',
          }}>
          <Image
            source={item.img}
            style={{
              width: 122,
              height: windowHeight / 4.5,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            resizeMode={'stretch'}
          />
        </View>
        <View
          style={{
            flex: 0.4,
            paddingLeft: 5,
          }}>
          <View style={{flex: 1}}>
            <View style={{flex: 0.7}}>
              <Text
                style={{
                  fontSize: 12.5,
                  color: colors.secondary,
                  paddingTop: 10,
                  paddingLeft: 5,
                  paddingBottom: 2.5,
                }}>
                {item.category}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.secondary,
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                {item.name}
              </Text>
            </View>
            <View style={{flex: 0.3}}>
              <Text
                style={{
                  fontSize: 20,
                  color: colors.black,
                  fontWeight: 'bold',
                  paddingLeft: 5,
                  padding: 10,
                }}>
                {item.price}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.3,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <Icon
            name={'star-outline'}
            size={18}
            color={colors.secondary}
            style={{marginTop: 15, marginRight: 15}}
          />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ShoppingBag', {product: item})
            }
            style={{
              height: 40,
              width: 100,
              backgroundColor: colors.secondary,
              justifyContent: 'center',
              borderBottomRightRadius: 15,
              borderTopLeftRadius: 15,
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 14,
                fontWeight: 'bold',
                marginLeft: 5,
                textAlign: 'center',
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
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
