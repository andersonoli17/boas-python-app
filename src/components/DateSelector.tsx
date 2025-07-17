import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DateSelectorProps {
  onDateChange: (date: string) => void;
  selectedDate?: string;
}

const DateSelector = ({ onDateChange, selectedDate }: DateSelectorProps) => {
  const [date, setDate] = useState(selectedDate || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      onDateChange(date);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-4 mb-6">
      <div className="flex-1 max-w-xs">
        <Label htmlFor="date" className="text-sm font-medium">
          Selecione a data:
        </Label>
        <Input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <Button type="submit" className="bg-success hover:bg-success/90">
        Carregar
      </Button>
    </form>
  );
};

export default DateSelector;