import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage: React.FC = () => {

  const navigation = useNavigation();

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Text> HomePage </Text>

      <Pressable
        onPress={() => navigation.navigate('About')} >
        <Text>Go</Text>
      </Pressable>

    </View>
  );
};

export default HomePage;
