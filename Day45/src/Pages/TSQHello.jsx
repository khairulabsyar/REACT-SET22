import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@mui/material";

function TSQHello() {
  const [world, setWorld] = useState("");
  const [name, setName] = useState("");

  const fetchHello = () => {
    return axios.get("http://localhost:4000/hello");
  };

  const postHello = (data) => {
    return axios.post("http://localhost:4000/hello", data);
  };

  const { data, isLoading, isError, error, refetch } = useQuery(
    ["hello"],
    () => fetchHello(),
    {
      enabled: true, // prevent data from called (false), study the difference between true and false and how it affects useQueryClient & useMutation
      onSuccess: () => {},
      onError: (err) => {
        console.log("Error", err);
      },
    }
  );

  const queryClient = useQueryClient();

  const { mutate } = useMutation(postHello, {
    onSuccess: () => {
      queryClient.invalidateQueries(["hello"]);
    },
  });

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (isError) {
    return <h1>{error}</h1>;
  }

  const handleFetch = () => {
    refetch();
  };

  const handleSubmit = () => {
    const data = { world, name };
    mutate(data);
    setName("");
    setWorld("");
  };

  return (
    <>
      <h1>TSQ-Hello</h1>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={world}
        placeholder="world"
        onChange={(e) => setWorld(e.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleFetch}>Fetch</Button>

      {data?.data?.map((hi) => (
        <h2 key={hi.id}>
          {hi.name} {hi.world}
        </h2>
      ))}
    </>
  );
}

export default TSQHello;
