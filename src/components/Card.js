import React from 'react';
import { StyleSheet } from 'react-native';
import { Card as PaperCard, Title, Paragraph } from 'react-native-paper';

const Card = ({ title, description, image }) => {
  return (
    <PaperCard style={styles.card}>
      {image && <PaperCard.Cover source={image} />}
      <PaperCard.Content>
        <Title>{title}</Title>
        {description && <Paragraph>{description}</Paragraph>}
      </PaperCard.Content>
    </PaperCard>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 16,
  },
});

export default Card;