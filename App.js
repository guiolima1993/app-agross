import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import data from './data'

import logo from './assets/logo-agross.png';
import ProductImage from './assets/produto-venda.png'; 


const Accordion = ({ title, content, onBuyPress }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.accordion}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.accordionHeader}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <AntDesign name={isOpen ? 'up' : 'down'} size={20} color="#fff" />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.accordionContent}>
          {content.map(item => (
            <View key={item.id} style={styles.fungiCard}>
              <Text style={styles.fungiTitle}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.solutionTitle}>Solução:</Text>
              <View style={styles.productContainer}>
                <Image source={ProductImage} style={styles.fullWidthImage} />
                <TouchableOpacity style={styles.fullWidthButton} onPress={() => onBuyPress(item)}>
                  <Text style={styles.buyButtonText}>Comprar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const ProductModal = ({ visible, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const unitPrice = 79.00;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const finalizePurchase = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPurchaseCompleted(true);
      setTimeout(() => {
        setPurchaseCompleted(false);
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.modalContainer}>
        <ScrollView contentContainerStyle={styles.modalContent}>
          <Image source={ProductImage} style={styles.modalImage} />
          <Text style={styles.modalTitle}>AminoAgRoss Fertilizante Foliar</Text> 
          <Text style={styles.productDescription}>
            Amino AgRoss é um fertilizante foliar organomineral com macro e micronutrientes, rico em carbono orgânico, importante na formação, vegetação e florescimento das plantas. Desenvolvido com o mais alto nível de tecnologia, visa atender a demanda de praticamente todas as culturas, trazendo inúmeros benefícios.
          </Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.priceText}>R$ {(unitPrice * quantity).toFixed(2)}</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#004d00" />
          ) : purchaseCompleted ? (
            <Text style={styles.purchaseCompletedText}>Compra realizada com sucesso!</Text>
          ) : (
            <TouchableOpacity style={styles.finalizeButton} onPress={finalizePurchase}>
              <Text style={styles.finalizeButtonText}>Finalizar</Text>
            </TouchableOpacity>
          )}
          {!loading && !purchaseCompleted && (
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.goBack}>Voltar</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};


export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [buyModalVisible, setBuyModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerTitle}>Recomendações Técnicas para Fungos</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        style={styles.flatList}
      />
      {selectedItem && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <SafeAreaView style={styles.modalContainer}>
            <ScrollView contentContainerStyle={styles.modalContent}>
              <Image source={selectedItem.image} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedItem.title}</Text>
              <Accordion title="Fungos" content={selectedItem.fungi} onBuyPress={item => {
                setSelectedProduct(item);
                setBuyModalVisible(true);
              }} />
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.goBack}>Voltar</Text>
              </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>
        </Modal>
      )}
      {selectedProduct && (
        <ProductModal
          visible={buyModalVisible}
          onClose={() => setBuyModalVisible(false)}
          product={selectedProduct}
        />
      )}
      <View style={styles.footer}>
        <Image source={logo} style={styles.footerLogo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247, 240, 234)',
  },
  header: {
    padding: 16,
    backgroundColor: '#004d00', 
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 60,
  },
  headerTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    marginTop: 4,
  },
  card: {
    flex: 1,
    margin: 12, 
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 0, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardTitle: {
    marginTop: 10,
    marginBottom: 10, 
    fontSize: 14,
    fontWeight: 'bold',
    color: '#004d00',
    textAlign: 'center',
  },
  priceText: {
    color: '#004d00',
    fontSize: 16,
    fontWeight: 'bolder',
    marginTop: 20,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgb(247, 240, 234)',
  },
  modalContent: {
    padding: 16,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 16,
    color: '#004d00',
  },
  accordion: {
    width: '100%',
    marginTop: 16,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#004d00', 
    borderRadius: 8,
  },
  accordionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  accordionContent: {
    padding: 0, 
  },
  fungiCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    width: '100%',
  },
  fungiTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d00', 
    marginBottom: 8,
  },
  solutionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: '#004d00', 
  },
  productContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  fullWidthImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  fullWidthButton: {
    backgroundColor: '#004d00', 
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 20,
  },
  finalizeButton: {
    backgroundColor: '#004d00', 
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  finalizeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  purchaseCompletedText: {
    fontSize: 18,
    color: 'green',
    marginTop: 16,
  },
  goBack: {
    fontSize: 16,
    color: '#004d00',
    borderBlockColor: '#004d00',
    borderWidth: 1,
    padding: 5,
    marginTop: 16,
  },
  grid: {
    flexGrow: 1,
  },
  flatList: {
    flexGrow: 1,
  },
  footer: {
    padding: 16,
    backgroundColor: '#004d00', 
    alignItems: 'center',
  },
  footerLogo: {
    width: 60,
    height: 30,
  },
});
