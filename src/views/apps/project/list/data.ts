import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";
import avatar9 from "@/assets/images/users/avatar-9.jpg";
import avatar10 from "@/assets/images/users/avatar-10.jpg";

const assignees = [
  {
    image: avatar1,
  },
  {
    image: avatar2,
  },
  {
    image: avatar3,
  },
  {
    image: avatar4,
  },
  {
    image: avatar5,
  },
  {
    image: avatar6,
  },
  {
    image: avatar7,
  },
  {
    image: avatar8,
  },
  {
    image: avatar9,
  },
  {
    image: avatar10,
  },
  {
    image: null,
  },
];

export const projectList = [
  {
    label: "Web Design",
    status: "Complated",
    title: "Landing page Design",
    subtxt:
      "If several languages coalesce, the grammar of the resulting language is more regular.",
    assignees: [assignees[1], assignees[2], assignees[10]],
    date: "15 Dec",
    chat: 56,
    comments: 224,
    progress: 66,
    progressClass: "bg-success dark:bg-success w-2/3",
  },
  {
    label: "Android",
    status: "Pending",
    title: "App Design and Develop",
    subtxt:
      "To achieve this, it would be necessary to have uniform grammar and more common words.",
    assignees: [
      assignees[3],
      assignees[4],
      assignees[5],
      assignees[6],
      assignees[10],
    ],
    date: "28 nov",
    chat: 62,
    comments: 196,
    progress: 33,
    progressClass: "bg-warning w-1/3",
  },
  {
    label: "Web Design",
    status: "Frontend Complited",
    title: "New Admin Design",
    subtxt:
      "If several languages coalesce, the grammar of the resulting language is more regular.",
    assignees: [assignees[8], assignees[9], assignees[0], assignees[10]],
    date: "19 Nov",
    chat: 69,
    comments: 102,
    progress: 50,
    progressClass: "bg-success w-1/2",
  },
  {
    label: "Android",
    status: "Pending",
    title: "Custom Software Development",
    subtxt:
      "Their separate existence is a myth. For science, music, sport, etc uses the vocabulary.",
    assignees: [assignees[1], assignees[7], assignees[8]],
    date: "02 Nov",
    chat: 72,
    comments: 184,
    progress: 25,
    progressClass: "bg-warning/80 w-1/4",
  },
  {
    label: "Web Design",
    status: "Complated",
    title: "Brand logo design",
    subtxt:
      "Everyone realizes why a new common language refuse to pay expensive translators.",
    assignees: [assignees[5]],
    date: "19 Nov",
    chat: 69,
    comments: 102,
    progress: 75,
    progressClass: "bg-danger w-3/4",
  },
  {
    label: "Web Design",
    status: "Complated",
    title: "Website Redesign",
    subtxt:
      "The languages only differ in their grammar pronunciation and their most common words.",
    assignees: [assignees[2],assignees[8]],
    date: "19 Nov",
    chat: 69,
    comments: 102,
    progress: 50,
    progressClass: "bg-info w-1/2",
  },
]