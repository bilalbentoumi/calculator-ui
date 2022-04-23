import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f5f6f8',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 20
  },
  expression: {
    color: '#909da2',
    fontSize: 28,
    fontFamily: 'Inter_500',
    textAlign: 'right'
  },
  result: {
    color: '#000',
    fontSize: 60,
    fontFamily: 'Inter_600',
    textAlign: 'right'
  },
  pad: {
    backgroundColor: '#fff',
    padding: 12
  },
  row: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: 8,
    aspectRatio: 1,
    backgroundColor: '#e9edf5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  buttonText: {
    fontSize: 22,
    color: '#637077',
    fontFamily: 'Inter_600'
  },
});