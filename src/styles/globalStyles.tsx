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
    padding: 10,
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
  //   logoView: {
  //     flex: 0.9,
  //     justifyContent: 'center',
  //     padding: 10,
  //   },
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
    padding: 25,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  editProfileView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    padding: 1.5,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
});
export default globalStyles;
