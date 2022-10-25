import React from 'react';
import { Alert } from 'react-native'

const AgreeLogOut = (logOut: () => void ) =>

  Alert.alert('Cerrar sesión', '¿Estas seguro de cerrar sesión como administrador?', [
    {
      text: 'CANCELAR',
      onPress: () => {},
      style: 'cancel',
    },
    { text: 'ACEPTAR', onPress: () => logOut() },
  ]);

export default AgreeLogOut
