import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React from "react";

type CardItemProps = {
  title: string;
  value: number;
  icon: LucideIcon;
  description?: string;
};

export function CardItem({ title, value, icon, description }: CardItemProps) {
  return (
    <Card className="w-full p-4 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-600 text-sm">{title}</h2>
        <div>{React.createElement(icon)}</div>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-muted-foreground text-sm">{description}</div>
      </div>
    </Card>
  );
}
