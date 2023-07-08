import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroes = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: "always",
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    onSuccess,
    onError,
  });
};
