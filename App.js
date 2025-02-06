import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [C, setC] = useState('');
  const [c, setCResult] = useState('');
  const [A, setAResult] = useState('');
  const [B, setBResult] = useState('');
  const [D, setDResult] = useState(''); // Nuova variabile

  const calculateTriangle = () => {
    const sideA = parseFloat(a);
    const sideB = parseFloat(b);
    const angleC = parseFloat(C) * (Math.PI / 180); // Converti in radianti

    if (isNaN(sideA) || isNaN(sideB) || isNaN(angleC)) {
      alert('Inserisci valori validi!');
      return;
    }

    // Teorema del coseno per trovare il lato c
    const sideC = Math.sqrt(sideA ** 2 + sideB ** 2 - 2 * sideA * sideB * Math.cos(angleC));

    // Teorema dei seni per trovare gli angoli A e B
    const angleA = Math.asin((sideA * Math.sin(angleC)) / sideC) * (180 / Math.PI);
    const angleB = 180 - angleA - parseFloat(C);

    // Nuova variabile D = 180 - B
    const angleD = 180 - angleB;

    setCResult(sideC.toFixed(2));
    setAResult(angleA.toFixed(2));
    setBResult(angleB.toFixed(2));
    setDResult(angleD.toFixed(2)); // Imposta il valore di D
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Calcolatore Triangolo" />
        <Card.Content>
          <TextInput 
            label="Lato Basso"
            keyboardType="numeric"
            value={a}
            onChangeText={setA}
            mode="outlined"
            style={styles.input}
          />

          <TextInput 
            label="Lato Alto"
            keyboardType="numeric"
            value={b}
            onChangeText={setB}
            mode="outlined"
            style={styles.input}
          />

          <TextInput 
            label="Angolo Compreso (gradi)"
            keyboardType="numeric"
            value={C}
            onChangeText={setC}
            mode="outlined"
            style={styles.input}
          />

          <Button mode="contained" onPress={calculateTriangle} style={styles.button}>
            Calcola
          </Button>

          {c !== '' && (
            <View style={styles.resultsContainer}> 
              <View style={styles.resultsText}>
                <Text style={styles.resultText}>Terzo lato: {c}</Text>
                <Text style={styles.resultText}>Angolo Alto: {A}°</Text>
                <Text style={styles.resultText}>Angolo Basso: {B}°</Text>
                <Text style={styles.resultText}>Inclinazione: {D}°</Text>
              </View> 
            </View>
            /* <View style={styles.resultsContainer}> 
              <View style={styles.resultsText}>
                <Text style={styles.resultText}>Terzo lato: {c}</Text>
                <Text style={styles.resultText}>Angolo Alto: {A}°</Text>
                <Text style={styles.resultText}>Angolo Basso: {B}°</Text>
                <Text style={styles.resultText}>Inclinazione: {D}°</Text>
              </View>
 
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Triangle_%28PSF%29.svg/512px-Triangle_%28PSF%29.svg.png' }} 
                  style={styles.triangleImage}
                />
              </View>
            </View> */
          )}
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    padding: 10,
    borderRadius: 10,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  resultsContainer: {
    flexDirection: 'row', // Disposizione orizzontale (due colonne)
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  resultsText: {
    flex: 1, // Occupa metà spazio
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1, // Occupa metà spazio
    alignItems: 'center',
    justifyContent: 'center',
  },
  triangleImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

