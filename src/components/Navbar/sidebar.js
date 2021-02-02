import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { GrConfigure } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = [
    {
        title: "Ver Perfil",
        path: "/view-profile",
        icon: <BiUserCircle />,
        cName: "item-sidebar",
    },
    {
        title: "Configurações",
        path: "/config-profile",
        icon: <GrConfigure />,
        cName: "item-sidebar",
    },
    {
        title: "Logout",
        path: "/",
        icon: <AiOutlineLogout />,
        cName: "item-sidebar",
    },
];

export default Sidebar;
