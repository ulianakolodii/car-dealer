import getMakesForVehicleType from "@/app/services/getMakesForVehicleType";
import getModelsForMakeIdYear from "@/app/services/getModelsForMakeIdYear";
import { ResultPageParams } from "@/app/types";
import generateYearsRange from "@/app/utils/generateYearsRange";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function generateStaticParams() {
  const makes = await getMakesForVehicleType();
  const years = generateYearsRange();

  return makes.reduce<Array<ResultPageParams>>(
    (acc, make) => [
      ...acc,
      ...years.map((year) => ({
        makeId: String(make.MakeId),
        year: String(year),
      })),
    ],
    []
  );
}

const ResultPage = async ({
  params,
}: {
  params: Promise<ResultPageParams>;
}) => {
  const { makeId, year } = await params;

  try {
    const vehicleData = await getModelsForMakeIdYear({ makeId, year });
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          Vehicle Models for Make ID {makeId} and Year {year}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicleData.map((model) => (
            <Card key={model.Model_ID}>
              <CardHeader>
                <CardTitle>{model.Model_Name}</CardTitle>
                <CardDescription>Make: {model.Make_Name}</CardDescription>
              </CardHeader>
              <CardContent>Model ID: {model.Model_ID}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.error("Error fetching vehicle models", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Error</h1>
        <p className="text-red-500">
          Failed to fetch vehicle models. Please try again later.
        </p>
      </div>
    );
  }
};

export default ResultPage;
