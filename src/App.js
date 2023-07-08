import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";

import "./App.css";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ParallelQueryPage } from "./components/ParallelQuery.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route exact path="/rq-parallel" element={<ParallelQueryPage />} />
            <Route
              exact
              path="/rq-super-heroe/:heroId"
              element={<RQSuperHeroPage />}
            />
            <Route exact path="/super-heroes" element={<SuperHeroesPage />} />
            <Route
              exact
              path="/rq-super-heroes"
              element={<RQSuperHeroesPage />}
            />

            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
