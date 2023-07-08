import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};
export const ParallelQueryPage = () => {
  const { data: superHeroesData } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: FrndData } = useQuery("friends", fetchFriends);
  return (
    <>
      <h1>Super Heroes</h1>
      {superHeroesData?.data.map((ele) => (
        <div key={ele.id}>{ele.name} </div>
      ))}

      <h1>Friends</h1>
      {FrndData?.data.map((ele1) => (
        <div key={ele1.id}>{ele1.name} </div>
      ))}
    </>
  );
};
