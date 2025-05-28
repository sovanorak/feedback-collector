import { CardListing } from "./card-listing";
import { RecentFeedbackTable } from "./components/table/feedback-table";

export function DashboardModule() {
  return (
    <div className="p-6 flex flex-col gap-6 w-full min-h-screen">
      {/* Card Container */}
      <CardListing />
      {/* Chart and Table */}
      <div className="grid grid-cols-1  gap-6">
        {/* Chart */}
        {/* <div>
          <span>Chart</span>
        </div> */}
        {/* Recent Feedback Table */}
        <div className="w-full">
          <RecentFeedbackTable />
        </div>
      </div>
    </div>
  );
}
