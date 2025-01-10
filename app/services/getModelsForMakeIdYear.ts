import { Model, ResultPageParams } from "../types";

const getModelsForMakeIdYear = async ({ makeId, year }: ResultPageParams) => {
  const response = await fetch(
    `${process.env.API_URL}api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data: {
    Results?: Array<Model>;
  } = await response.json();
  return data.Results;
};

export default getModelsForMakeIdYear;
