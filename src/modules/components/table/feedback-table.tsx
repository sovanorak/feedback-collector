import { columns, Feedback } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Feedback[]> {
  return [
    {
      id: "1",
      feedback: "This product is awesome",
      feedbackType: "positive",
      score: 5,
      status: "read",
      email: "jonhdoe@example.com",
    },
    {
      id: "2",
      feedback: "I don't like this product, it's too expensive",
      feedbackType: "negative",
      score: 1,
      status: "read",
      email: "fakeUser3@example.com",
    },
    {
      id: "3",
      feedback: "Awesome product",
      feedbackType: "neutral",
      score: 3,
      status: "closed",
      email: "david@example.com",
    },
    {
      id: "4",
      feedback: "Very good product, I like the user interface",
      feedbackType: "positive",
      score: 5,
      status: "pending",
      email: "ronaldo@example.com",
    },
  ];
}

export async function RecentFeedbackTable() {
  const data = await getData();
  return (
    <div className="w-full mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
