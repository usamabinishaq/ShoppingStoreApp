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
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../colors/colors';
import Appbar2 from '../appbar/appbar2';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class ProductDetails extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFav: true,
      images: [
        props.route.params.product.img,
        require('../../assets/images/shirt2.jpeg'),
      ],
    };
  }
  getData = data => {
    this.props.navigation.navigate(data.nav);
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Appbar2
          data={'View Product'}
          nav={'ShoppingBag'}
          changeSelectionCallback={this.getData.bind(this)}
        />
        <ScrollView style={{flex: 0.9}}>
          <View style={{flex: 0.7}}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={windowHeight / 1.8}
              dotColor={colors.secondary}
              inactiveDotColor="#90A4AE"
              resizeMethod={'resize'}
              resizeMode={'contain'}
              imageLoadingColor="#2196F3"
              backgroundColor={colors.white}
              circleloop={true}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                color: colors.secondary,
                padding: 5,
              }}>
              {this.props.route.params.product.category}
            </Text>
            <Text
              style={{
                fontSize: 15,

                textAlign: 'center',
                color: colors.secondary,
              }}>
              {this.props.route.params.product.name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                color: colors.secondary,
              }}>
              {this.props.route.params.product.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: colors.lightGray,
              }}>
              Shipping calculated at checkout.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.InputContainer}
            onPress={() => console.log('Show Model')}>
            <Text style={styles.textInput}>Select Size</Text>
            <Icon
              style={{margin: 10}}
              name="chevron-down"
              color={colors.black}
              size={20}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <Text style={styles.heading}>Description</Text>
            <Icon
              style={{margin: 10}}
              name="chevron-down"
              color={colors.black}
              size={20}
            />
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{flex: 0.1, justifyContent: 'flex-end'}}
          onPress={() => Alert.alert('Information', 'Added to bag')}>
          <View style={[styles.signinButtonContainer, styles.ButtonContainer]}>
            <Text style={{fontWeight: 'bold', color: colors.white}}>
              Add To Bag
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
    backgroundColor: colors.secondary,
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
    margin: 15,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    padding: 15,
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
});
