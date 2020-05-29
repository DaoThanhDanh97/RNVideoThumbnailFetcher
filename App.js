/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';

const App = () => {
  const [imgBase64, setImgBase64] = useState('');

  return (
    <View>
      <Button
        title={'Click me'}
        onPress={async () => {
          try {
            const file = await DocumentPicker.pick({
              type: [DocumentPicker.types.video],
            });
            const bmp = await FileViewer.getThumbnail(file.uri);
            console.log('Bmp base64: ', bmp);
            setImgBase64(`data:image/png;base64,${bmp}`);
          } catch (e) {
            console.log('Error: ', e);
          } finally {
            console.log('Success');
          }
        }}
      />
      {imgBase64 !== '' ? (
        <Image
          source={{uri: imgBase64}}
          style={{width: 300, height: 400, resizeMode: 'contain'}}
        />
      ) : null}
    </View>
  );
};

export default App;
