import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const Button = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 50px;
  height: 50px;
  width: 50px;
  background-color: grey;
`;

export default function Create({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Button onPress={navigation.openDrawer} />
      <Text style={{ color: 'white' }}>Create</Text>
    </View>
  );
}
