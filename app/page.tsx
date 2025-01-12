import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Vehicles from './components/Vehicles';
import { Suspense } from 'react';
import VehicleSkeleton from './components/VehicleSkeleton';

const Home = async () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Vehicle filter</CardTitle>
              <CardDescription>
                Select the vehicle you want to filter by
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<VehicleSkeleton />}>
                <Vehicles />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
