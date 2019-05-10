import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    fontSize: 25,
    padding: 28,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#353b48',
    color: '#fff',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#2f3640',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#222f3e',
  },
  buttonDouble: {
    width: Dimensions.get('window').width / 4 * 2,
  },
  buttonTriple: {
    width: Dimensions.get('window').width / 4 * 3,
  }
})

export default props => {

  const stylesButton = [styles.button]
  if (props.double) stylesButton.push(styles.buttonDouble)
  if (props.triple) stylesButton.push(styles.buttonTriple)
  if (props.operation) stylesButton.push(styles.operationButton)

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>
        {props.label}
      </Text>
    </TouchableHighlight>
    )
}
