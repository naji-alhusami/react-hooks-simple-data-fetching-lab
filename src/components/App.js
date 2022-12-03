// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //    const fetchData= async () => {
    //     const result = await fetch("https://dog.ceo/api/breeds/image/random");
    //     const image = await result.json();
    //     console.log(image);
    //    }
    //    fetchData();
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
        setIsLoaded(true);
      });
  }, []);

  
  if (!isLoaded) return <h3>Loading ...</h3>;
  return (
    <div>
      <img src={image} alt="A Random Dog" />;
    </div>
  );
}
export default App;
