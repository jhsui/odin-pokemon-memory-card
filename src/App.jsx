import { useState } from "react";
import Card from "./Card";
import data from "./data.json";

function App() {
  const [scores, setScores] = useState({
    currScore: 0,
    bestScore: 0,
  });

  const initialArr = data.map((item) => item.id);
  // const initialArr = [132, 151, 94, 104, 133, 95, 131, 144, 145, 146, 253, 172];
  const [arr, setArr] = useState(initialArr);

  const [cards, setCards] = useState(data);

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

      setArr(initialArr);
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

    // remove it from arr:
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
