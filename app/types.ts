export type Make = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type Model = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export type ResultPageParams = {
  makeId: string;
  year: string;
};
