// import React, {useState, useEffect} from 'react';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
//   from,
// } from '@apollo/client';
// import {onError} from '@apollo/client/link/error';
// import GetItems from './src/components/GetItems';

// const errorLink = onError(({graphqlErrors, networkError}) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({message, location, path}) => {
//       alert(`Graphql error:  ${message} \n Location: ${location} \n ${path}`);
//     });
//   }
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

// const link = from([
//   errorLink,
//   new HttpLink({
//     uri: 'https://pieroluxurydesign.myshopify.com/api/2022-01/graphql.json',
//   }),
// ]);

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link,
//   method: 'POST',
//   headers: {
//     'X-Shopify-Storefront-Access-Token': '990ce2281372e77323cb61cf992dbe65',
//     'Content-Type': 'application/graphql',
//   },
// });
// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <GetItems />
//     </ApolloProvider>
//   );
// }

// export default App;
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/pages/splash/Splash';
import HomeScreen from './src/pages/home/Home';
import ProfileScreen from './src/pages/profile/profile';
import SignUpScreen from './src/pages/authentication/signup';
import SignInScreen from './src/pages/authentication/signin';
import BottomTabs from './src/pages/bottomNavigation/BottomNavigation';
import AllCategories from './src/pages/screens/allCategories';
import AllProducts from './src/pages/screens/allProducts';
import ProductDetails from './src/pages/screens/productDetail';
import ShoppingBag from './src/pages/screens/shoppingBag';
import Checkout from './src/pages/screens/checkout/checkOut';
import SupportView from './src/pages/screens/supportView';
import SelectCurrency from './src/pages/screens/selectCurrency';
import {LogBox} from 'react-native';
const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  useEffect(() => {});

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShoppingBag"
          component={ShoppingBag}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllCategories"
          component={AllCategories}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllProducts"
          component={AllProducts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SupportView"
          component={SupportView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectCurrency"
          component={SelectCurrency}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
