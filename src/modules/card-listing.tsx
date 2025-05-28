import {
  Users,
  MessageSquarePlusIcon,
  MessageSquareHeartIcon,
  MessageSquareOffIcon,
  MessageSquareReplyIcon,
} from "lucide-react";
import { CardItem } from "./components/card";

export function CardListing() {
  // Summarize key metrics at a glance:

  // Total Feedback Received

  // Feedback Today / This Week / This Month

  // Average Feedback Score (if using ratings)

  // Positive vs Negative Feedback Ratio

  // Number of Respondents

  const data = [
    {
      title: "Total Feedback Received",
      value: 100,
      icon: MessageSquarePlusIcon,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Positive Feedback",
      value: 10,
      icon: MessageSquareHeartIcon,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Negative Feedback",
      value: 20,
      icon: MessageSquareOffIcon,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Respondents",
      value: 30,
      icon: MessageSquareReplyIcon,
      description: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item) => (
        <CardItem
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          description={item.description}
        />
      ))}
    </div>
  );
}
