import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

function Onboarding2({ navigation }) {
  return (
    <View>
      <Text>Onboarding Page 2</Text>
      <CustomButton
        title="Get Started"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}

export default Onboarding2;
