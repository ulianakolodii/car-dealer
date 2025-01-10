import { Make } from '../types';

const getMakesForVehicleType = async () => {
  const response = await fetch(
    `${process.env.API_URL}api/vehicles/GetMakesForVehicleType/car?format=json`
  );
  const data: {
    Results: Array<Make>;
  } = await response.json();
  return data.Results;
};

export default getMakesForVehicleType;
