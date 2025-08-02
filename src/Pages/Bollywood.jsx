import React from "react";
import BollywoodMovies from "../assets/Bollywood";
import { Box, Text, Image, Container } from "@chakra-ui/react";

const Bollywood = ({ handleAddToWatchlist }) => {
  return (
    <Container maxW="container.xl" mt={10}>
      <Text fontSize="3xl" mb={6} textAlign="center" fontFamily="initial">
        Bollywood Picks
      </Text>
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap="30px">
        {BollywoodMovies.movies.map((movie, index) => (
          <Box
            key={index}
            width="22%"
            mb={4}
            border="1px solid white"
            borderRadius="md"
            overflow="hidden"
            p={2}
          >
            <Image
              src={movie.poster}
              alt={movie.name}
              borderRadius="md"
              objectFit="cover"
              height="360px"
              width="100%"
            />
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              {movie.name}
            </Text>
            <Text>
              📅 {movie.year} | ⭐ {movie.rating}
            </Text>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#3182CE",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleAddToWatchlist(movie)}
            >
              Add to Watchlist
            </button>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Bollywood;
