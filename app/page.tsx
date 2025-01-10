import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getMakesForVehicleType from "./services/getMakesForVehicleType";
import VehicleForm from "./components/VehicleForm";

const Home = async () => {
  const result = await getMakesForVehicleType();
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
              <VehicleForm makes={result} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
