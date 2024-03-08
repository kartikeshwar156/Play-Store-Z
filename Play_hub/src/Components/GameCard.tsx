import React from "react";
import { Game } from "../Hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage_URL from "../Services/Image_URL";
import Emoji from "./Emoji";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImage_URL(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom='3px'>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            {/* // constructing an  array of platform object */}
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="xl">{game.name} <Emoji rating={game.rating_top}></Emoji></Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
