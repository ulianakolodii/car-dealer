"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Make } from "../types";
import { FormEventHandler, useMemo, useState } from "react";
import generateYearsRange from "../utils/generateYearsRange";
import { useRouter } from "next/navigation";

const VehicleForm = ({ makes }: { makes: Array<Make> }) => {
  const years = generateYearsRange();
  const [make, setMake] = useState<string>();
  const [year, setYear] = useState<string>();
  const router = useRouter();

  const disabled = useMemo(() => !make || !year, [make, year]);

  const handleMakeChange = (value: string) => {
    setMake(value);
  };

  const handleYearChange = (value: string) => {
    setYear(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    router.push(`/result/${make}/${year}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label>Vehicle make</Label>
            </div>
            <Select value={make} onValueChange={handleMakeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a make" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Make</SelectLabel>
                  {makes.map((make) => (
                    <SelectItem key={make.MakeId} value={String(make.MakeId)}>
                      {make.MakeName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label>Model year</Label>
            </div>
            <Select value={year} onValueChange={handleYearChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Year</SelectLabel>
                  {years.map((year) => (
                    <SelectItem key={year} value={String(year)}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full" disabled={disabled}>
            Next
          </Button>
        </div>
      </div>
    </form>
  );
};

export default VehicleForm;
