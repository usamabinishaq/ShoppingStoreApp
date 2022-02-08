import React, {useEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LOAD_Query} from '../GraphQL/Queries';
import {View} from 'react-native';

function GetItems() {
  const {error, loading, data, networkStatus} = useQuery(LOAD_Query);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data) {
      console.log('DATA: ' + JSON.stringify(data));
      console.log('DATA: ' + JSON.stringify(networkStatus));
    } else {
      console.log('ERROR: ' + JSON.stringify(error.graphQLErrors));
      console.log('Loading: ' + JSON.stringify(loading));
      console.log('Network Status: ' + JSON.stringify(networkStatus));
    }
  }, [data]);

  return (
    <View>
      {/* {' '}
      {users.map(val => {
        return <Text> {val.firstName}</Text>;
      })} */}
    </View>
  );
}

export default GetItems;
