import { useEffect, useState } from "react";
import Card from "./Card";

import dataName from "./data-name-only.json";

function App() {
  const [cards, setCards] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const linkPrefix = "https://pokeapi.co/api/v2/pokemon/";

    async function fetchData() {
      const arrFetched = await Promise.all(
        dataName.map(async (item) => {
          try {
            const response = await fetch(`${linkPrefix}${item.name}`);

            if (!response.ok) {
              throw new Error(`HTTP ${response.status} for ${item.name}`);
            }

            const pokemon = await response.json();

            const pokemonName =
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

            return {
              id: pokemon.id,
              name: pokemonName,
              src: pokemon.sprites.versions["generation-viii"][
                "brilliant-diamond-shining-pearl"
              ].front_default,
              alt: `image of ${pokemonName}`,
            };
          } catch (error) {
            console.log(error);
            return null;
          }
        }),
      );

      // make the page still could show the rest
      const validCards = arrFetched.filter(Boolean);
      setCards(validCards);
      setArr(validCards.map((item) => item.id));
    }

    fetchData();
  }, []);

  const [scores, setScores] = useState({
    currScore: 0,
    bestScore: 0,
  });

  const [isGameOver, setIsGameOver] = useState(false);

  function handleClick(id) {
    if (isGameOver) {
      return;
    }

    if (!arr.includes(id)) {
      setScores({
        ...scores,
        currScore: 0,
      });

      setArr(cards.map((item) => item.id));
      setCards((prev) => shuffle([...prev]));
      return;
    }

    const newArr = arr.filter((e) => e !== id);

    setScores((prev) => {
      if (prev.currScore === prev.bestScore) {
        return {
          currScore: prev.currScore + 1,
          bestScore: prev.bestScore + 1,
        };
      }

      return {
        ...scores,
        currScore: prev.currScore + 1,
      };
    });

    setArr(newArr);

    if (newArr.length === 0) {
      setIsGameOver(true);
    } else {
      setCards((prev) => shuffle([...prev]));
    }
  }

  // Source - https://stackoverflow.com/a/2450976
  // Posted by ChristopheD, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-04-15, License - CC BY-SA 4.0

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div className="m-8 dark:bg-gray-800 dark:text-white">
      <div className="flex justify-between ">
        <h1 className="text-red-600 text-3xl">Pokémon Memory Game</h1>
        <div>
          <p>Score: {scores.currScore}</p>
          <p>Best score: {scores.bestScore}</p>
        </div>
      </div>

      <h2 className="mt-6 mb-6">
        Get points by clicking on an image but don't click on any more than
        once!
      </h2>

      <div className="grid grid-cols-6 gap-4">
        {cards.map((item) => (
          <Card
            key={item.id}
            src={item.src}
            name={item.name}
            alt={item.alt}
            handleClick={() => handleClick(item.id)}
          />
        ))}
      </div>

      {isGameOver ? (
        <>
          <p className="mt-8">You win!</p>
          <p className="mt-6"> Refresh to play again.</p>
        </>
      ) : null}
    </div>
  );
}

export default App;
