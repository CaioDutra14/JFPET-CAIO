import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  login: {
    flex: 1,
    padding: 30,
    backgroundColor: '#A050BE',
    textAlign: 'center',
    borderRadius: 5,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 6.0,
    alignItems: 'center',
  },

  font: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  to: {
    flexDirection: 'row',
    marginTop: 30
  },

  icon: {
    marginRight: 10
  },

  v2: {
    marginTop: 10,
    alignItems: 'center'
  },

  input: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    width: 150,
    margin: 20,
    padding: 10
  },

  ou: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 15
  },

  to2: {
    flexDirection: 'row',
    marginTop: 30,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    backgroundColor: 'white',
    marginBottom: 20
  },

  tinyLogo: {
    marginTop: 30,
    marginBottom: 30,
    width: 250,
    height: 250,
  },

});