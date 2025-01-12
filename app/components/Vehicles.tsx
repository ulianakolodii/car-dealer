import getMakesForVehicleType from '../services/getMakesForVehicleType';
import VehicleForm from './VehicleForm';

const Vehicles = async () => {
  const result = await getMakesForVehicleType();
  return <VehicleForm makes={result} />;
};

export default Vehicles;
