import React from 'react';
import { View } from 'react-native-web';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    </AuthProvider>
  );
};

export default App;