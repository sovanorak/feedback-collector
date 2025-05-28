"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { statusMap } from "./map-status";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Feedback = {
  id: string;
  score: number;
  status: "pending" | "read" | "closed";
  email: string;
  feedback: string;
  feedbackType: "positive" | "negative" | "neutral";
};

export const columns: ColumnDef<Feedback>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "feedback",
    header: "Feedback",
    cell: ({ row }) => {
      const feedback = row.getValue("feedback") as string;
      return <span className="font-semibold">{feedback}</span>;
    },
  },
  {
    accessorKey: "feedbackType",
    header: "Feedback-Type",
    cell: ({ row }) => {
      const feedbackType = row.getValue("feedbackType") as string;
      const typeEmojiMap: { [key: string]: string } = {
        positive: "😍",
        negative: "😡",
        neutral: "🙂",
      };
      return <span className="text-xl">{typeEmojiMap[feedbackType]}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      // Map to allowed Badge colors
      const { text, bgColor } = statusMap[status] || {
        text: status,
        bgColor: "",
      }; // Fallback
      return (
        <Badge className={bgColor} title={text}>
          {text}
        </Badge>
      );
    },
  },
  {
    accessorKey: "score",
    header: "Rating-Score",
    cell: ({ row }) => {
      const score = row.getValue("score") as number;
      return <div>{score} / 100</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
