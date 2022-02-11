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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import Appbar2 from '../appbar/appbar2';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class AllCategories extends Component<any, any> {
  NetInfoSubscription = null;
  constructor(props: any) {
    super(props);
    this.state = {
      dataSrc: [
        {name: 'T Shirts'},
        {name: 'Hoodies'},
        {name: 'Pants'},
        {name: 'Wallets'},
        {name: 'Bags'},
        {name: 'Uniforms'},
        {name: 'Cosmetics'},
        {name: 'Casual for men'},
        {name: 'Casual for women'},
        {name: 'T Shirts'},
        {name: 'Hoodies'},
        {name: 'Pants'},
        {name: 'Wallets'},
        {name: 'Bags'},
        {name: 'Uniforms'},
        {name: 'Cosmetics'},
        {name: 'Casual for men'},
        {name: 'Casual for women'},
        {name: 'T Shirts'},
        {name: 'Hoodies'},
        {name: 'Pants'},
        {name: 'Wallets'},
        {name: 'Bags'},
        {name: 'Uniforms'},
        {name: 'Cosmetics'},
        {name: 'Casual for men'},
        {name: 'Casual for women'},
        {name: 'T Shirts'},
        {name: 'Hoodies'},
        {name: 'Pants'},
        {name: 'Wallets'},
        {name: 'Bags'},
        {name: 'Uniforms'},
        {name: 'Cosmetics'},
        {name: 'Casual for men'},
        {name: 'Casual for women'},
        {name: 'T Shirts'},
        {name: 'Hoodies'},
        {name: 'Pants'},
        {name: 'Wallets'},
        {name: 'Bags'},
        {name: 'Uniforms'},
        {name: 'Cosmetics'},
        {name: 'Casual for men'},
        {name: 'Casual for women'},
        {name: 'T Shirts'},
        {name: 'Hoodies'},
        {name: 'Pants'},
        {name: 'Wallets'},
        {name: 'Bags'},
        {name: 'Uniforms'},
        {name: 'Cosmetics'},
        {name: 'Casual for men'},
        {name: 'Casual for women'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Appbar2 data={'All Categories'} />
        <View style={{flex: 0.9}}>
          <FlatList
            data={this.state.dataSrc}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => this.renderItems(item)}
          />
        </View>
      </View>
    );
  }
  renderItems = item => {
    return (
      <TouchableOpacity style={styles.categoryListView}>
        <Text style={styles.categoryItem}>{item.name}</Text>
        <Icon name="chevron-forward" size={16} color={colors.secondary} />
      </TouchableOpacity>
    );
  };
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.primary,
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
    borderColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  categoryItem: {fontSize: 14, color: colors.secondary},
});
