"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
const VehicleSkeleton = () => {
  return (
    <form>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label>Vehicle make</Label>
            </div>
            <Select disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Loading..." />
              </SelectTrigger>
            </Select>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label>Model year</Label>
            </div>
            <Select disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Loading..." />
              </SelectTrigger>
            </Select>
          </div>
          <Button type="submit" className="w-full" disabled>
            Next
          </Button>
        </div>
      </div>
    </form>
  );
};
export default VehicleSkeleton;
