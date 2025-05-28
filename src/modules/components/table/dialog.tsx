import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { statusMap } from "./map-status";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Megaphone,
  MessageSquareMoreIcon,
  MessagesSquareIcon,
  PlusCircle,
  Reply,
  ScanEye,
  SendHorizontalIcon,
} from "lucide-react";
import { typeEmojiMap } from "./map-emoji";
import { Card } from "@/components/ui/card";

type DialogTableProps = {
  selectedRow: any;
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
};

export function DialogTable({
  selectedRow,
  isDialogOpen,
  setIsDialogOpen,
}: DialogTableProps) {
  const { text, bgColor } =
    selectedRow && statusMap[selectedRow.status]
      ? statusMap[selectedRow.status]
      : { text: "Unknown", bgColor: "bg-gray-500 text-white" };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>View Details</DialogTitle>
          <DialogDescription>
            Here are the details of the selected row.
          </DialogDescription>
        </DialogHeader>
        <div>
          {selectedRow ? (
            <div className="space-y-4">
              <div>
                <span className="flex items-center gap-2 font-semibold text-gray-600 mb-1">
                  <MessageSquareMoreIcon size={18} />
                  Feedback
                </span>
                <p className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md shadow-none">
                  {(selectedRow as any).feedback}
                </p>
              </div>
            </div>
          ) : (
            <p>No row selected.</p>
          )}
        </div>

        <div className="flex flex-col gap-8 mt-4">
          <div>
            <span className="flex items-center gap-2 font-semibold text-gray-600 mb-1">
              <Reply />
              Sending Reply
            </span>
            <Textarea />
          </div>
          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300
            hover:-translate-y-1 py-6
            "
          >
            <SendHorizontalIcon />
            Send Reply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
