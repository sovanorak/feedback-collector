export const statusMap: {
  [key: string]: {
    text: string;
    bgColor: string;
  };
} = {
  read: { text: "Read", bgColor: "bg-green-400" },
  closed: { text: "Closed", bgColor: "bg-red-400" },
  pending: { text: "Pending", bgColor: "bg-yellow-400" },
};
