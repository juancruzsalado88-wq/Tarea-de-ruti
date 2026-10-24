import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { db } from '@/services/firebase';

type Producto = { id: string; nombre: string; precio: number; talle: string };

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const cancelar = onSnapshot(collection(db, 'productos'), (snap) => {
      setProductos(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Producto, 'id'>) })));
    });
    return cancelar;
  }, []);

  const comprar = async (p: Producto) => {
    try {
      await addDoc(collection(db, 'pedidos'), {
        productoId: p.id,
        nombre: p.nombre,
        precio: p.precio,
        fecha: Date.now(),
      });
      Alert.alert('¡Compra realizada!', `Compraste ${p.nombre}`);
    } catch (e) {
      Alert.alert('Error', 'No se pudo completar la compra');
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛍️ Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>Todavía no hay productos. Cargá uno desde "Nuevo".</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.detalle}>Talle: {item.talle}</Text>
            <Text style={styles.precio}>${item.precio}</Text>
            <Button title="Comprar" onPress={() => comprar(item)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#f5f5f5', borderRadius: 10, padding: 14, marginBottom: 10 },
  nombre: { fontSize: 18, fontWeight: '600' },
  detalle: { fontSize: 14, color: '#666', marginTop: 2 },
  precio: { fontSize: 16, fontWeight: 'bold', color: '#2a7', marginVertical: 6 },
});