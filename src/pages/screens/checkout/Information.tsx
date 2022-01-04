import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import countryList from 'react-select-country-list';
import colors from '../../../colors/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TOUCHABLE_STATE} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
export default class Information extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      cbEMailMe: false,
      cbSaveInfo: false,
      cbTextMe: false,
      isSHow: false,
      selectedCountry: [{label: 'Select', value: ''}],
      countries: countryList().getData(),
    };
  }
  render() {
    console.log(this.state.countries[0]);
    return (
      <View>
        <View style={{margin: '3%'}}>
          <Text style={styles.topHeading}>Contact Information</Text>
          <Text style={{color: colors.black, letterSpacing: 0.2}}>
            Already have an account?
            <Text style={{color: colors.secondPrimary}}> Login</Text>
          </Text>
          <TextInput
            style={styles.txtInput2}
            placeholder="Email or phone number"
            placeholderTextColor={colors.lightGray}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              right: 5,
            }}>
            <CheckBox
              disabled={false}
              value={this.state.cbEMailMe}
              onValueChange={newValue => this.setState({cbEMailMe: newValue})}
              tintColors={{
                true: colors.secondPrimary,
                false: colors.secondPrimary,
              }}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 13,
                letterSpacing: 0.2,
              }}>
              Email me with news and offers
            </Text>
          </View>
        </View>
        <View style={{margin: '3%'}}>
          <Text style={styles.topHeading}>Shipping Address</Text>
          <TouchableOpacity
            onPress={() => {
              this.state.isShow
                ? this.setState({isShow: false})
                : this.setState({isShow: true});
            }}
            style={{
              flexDirection: 'row',
              borderColor: colors.black,
              borderWidth: 0.5,
              width: '100%',
              borderRadius: 5,
              alignItems: 'center',
              height: 45,
              marginTop: '2.5%',
            }}>
            <Text
              style={{
                flex: 0.9,
                color: colors.lightGray,
                fontSize: 14,
                letterSpacing: 0.5,
                paddingLeft: '2.5%',
              }}>
              Country/Region
            </Text>
            <View
              style={{
                flex: 0.1,
                borderLeftWidth: 0.5,
                alignSelf: 'center',
                paddingLeft: '2.5%',
              }}>
              <Icon name={'menu-down'} color={colors.black} size={18} />
            </View>
          </TouchableOpacity>
          {/* {this.state.isShow ? (
            <ScrollView
              horizontal={true}
              style={{
                width: '100%',
                height: '50%',
                top: 80,
                padding: 10,
                position: 'absolute',
                backgroundColor: colors.whiteSmoke,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                elevation: 5,
                zIndex: 1,
              }}>
              <FlatList
                data={this.state.countries}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => this.renderChildItem(item)}
              />
            </ScrollView>
          ) : null} */}
          <TextInput
            style={styles.txtInput2}
            placeholder="First Name"
            placeholderTextColor={colors.lightGray}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Last Name"
            placeholderTextColor={colors.lightGray}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Address"
            placeholderTextColor={colors.lightGray}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Apartment, suite, etc. (optional)"
            placeholderTextColor={colors.lightGray}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="City"
            placeholderTextColor={colors.lightGray}
          />

          <TextInput
            style={styles.txtInput2}
            placeholder="State"
            placeholderTextColor={colors.lightGray}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Zip Code"
            placeholderTextColor={colors.lightGray}
          />
          <TextInput
            style={styles.txtInput2}
            placeholder="Phone (optional)"
            placeholderTextColor={colors.lightGray}
          />
          <View style={styles.checkBox}>
            <CheckBox
              disabled={false}
              value={this.state.cbSaveInfo}
              onValueChange={newValue => this.setState({cbSaveInfo: newValue})}
              tintColors={{
                true: colors.secondPrimary,
                false: colors.secondPrimary,
              }}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 13,
                letterSpacing: 0.2,
              }}>
              Save this information for next time
            </Text>
          </View>
          <View style={styles.checkBox}>
            <CheckBox
              disabled={false}
              value={this.state.cbTextMe}
              onValueChange={newValue => this.setState({cbTextMe: newValue})}
              tintColors={{
                true: colors.secondPrimary,
                false: colors.secondPrimary,
              }}
            />
            <Text
              style={{
                color: colors.black,
                fontSize: 13,
                letterSpacing: 0.2,
              }}>
              Text me with news and offers
            </Text>
          </View>
          <Text style={styles.signupDescription}>
            By signing up via text, you agree to receive recurring automated
            marketing messages, including cart reminders, at the phone number
            provided. Consent is not a condition of purchase. Reply STOP to
            unsubscribe. Reply HELP for help. Message frequency varies. Msg &
            data rates may apply. View our{' '}
            <Text style={{color: colors.secondPrimary}}>Privacy Policy</Text>{' '}
            and{' '}
            <Text style={{color: colors.secondPrimary}}>Terms of Service</Text>.
          </Text>
        </View>
      </View>
    );
  }
  renderChildItem = item => {
    return (
      <Text
        onPress={() => {
          console.log(item);
        }}
        style={{color: colors.black, padding: '2.5%'}}>
        {item.label}
      </Text>
    );
  };
}

const styles = StyleSheet.create({
  txtInput2: {
    borderColor: colors.black,
    paddingLeft: '2.5%',
    borderWidth: 0.5,
    width: '100%',
    height: 45,
    marginTop: '2.5%',
    color: colors.black,
    fontSize: 14,
    letterSpacing: 0.5,
    borderRadius: 5,
  },
  topHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    paddingBottom: '1.5%',
    letterSpacing: 0.2,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 5,
  },
  signupDescription: {
    fontSize: 12.5,
    color: colors.black,
    textAlign: 'justify',
    marginTop: '2.5%',
    letterSpacing: 0.2,
    lineHeight: 20,
  },
});
