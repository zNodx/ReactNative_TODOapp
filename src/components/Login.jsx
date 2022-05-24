import { StyleSheet, Text, View,SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const Login = () => {

  const [type, setType] = React.useState('login')

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = () => {
    console.log('email: ', email)
    console.log('password: ', password)
  }

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>Email</Text>
      <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="Email" />
      <Text style={styles.title}>Password</Text>
      <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholder="Password" />
      <TouchableOpacity style={[styles.button,{backgroundColor:type == 'login' ? '#00c6f0' : '#45da00' }]} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{type == 'login' ? 'Login' : 'SingUp'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>    setType(type == 'login' ? 'signup' : 'login')}>
        <Text style={styles.textSingUp}>
          {type == 'login' ? 'Create a new account' : 'Login'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingTop: 25,
    backgroundColor: '#f2f6fc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 10,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10, 
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textSingUp: {
    textAlign: 'center',
    marginTop: 10,
  }

});

