import { StatusBar } from 'expo-status-bar'
import { View, Text, useColorScheme } from 'react-native'
import { useFonts } from 'expo-font'
import TouchableScale from 'react-native-touchable-scale'
import fonts from './constants/Fonts'
import darkStyles from './constants/themes/DarkStyles'
import lightStyles from './constants/themes/LightStyles'

export default function App() {

  let colorScheme = useColorScheme();

  const styles = colorScheme === 'light' ? lightStyles : darkStyles

  let [ fontsLoaded ] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={ styles.container }>

      <View style={ styles.header }>
        <Text style={ styles.expression }>45 × 1350 × 10 ÷ 5</Text>
        <Text style={ styles.result }>121500</Text>
      </View>

      <View style={ styles.pad }>

        <View style={ styles.row }>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>C</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>DEL</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={{ ...styles.buttonText, fontSize: 28 } }>%</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={{ ...styles.button, backgroundColor: '#d256eb' }}>
            <Text style={{ ...styles.buttonText, color: '#fff', fontSize: 32 } }>÷</Text>
          </TouchableScale>
        </View>

        <View style={ styles.row }>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>7</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>8</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>9</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={{ ...styles.button, backgroundColor: '#f47473' }}>
            <Text style={{ ...styles.buttonText, color: '#fff', fontSize: 32 } }>×</Text>
          </TouchableScale>
        </View>

        <View style={ styles.row }>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>4</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>5</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>6</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={{ ...styles.button, backgroundColor: '#79b5f9' }}>
            <Text style={{ ...styles.buttonText, color: '#fff', fontSize: 32 } }>-</Text>
          </TouchableScale>
        </View>

        <View style={ styles.row }>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>1</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>2</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>3</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={{ ...styles.button, backgroundColor: '#f68d29' }}>
            <Text style={{ ...styles.buttonText, color: '#fff', fontSize: 32 }}>+</Text>
          </TouchableScale>
        </View>

        <View style={ styles.row }>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={{ ...styles.button, flex: 2, aspectRatio: 2 }}>
            <Text style={ styles.buttonText }>0</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={ styles.button }>
            <Text style={ styles.buttonText }>.</Text>
          </TouchableScale>
          <TouchableScale friction={ 5 } activeScale={ 0.9 } style={{ ...styles.button, backgroundColor: '#32d389' }}>
            <Text style={{ ...styles.buttonText, color: '#fff', fontSize: 32 } }>=</Text>
          </TouchableScale>
        </View>

      </View>

      <StatusBar style="auto" />

    </View>
  )
}
