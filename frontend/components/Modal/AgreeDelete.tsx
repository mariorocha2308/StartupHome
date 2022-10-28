import React from 'react';
import { Alert } from 'react-native'

const AgreeDelete = (handleDelete: () => void) =>

  Alert.alert('¿Quieres borrar este producto?', 'En caso de confirmar eliminar este producto, no se podra volver a restaurar de nuevo y se tendra que crear.', [
    {
      text: 'CANCELAR',
      onPress: () => {},
      style: 'cancel',
    },
    { text: 'ACEPTAR', onPress: () => handleDelete()},
  ]);

export default AgreeDelete
