import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const productos = [
  { id: '1', nombre: 'Remera Oversize', precio: 8500, talle: 'M' },
  { id: '2', nombre: 'Jean Recto', precio: 15900, talle: '40' },
  { id: '3', nombre: 'Campera Denim', precio: 22000, talle: 'L' },
  { id: '4', nombre: 'Buzo Canguro', precio: 12500, talle: 'S' },
];

export default function Productos() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛍️ Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.detalle}>Talle: {item.talle}</Text>
            <Text style={styles.precio}>${item.precio}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  nombre: { fontSize: 18, fontWeight: '600' },
  detalle: { fontSize: 14, color: '#666', marginTop: 2 },
  precio: { fontSize: 16, fontWeight: 'bold', color: '#2a7', marginTop: 4 },
});