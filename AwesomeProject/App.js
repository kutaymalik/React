import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Card from './src/components/Card'

const App = () => {
  return(
  <SafeAreaView style={styles.container}>

    <Card title="Eddard Stark" text="Winter is coming..." />
    <Card title="Hill Me" text="Çok Paraya Sıkıştım" />
    <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım, evet tarafından..." />

  </SafeAreaView>);
}

const styles = StyleSheet.create({
  
  container: {
    flex: '1',
    backgroundColor: 'lightgrey'
  },

});

export default App;