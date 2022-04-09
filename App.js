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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
