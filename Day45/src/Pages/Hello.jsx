import axios from "axios";
import React, { useEffect, useState } from "react";

function Hello() {
  const [hello, setHello] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/hello")
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        setHello(res.data);
      })
      .catch((error) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        setError(error.message);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>Hello</h1>
      {hello.map((hi) => (
        <h2 key={hi.id}>{hi.name}</h2>
      ))}
    </>
  );
}

export default Hello;
