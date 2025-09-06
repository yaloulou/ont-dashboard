import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";
import avatar9 from "@/assets/images/users/avatar-9.jpg";

export const cardData = [
  {
    color: "primary",
    icon: "mgc_tag_line",
    number: "3947",
    text: "Total Tickets",
  },
  {
    color: "yellow",
    icon: "mgc_alarm_2_line",
    number: "624",
    text: "Pending Tickets",
  },
  {
    color: "green",
    icon: "mgc_check_line",
    number: "3195",
    text: "Closed Tickets",
  },
  {
    color: "red",
    icon: "mgc_delete_line",
    number: "128",
    text: "Deleted Tickets",
  },
];

const assignees = [
  {
    name: "Lindsay Walton",
    image: avatar9,
  },
  {
    name: "Jhon Maryo",
    image: avatar2,
  },
  {
    name: "Jerry Geiger",
    image: avatar3,
  },
  {
    name: "Adam Thomas",
    image: avatar4,
  },
  {
    name: "Sara Lewis",
    image: avatar5,
  },
  {
    name: "Myrtle Johnson",
    image: avatar6,
  },
  {
    name: "Bryan Collier",
    image: avatar7,
  },
  {
    name: "Joshua Moody",
    image: avatar8,
  },
  {
    name: "John Clune",
    image: avatar9,
  },
];

export const tableHead = [
  "ID",
  "Requested By",
  "Subject",
  "Assignee",
  "Priority",
  "Status",
  "Created Date",
  "Due Date",
  "Action",
];

export const tableData = [
  {
    id: 1020,
    image: assignees[0],
    name: "Lindsay Walton",
    sub: "A new rating has been received",
    assignee: assignees[0],
    priority: "Medium",
    status: "Closed",
    createdDate: "13/08/2011",
    dueDate: "30/08/2013",
  },
  {
    id: 1254,
    image: assignees[1],
    name: "Jhon Maryo",
    sub: "Your application has been received!",
    assignee: assignees[1],
    priority: "High",
    status: "Closed",
    createdDate: "01/04/2017",
    dueDate: "21/05/2017",
  },
  {
    id: 1256,
    image: assignees[2],
    name: "Jerry Geiger",
    sub: "Support for theme",
    assignee: assignees[2],
    priority: "Low",
    status: "Open",
    createdDate: "28/07/2020",
    dueDate: "28/07/2020",
  },
  {
    id: 1352,
    image: assignees[3],
    name: "Adam Thomas",
    sub: "Question regarding your Tailwind Theme",
    assignee: assignees[3],
    priority: "High",
    status: "Open",
    createdDate: "01/04/2017",
    dueDate: "21/05/2017",
  },
  {
    id: 2251,
    image: assignees[4],
    name: "Sara Lewis",
    sub: "Verify your new email address!",
    assignee: assignees[4],
    priority: "High",
    status: "Open",
    createdDate: "20/04/2008",
    dueDate: "20/04/2008",
  },
  {
    id: 2542,
    image: assignees[5],
    name: "Myrtle Johnson",
    sub: "New submission on your website",
    assignee: assignees[5],
    priority: "Medium",
    status: "Closed",
    createdDate: "20/04/2017",
    dueDate: "25/04/2017",
  },
  {
    id: 3020,
    image: assignees[6],
    name: "Bryan Collier",
    sub: "Verify your new email address!",
    assignee: assignees[6],
    priority: "High",
    status: "Open",
    createdDate: "02/06/2018",
    dueDate: "21/06/2018",
  },
  {
    id: 3562,
    image: assignees[7],
    name: "Joshua Moody",
    sub: "Security alert for my account",
    assignee: assignees[7],
    priority: "Low",
    status: "Open",
    createdDate: "28/07/2020",
    dueDate: "03/08/2020",
  },
  {
    id: 3652,
    image: assignees[8],
    name: "John Clune",
    sub: "Item Support Message sent",
    assignee: assignees[8],
    priority: "Medium",
    status: "Closed",
    createdDate: "26/10/2021",
    dueDate: "30/10/2021",
  },
];
