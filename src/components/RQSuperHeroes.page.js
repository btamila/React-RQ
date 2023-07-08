// import { useQuery } from "react-query";
// import axios from "axios";
import { useSuperHeroes } from "../hooks/useSuperHeroes";
import { Link } from "react-router-dom";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };
export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Welcome", data);
  };
  const onError = (error) => {
    console.log("Error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroes(onSuccess, onError);
  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   "super-heroes",
  //   fetchSuperHeroes,
  //   {
  //     // cacheTime: 5000,
  //     // staleTime: 30000,
  //     // refetchOnMount: true,
  //     // refetchOnWindowFocus: "always",
  //     // refetchInterval: 2000,
  //     // refetchIntervalInBackground: true,
  //     // enabled: false,
  //     onSuccess: onSuccess,
  //     onError,
  //   }
  // );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log("---", isLoading, isFetching);
  return (
    <>
      <div>RQSuperHeroesPage</div>
      <button onClick={refetch}> Fetch Data</button>
      {data?.data.map((ele) => {
        return (
          <div key={ele.id}>
            <Link to={`/rq-super-heroe/${ele.id}`}>{ele.name}</Link>
          </div>
        );
      })}
    </>
  );
};
