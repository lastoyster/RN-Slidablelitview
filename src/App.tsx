import React, { useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 30,
  },
});

function App(): React.JSX.Element {
  const scrollViewRef = useRef<ScrollView>(null);

  const backgroundStyle = {
    backgroundColor: 'black',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        ref={scrollViewRef}>
        
        <View>
          <Text style={styles.title}>Who do you want to be today?</Text>
        </View>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef} />
        <ListItem odd text="☃ Snowman" scrollViewRef={scrollViewRef} />
        <ListItem text="🧙🏻‍♂️ Wizard" scrollViewRef={scrollViewRef} />
        <ListItem odd text="🦹🏻‍♀️ Superwoman" scrollViewRef={scrollViewRef} />
        <ListItem text="🏄🏻‍♀️ Surfer" scrollViewRef={scrollViewRef} />
        <ListItem odd text="🧨 Firecracker" scrollViewRef={scrollViewRef} />
        <ListItem text="🤰🏻 Mom" scrollViewRef={scrollViewRef} />
        <ListItem odd text="👽 Alien" scrollViewRef={scrollViewRef} />
        <ListItem text="👩🏻‍🦳 Bride" scrollViewRef={scrollViewRef} />
        <ListItem odd text="👩🏻‍⚕️ Doctor" scrollViewRef={scrollViewRef} />
        <ListItem text="💃🏻 Senorita" scrollViewRef={scrollViewRef} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
