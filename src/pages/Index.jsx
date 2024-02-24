// Pseudo code pour la page Index de réservation de e-tickets pour les Jeux Olympiques de Paris 2024
import React from "react";
import { Box, Button, Container, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

const Index = () => {
  // Remplacez ces fonctions par des interactions réelles avec le backend
  const handleSelectOffer = (offer) => {
    console.log(`Selected offer: ${offer}`);
    // Ajouter l'offre au panier de l'utilisateur (implémentation backend nécessaire)
  };

  const handleAuthentication = () => {
    console.log("User authenticated");
    // Authentifier l'utilisateur (implémentation backend nécessaire)
  };

  const handlePayment = () => {
    console.log("Payment processed");
    // Simuler le processus de paiement (implémentation backend nécessaire)
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Jeux Olympiques de Paris 2024
        </Heading>
        <Image src="https://images.unsplash.com/photo-1684332078402-2a91dd7d0c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxPbHltcGljJTIwR2FtZXMlMjBQYXJpcyUyMDIwMjR8ZW58MHx8fHwxNzA4ODEyNzAxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Jeux Olympiques de Paris 2024" />
        <Text>Bienvenue sur la plateforme de réservation de e-tickets pour les Jeux Olympiques de Paris 2024. Choisissez votre offre et vivez des moments inoubliables.</Text>
        <SimpleGrid columns={3} spacing={10}>
          {["Solo", "Duo", "Familiale"].map((offer) => (
            <Box key={offer} p={5} shadow="md" borderWidth="1px">
              <Heading as="h3" size="lg">
                {offer}
              </Heading>
              <Text mt={4}>Réservez votre place pour les jeux.</Text>
              <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid" mt={8} onClick={() => handleSelectOffer(offer)}>
                Réserver
              </Button>
            </Box>
          ))}
        </SimpleGrid>
        <Button colorScheme="blue" onClick={handleAuthentication}>
          S'authentifier
        </Button>
        <Button colorScheme="green" onClick={handlePayment}>
          Payer
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
