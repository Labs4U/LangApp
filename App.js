import { StatusBar } from 'expo-status-bar';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { StyleSheet, Text, View } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const  App=()=> {
  return (
    <View style={styles.container}>
      <Text>Holla , como estan amigos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default withAuthenticator(App);