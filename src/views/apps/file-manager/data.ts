import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";

export const tabs = [
  {
    icon: "home",
    text: "Home",
  },
  {
    icon: "file-text",
    text: "Documents",
  },
  {
    icon: "download",
    text: "Download",
  },
  {
    icon: "music",
    text: "Music",
  },
  {
    icon: "image",
    text: "Pictures",
  },
  {
    icon: "video",
    text: "Video",
  },
  {
    icon: "clock",
    text: "Recent",
  },
  {
    icon: "trash",
    text: "Bin",
  },
];

export const filesData = [
  {
    title: "Document",
    text: "Using 25% of storage",
    space: 3,
    subtxt: "400 Files",
  },
  {
    title: "Music",
    text: "Using 16% of storage",
    space: 1.5,
    subtxt: "212 Files",
  },
  {
    title: "Apps",
    text: "Using 50% of storage",
    space: 39,
    subtxt: "25 Apps",
  },
  {
    title: "Videos",
    text: "Using 8% of storage",
    space: 4,
    subtxt: "9 Videos",
  },
];

export const recentFilesData = [
  {
    fileName: "App Design & Development",
    lastModifiedAt: "Jan 03, 2020",
    lastModifiedBy: "Andrew",
    fileSize: 128,
    owner: "Danielle Thompson",
    members: [avatar1, avatar2, avatar3, avatar4],
  },
  {
    fileName: "Hyper-sketch-design.zip",
    lastModifiedAt: "Feb 13, 2020",
    lastModifiedBy: "Coderthemes",
    fileSize: 521,
    owner: "Coder Themes",
    members: [avatar4, avatar8, avatar6],
  },
  {
    fileName: "Annualreport.pdf",
    lastModifiedAt: "Dec 18, 2019",
    lastModifiedBy: "Alejandro",
    fileSize: 7.2,
    owner: "Gary Coley",
    members: [avatar5, avatar7, avatar4],
  },
  {
    fileName: "Wireframes",
    lastModifiedAt: "Nov 25, 2019",
    lastModifiedBy: "Dunkle",
    fileSize: 54.2,
    owner: "Jasper Rigg",
    members: [avatar6, avatar4, avatar7, avatar5],
  },
  {
    fileName: "Documentation.docs",
    lastModifiedAt: "Feb 9, 2020",
    lastModifiedBy: "Dunkle",
    fileSize: 8.3,
    owner: "Cooper Sharwood",
    members: [avatar5, avatar8],
  },
];
