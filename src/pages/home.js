import React, { useState, useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage";
import beach from "../assets/accueil.svg";
import Card from "../components/Card";
import jsonData from "../data/data.json";

function Accueil() {
  // Ne pas utiliser la variable jsonDataState dans la fonction Accueil
  // const [jsonDataState, setJsonData] = useState(null);

  useEffect(() => {
    // setJsonData(jsonData); // Vous n'avez pas besoin de cette ligne si vous ne l'utilisez pas dans Accueil
  }, []);

  return (
    <div className="Accueil">
      <BackgroundImage image={beach} text="Chez vous, partout et ailleurs" />
    </div>
  );
}

function App() {
  const [jsonDataState, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(jsonData);
  }, []);

  return (
    <>
      <Accueil />
      <div className="CardContainer">
        {jsonDataState ? (
          jsonDataState.map((item, index) => <Card key={index} data={item} />)
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </>
  );
}

export default App;
