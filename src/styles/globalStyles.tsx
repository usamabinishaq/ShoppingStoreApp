import {StyleSheet} from 'react-native';
import colors from '../colors/colors';

const globalStyles = StyleSheet.create({
  //AppBar Styles
  appbar: {
    flex: 0.1,
    flexDirection: 'row',
  },
  bagView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '9.5%',
  },
  logo: {
    height: 110,
    width: 110,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.secondary,
    marginLeft: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.secondary,
    letterSpacing: 1,
  },
  profileBagView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  profileView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
  },
  editProfileView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
  signinButtonContainer: {
    backgroundColor: colors.secondPrimary,
    justifyContent: 'center',
    alignItems: 'center',
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
  InputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    marginLeft: 20,
    marginRight: 20,
    margin: 15,
    alignItems: 'center',
  },
});
export default globalStyles;
