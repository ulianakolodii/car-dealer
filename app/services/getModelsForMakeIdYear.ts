import { Model, ResultPageParams } from '../types';

const getModelsForMakeIdYear = async ({ makeId, year }: ResultPageParams) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data: {
      Results?: Array<Model>;
    } = await response.json();
    return data.Results;
  } catch (error) {
    console.error('Error fetching models for make ID and year:', error);
    return [];
  }
};

export default getModelsForMakeIdYear;
