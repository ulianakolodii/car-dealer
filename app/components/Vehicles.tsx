import { Suspense } from 'react';
import getMakesForVehicleType from '../services/getMakesForVehicleType';
import VehicleForm from './VehicleForm';
import VehicleSkeleton from './VehicleSkeleton';

const Vehicles = async () => {
  const result = await getMakesForVehicleType();
  return (
    <Suspense fallback={<VehicleSkeleton />}>
      <VehicleForm makes={result} />
    </Suspense>
  );
};

export default Vehicles;
