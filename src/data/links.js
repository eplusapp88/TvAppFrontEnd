import { RiWechatChannelsLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { RiMiniProgramFill } from "react-icons/ri";
import { FaWalking } from "react-icons/fa";
export const links = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    url: "/dashboard",
  },
  {
    name: "Channel",
    icon: <RiWechatChannelsLine />,
    url: "/viewChannel",
  },
  {
    name: "Program",
    icon: <RiMiniProgramFill />,
    url: "/viewProgram",
  },
  {
    name: "Users",
    icon: <FaWalking />,
    subLinks: [
      {
        name: "New User",
        url: "/addUsers",
      },
    ],
  },
];
