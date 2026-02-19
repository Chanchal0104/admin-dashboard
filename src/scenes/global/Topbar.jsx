import { Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationOutLinedIcon from "@mui/icons-material/NotificationOutlined";
import SettigsOutLinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const styleBox = styled(Box)``;
const Topbar = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return <Box display="flex" justifyContent="space-between" p={2}>
       <Box 
       display = "flex"
       backgroundColor = {colors.primary[400]}
       borderRadius="3px">
        <InputBase sx = {{ ml: 2, flex: 1}} placeholder="Search"/>
        <IconButton type="button" sx={{p: 1}}>
            <SearchIcon/>
        </IconButton>
        </Box> 
        {/*ICONS*/}
        <Box display="flex">
            <IconButton onClick = {colorMode.toggleColorMode}>
               {theme.palette.mode === 'dark' ? (
                    <DarkModeOutLinedIcon />
               )}
                
            </IconButton>
            <IconButton>
                 <NotificationOutLinedIcon />
            </IconButton>
            <IconButton>
                <SettigsOutLinedIcon />
            </IconButton>
            <IconButton>
                <PersonOutLinedIcon />
            </IconButton>
        </Box>   
    </Box>
}
export default Topbar;
