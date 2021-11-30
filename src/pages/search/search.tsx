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
import Appbar from '../appbar/appbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class SearchScreen extends Component<any, any> {
  NetInfoSubscription = null;
  constructor(props: any) {
    super(props);
    this.state = {
      dataSrc: [
        {name: 'T Shirts'},
        {name: 'Hoodies'},
        {name: 'Pants'},
        {name: 'Wallets'},
      ],
    };
  }

  render() {
    console.log('Search');
    return (
      <View style={styles.mainView}>
        <Appbar />
        <View style={{flex: 0.9}}>
          <View style={styles.InputContainer}>
            <Icon
              style={{margin: 10}}
              name="search"
              color={colors.lightGray}
              size={18}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={text => console.log(text)}
              placeholder={'Search'}
              placeholderTextColor={colors.lightGray}
            />
          </View>
          <View
            style={{
              flex: 0.9,
            }}>
            <Text style={styles.categoryTitle}>Categories</Text>
            <FlatList
              data={this.state.dataSrc}
              numColumns={1}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => this.renderItems(item)}
            />
          </View>
        </View>
      </View>
    );
  }
  renderItems = item => {
    return (
      <View style={styles.categoryListView}>
        <Text style={styles.categoryItem}>{item.name}</Text>
        <Icon
          name="chevron-forward-circle"
          size={20}
          color={colors.secondary}
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
  InputContainer: {
    flex: 0.1,
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
    padding: 15,
    paddingLeft: 0,
    marginLeft: 20,
    marginRight: 20,

    borderColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    margin: 20,
    color: colors.secondary,
  },
  categoryItem: {fontSize: 16, color: colors.secondary},
});
