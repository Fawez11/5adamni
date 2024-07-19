import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

function Onboarding1({ navigation }) {
  return (
    <View>
      <Text>Onboarding Page 1</Text>
      <CustomButton
        title="Next"
        onPress={() => navigation.navigate('Onboarding2')}
      />
    </View>
  );
}

export default Onboarding1;
