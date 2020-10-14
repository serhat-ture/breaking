import React, { useState, useEffect } from "react";
import Header from "./component/ui/Header";
import CharacterGrid from "./component/characters/CharacterGrid";
import Shearch from "./component/ui/Search";

import "./App.css";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="contanier">
      <Header />
      <Shearch getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
