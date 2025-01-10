import getMakesForVehicleType from '@/app/services/getMakesForVehicleType';
import getModelsForMakeIdYear from '@/app/services/getModelsForMakeIdYear';
import { ResultPageParams } from '@/app/types';
import generateYearsRange from '@/app/utils/generateYearsRange';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { notFound } from 'next/navigation';

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

  const vehicleData = await getModelsForMakeIdYear({ makeId, year });
  if (!vehicleData || vehicleData.length === 0) {
    notFound();
  }
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
              <CardDescription>
                {model.Make_Name} - # {model.Model_ID}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
