import { get } from ".";

/**
 * Function to fetch/get list of universities
 */
const getUniversities = async (country = "Malaysia") => {
  const res = await get(
    `http://universities.hipolabs.com/search?country=${country}`
  );
  return res;
};

export default getUniversities;
