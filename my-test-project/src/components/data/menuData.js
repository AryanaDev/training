import {RiAdminFill} from "react-icons/ri";
import {MdManageAccounts, MdOutlineViewModule, MdReport} from "react-icons/md";
import {FaQuestionCircle} from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
export const menuData = [
    {
        title:"Admin Dashboard",
        icon: <RiAdminFill/>
    },
    {
        title:"Modules",
        icon:  <MdOutlineViewModule/>
    },
    {
        title:"Manage Account",
        icon: <MdManageAccounts/>
    },
    {
        title:"FAQ",
        icon: <FaQuestionCircle />
    },
    {
        icon: <MdReport />,
        title:"Report",
        is_parent: true,
        children: [
            {
                title:"test",
            },
            {
                title:"test",
            },
        ],
    },
    {
        icon: <FaUsers />,
        title:"Users",
        is_parent: true,
        children : [
            {
                title:"test1",
            },
            {
                title:"test2",
            },
        ],
    },
    {
        title:"Month",
        icon: <MdCalendarMonth />
    },
    {
        title:"Test",
        icon: <FaNoteSticky />
    },
]

