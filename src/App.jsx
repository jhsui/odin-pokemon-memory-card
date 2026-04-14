import { useState } from "react";
import Card from "./Card";

function App() {
  const [scores, setScores] = useState({
    currScore: 0,
    bestScore: 0,
  });

  const [arr, setArr] = useState([
    132, 151, 94, 104, 133, 95, 131, 144, 145, 146, 253, 172,
  ]);

  function handleClick(id) {
    if (!arr.includes(id)) {
      setScores({
        ...scores,
        currScore: 0,
      });
    } else {
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
      setArr(arr.filter((e) => e !== id));
    }
  }

  return (
    // min-w-1 ?
    <div className="m-8 dark:bg-gray-800 dark:text-white">
      <div className="flex justify-between ">
        <h1 className="text-red-600 text-3xl">Pokémon Memory Game</h1>
        <div>
          <p>Score: {scores.currScore}</p>
          <p>Best score: {scores.bestScore}</p>
        </div>
      </div>
      <br />

      <h2>
        Get points by clicking on an image but don't click on any more than
        once!
      </h2>
      <br />

      <div className="grid grid-cols-6 gap-4">
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/132.png"
          }
          name={"Ditto"}
          alt={"image of Ditto"}
          handleClick={() => handleClick(132)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/151.png"
          }
          name={"Mew"}
          alt={"image of Mew"}
          handleClick={() => handleClick(151)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/94.png"
          }
          name={"Gengar"}
          alt={"image of Gengar"}
          handleClick={() => handleClick(94)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/104.png"
          }
          name={"Cubone"}
          alt={"image of Cubone"}
          handleClick={() => handleClick(104)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/133.png"
          }
          name={"Eevee"}
          alt={"image of Eevee"}
          handleClick={() => handleClick(133)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/95.png"
          }
          name={"Onix"}
          alt={"image of Onix"}
          handleClick={() => handleClick(95)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/131.png"
          }
          name={"Lapras"}
          alt={"image of Lapras"}
          handleClick={() => handleClick(131)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/144.png"
          }
          name={"Articuno"}
          alt={"image of Articuno"}
          handleClick={() => handleClick(144)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/145.png"
          }
          name={"Zapdos"}
          alt={"image of Zapdos"}
          handleClick={() => handleClick(145)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/146.png"
          }
          name={"Moltres"}
          alt={"image of Moltres"}
          handleClick={() => handleClick(146)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/253.png"
          }
          name={"Grovyle"}
          alt={"image of Grovyle"}
          handleClick={() => handleClick(253)}
        ></Card>
        <Card
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/brilliant-diamond-shining-pearl/172.png"
          }
          name={"Pichu"}
          alt={"image of Pichu"}
          handleClick={() => handleClick(172)}
        ></Card>
      </div>
    </div>
  );
}

export default App;
