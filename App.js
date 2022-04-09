import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class extends React.Component{

  constructor (props){
    super(props)
    this.state = {
      boaVinda: "Seja bem vindo ao app Gerador de Jogo Mega Sena!",
      numeros: []
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.boaVinda}</Text>
        <Text>{this.state.numeros}</Text>
        <Button
          title="Gerar"
          onPress={() => this.setState({
            cont: this.state.cont + 1
          })}
        />
      </View>
    )
  }
}

function gerarNumeros () {
  let numeros = []
  for(let i = 0 ; i < 6 ; i++){
    let seguir = false
    while(seguir = false){
      let numero = Math.floor(Math.random * 59) + 1
      for(let j ; j < numeros.length ; j++){
        if(numeros[j] !== numero){
          seguir = true
        }
      }

      if(seguir == true)
        numeros.push(numero)
    }
  }

  return numeros
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
