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

import colors from '../../colors/colors';
import Appbar2 from '../appbar/appbar2';
import axios from 'axios';
import {API} from '../../services/api';
import {ActivityIndicator} from 'react-native-paper';
import {api, getProducts} from '../../services/StoreFrontAPI/APIService';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var data = null;

export default class AllProducts extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFav: true,
      products: [],
      isLoaded: false,
      start: 0,
      end: 10,
    };
  }
  componentDidMount = async () => {
    await this.getProductsList();
  };
  getData = data => {
    this.props.navigation.navigate(data.nav);
  };
  getProductsList = async () => {
    data = getProducts(250);
    await axios({
      method: 'post',
      url: api.url,
      headers: api.token,
      data: data,
    })
      .then(response => {
        if (response.data.data) {
          this.setState({
            products: response.data.data.products.edges,
            isLoaded: true,
          });
          console.log(this.state.products.length);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  addItems = () => {
    this.setState({end: this.state.end + 5});
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Appbar2
          data={'All Products'}
          nav={'ShoppingBag'}
          changeSelectionCallback={this.getData.bind(this)}
        />

        <View
          style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
          {this.state.isLoaded ? (
            <FlatList
              data={this.state.products.slice(this.state.start, this.state.end)}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => this.renderChildItem(item)}
              onEndReached={this.addItems}
              onEndReachedThreshold={1}
            />
          ) : (
            <View>
              <ActivityIndicator color={colors.black} size={'small'} />
              <Text style={{fontSize: 13, color: colors.black, padding: '5%'}}>
                Loading Products
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }

  renderChildItem = item => {
    return (
      <View style={styles.card}>
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
    width: windowWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: colors.secondary,
  },
});
