import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [talle, setTalle] = useState('');

  const guardar = () => {
    if (!nombre || !precio) {
      Alert.alert('Faltan datos', 'Completá al menos nombre y precio');
      return;
    }
    console.log({ nombre, precio, talle });
    Alert.alert('Guardado', `${nombre} - $${precio}`);
    setNombre('');
    setPrecio('');
    setTalle('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>➕ Nuevo Producto</Text>
      <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Precio" value={precio} onChangeText={setPrecio} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Talle" value={talle} onChangeText={setTalle} />
      <Button title="Guardar" onPress={guardar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
});