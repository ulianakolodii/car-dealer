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

const START_YEAR = 2015;

const VehicleForm = ({ makes }: { makes: Array<Make> }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - START_YEAR + 1 },
    (_, index) => currentYear - index
  );
  return (
    <form>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label>Vehicle make</Label>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a make" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Make</SelectLabel>
                  {makes.map((make) => (
                    <SelectItem key={make.MakeId} value={make.MakeName}>
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
            <Select>
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
          <Button type="submit" className="w-full">
            Next
          </Button>
        </div>
      </div>
    </form>
  );
};

export default VehicleForm;
