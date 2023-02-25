/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RTNCheckVersion from 'rtn-check-version/js/NativeCheckVersion';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [version, setVersion] = useState('');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TouchableOpacity
        onPress={() => {
          setVersion(RTNCheckVersion?.getAppVersion() ?? '');
        }}>
        <Text>Get version</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 28, color: 'red'}}>{version}</Text>
    </SafeAreaView>
  );
}

export default App;

//yarn add ./RTNCheckVersion

//node rnappversion/node_modules/react-native/scripts/generate-codegen-artifacts.js \
// --path rnappversion/ \
// --outputPath rnappversion/RTNCheckVersion/generated/
