import "./card.css";
import cardOffers from "./card-offers.html";
import cardFruits from "./card-fruits.html";
import cardDrinks from "./card-drinks.html";
import cardContainer from "./card.container.html";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const offer = () => cardOffers;
export const fruits = () => cardFruits;
export const drinks = () => cardDrinks;
export const Container = () => cardContainer;
