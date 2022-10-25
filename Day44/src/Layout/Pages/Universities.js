import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUniversities from "../../api/university";

function Universities() {
  const [selectedCountry, setSelectedCountry] = useState("Malaysia");
  const { universities } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const setUniversities = (universities) =>
    dispatch({ type: "SET_USER_STATE", payload: { universities } });

  const fetchUniversities = async (country) => {
    const res = await getUniversities(country);
    if (res.status === 200 && res.data && Array.isArray(res.data)) {
      setUniversities(res.data);
    } else {
      alert("Error calling API");
    }
  };

  useEffect(() => {
    if (selectedCountry) fetchUniversities(selectedCountry);
  }, [selectedCountry]);

  return (
    <>
      <Box>
        <h2>This is the universities list page (not protected)</h2>

        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {["Malaysia", "Singapore", "United Kingdom", "France"].map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>

        <ul>
          {universities.map((u, i) => (
            <li key={i}>
              <div>{u.name}</div>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
}

export default Universities;
