import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutLinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutLinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutLinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutLinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutLinedIcon from "@mui/icons-material/BarChartOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Sidebar = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return(
        <Box
            sx = {{
                "& .pro-sidebar-inner":{
                    background: `${colors.primary[400]} !important` 
                },
                "& .pro-sidebar-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active":{
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
      <Menu iconShape="square">

        <MenuItem
          active={selected === "Dashboard"}
          icon={<HomeOutLinedIcon />}
          onClick={() => setSelected("Dashboard")}
        >
          <Typography>Dashboard</Typography>
          <Link to="/" />
        </MenuItem>

      </Menu>
    </ProSidebar>

        </Box>
    )
 }
export default Sidebar;
