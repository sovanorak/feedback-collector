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
import { MessageSquareMoreIcon, PlusCircle, Reply } from "lucide-react";
import { typeEmojiMap } from "./map-emoji";

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
              <p>
                <span className="font-semibold text-gray-600">ID:</span>{" "}
                {(selectedRow as any).id}
              </p>
              <p>
                <span className="font-semibold text-gray-600">Email:</span>{" "}
                {(selectedRow as any).email}
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <span className="font-semibold text-gray-600">Status: </span>
                  <Badge className={bgColor}>{text}</Badge>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Rating-Score:
                  </span>{" "}
                  {(selectedRow as any).score}
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    Feedback-Type:
                  </span>
                  {typeEmojiMap[(selectedRow as any).feedbackType]}
                </div>
              </div>
              <div className="mt-6">
                <span className="flex items-center gap-2 font-semibold text-gray-600">
                  <MessageSquareMoreIcon size={18} />
                  Feedback
                </span>
                <Textarea
                  readOnly
                  defaultValue={(selectedRow as any).feedback}
                />
              </div>
            </div>
          ) : (
            <p>No row selected.</p>
          )}
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <div>
            <span className="flex items-center gap-2 font-semibold text-gray-600">
              <Reply />
              Sending Reply
            </span>
            <Textarea />
          </div>
          <Button>Send</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
