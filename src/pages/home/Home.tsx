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
      isFav: false,
      dataSrc: [
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/shirt.png',
        },
        {
          category: 'Wallets',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/2.jpeg',
        },
        {
          category: 'Hoodies',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/7.jpeg',
        },
        {
          category: 'Pants',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/shirt3.jpeg',
        },
        {
          category: 'SweatPants',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/shirt3.jpeg',
        },
        {
          category: 'T Shirts',
          name: 'Black Cotton T Shirt',
          price: '$97.30 – $139.00',
          img: '../../assets/images/shirt3.jpeg',
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
              <Text style={styles.categoryTitle}>Categories</Text>
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
              <Text style={styles.categoryTitle}>New Arrivals</Text>
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
        <View
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
            source={require('../../assets/images/shirt3.jpeg')}
          />
        </View>
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
            flex: 0.75,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageBackground
            style={[
              styles.logo,
              {alignItems: 'flex-end', justifyContent: 'flex-start'},
            ]}
            source={require('../../assets/images/shirt3.jpeg')}>
            <Icon
              name={this.state.isFav == false ? 'star-outline' : 'star-sharp'}
              size={16}
              color={colors.secondary}
              style={{marginRight: 5}}
              onPress={() =>
                this.state.isFav == true
                  ? this.setState({isFav: false})
                  : this.setState({isFav: true})
              }
            />
          </ImageBackground>
        </View>
        <View style={{flex: 0.25, alignItems: 'center'}}>
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
