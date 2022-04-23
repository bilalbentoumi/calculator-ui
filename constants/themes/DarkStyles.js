import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#262729',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 20
  },
  expression: {
    color: '#9b9b9b',
    fontSize: 28,
    fontFamily: 'Inter_500',
    textAlign: 'right'
  },
  result: {
    color: '#fff',
    fontSize: 60,
    fontFamily: 'Inter_600',
    textAlign: 'right'
  },
  pad: {
    backgroundColor: '#18191b',
    padding: 12
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: 8,
    aspectRatio: 1,
    backgroundColor: '#232429',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  buttonText: {
    fontSize: 22,
    color: '#808183',
    fontFamily: 'Inter_600'
  },
});