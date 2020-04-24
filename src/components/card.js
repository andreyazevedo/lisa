import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Radio from './radio';

const styles = StyleSheet.create({
  title: {
    opacity: 0.5,
    color: '#141719',
    fontFamily: 'Work Sans',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 19,
  },
  description: {
    marginTop: 24,
  },
  descriptionText: {
    opacity: 0.5,
    color: '#000',
    fontFamily: 'Work Sans',
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 0,
    marginBottom: 30,
    height: 170,
    width: 303,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.68,
    elevation: 11,
  },
  cardBorder: {
    borderBottomWidth: 10,
    borderBottomColor: '#30c5ca',
  },
  container: {
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
  },
  radioContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
  },
});

const Card = ({active, title}) => {
  const cardStyle = active ? [styles.card, styles.cardBorder] : styles.card;

  return (
    <View style={cardStyle}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.descriptionText, styles.description]}>
            Ideal quando você
          </Text>
          <Text style={styles.descriptionText}>precisa clarear a mente.</Text>
        </View>
        <View style={styles.radioContainer}>
          <Radio active={active} />
        </View>
      </View>
    </View>
  );
};

export default Card;
