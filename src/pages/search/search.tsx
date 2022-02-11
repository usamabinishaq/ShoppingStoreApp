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
  Keyboard,
} from 'react-native';
import {ActivityIndicator, Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import {
  api,
  getCollections,
  getProducts,
} from '../../services/StoreFrontAPI/APIService';
import Appbar2 from '../appbar/appbar2';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class SearchScreen extends Component<any, any> {
  NetInfoSubscription = null;
  constructor(props: any) {
    super(props);
    this.state = {
      collections: [],
      isFocused: false,
      isLoaded: false,
      products: [],
      searchList: [],
      start: 0,
      end: 10,
    };
  }
  componentDidMount() {
    this.getCollections();
    this.getProductsList();
  }
  getCollections = async () => {
    var data = getCollections();
    await axios({
      method: 'post',
      url: api.url,
      headers: api.token,
      data: data,
    })
      .then(response => {
        if (response.data.data) {
          this.setState({
            collections: response.data.data.collections.edges,
            isLoaded: true,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  getData = data => {
    this.props.navigation.navigate(data.nav);
  };
  getProductsList = async () => {
    var data = getProducts(250);
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
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  addItems = () => {
    this.setState({end: this.state.end + 5});
  };
  searchProduct = text => {
    this.setState({searchList: []});
    let list = [];
    this.state.products.map(item => {
      let title = item.node.title.toLowerCase();
      if (title.includes(text.toLowerCase())) {
        list.push(item);
      }
    });
    this.setState({searchList: list});
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar.Header
          style={{
            backgroundColor: colors.primary,
            elevation: 2.5,
          }}>
          <Appbar.Content title={'Search'} color={colors.black} />
          <Appbar.Action
            icon="shopping"
            size={25}
            style={{margin: 0}}
            onPress={() => {
              this.props.navigation.navigate('ShoppingBag');
            }}
          />
        </Appbar.Header>
        <View style={{flex: 1}}>
          <View style={styles.InputContainer}>
            <Icon
              style={{margin: '2.5%'}}
              name="search"
              color={colors.lightGray}
              size={18}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.searchProduct(text)}
              placeholder={'Search'}
              placeholderTextColor={colors.lightGray}
              onFocus={() => {
                this.setState({isFocused: true});
              }}
              // onBlur={() => {
              //   this.setState({isFocused: false});
              // }}
            />
          </View>
          {!this.state.isFocused ? (
            <View
              style={{
                flex: 0.92,
              }}>
              <Text style={styles.categoryTitle}>Collections</Text>
              {this.state.isLoaded ? (
                <FlatList
                  data={this.state.collections.slice(1)}
                  numColumns={1}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => this.renderItems(item)}
                />
              ) : (
                <ActivityIndicator
                  size={'small'}
                  color={colors.secondPrimary}
                />
              )}
            </View>
          ) : this.state.searchList ? (
            <View
              style={{
                flex: 0.92,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FlatList
                data={this.state.searchList.slice(
                  this.state.start,
                  this.state.end,
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => this.renderChildItem(item)}
                onEndReached={this.addItems}
                onEndReachedThreshold={1}
              />
            </View>
          ) : null}
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
  renderItems = item => {
    return (
      <TouchableOpacity
        key={item.node.id}
        style={styles.categoryListView}
        onPress={() =>
          this.props.navigation.navigate('AllProducts', {collection: item})
        }>
        <Text style={styles.categoryItem}>{item.node.title}</Text>
        <Icon name="chevron-forward" size={18} color={colors.secondary} />
      </TouchableOpacity>
    );
  };
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  InputContainer: {
    flex: 0.08,
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginLeft: 20,
    marginRight: 20,
    margin: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
  },
  categoryListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 0,
    marginLeft: 20,
    marginRight: 0,

    borderColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '1%',
    margin: '5%',
    color: colors.black,
  },
  categoryItem: {fontSize: 14, color: colors.secondary},
  card: {
    width: windowWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
