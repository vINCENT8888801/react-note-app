import React from "react";
import MyAppBar from "../components/AppBar";
import { NavLink, Outlet } from "react-router-dom";


const Layout = () => {

    return (
        <>
            <MyAppBar/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="javascript">Javascript</NavLink>
            <NavLink to="react">React</NavLink>
            <Outlet />
        </>
        

        
        // <ThemeProvider theme={defaultTheme}>
        //     <Box>
        //         <ScrollRestoration />
        //         <MuiAppBar sx={{
        //             display: "flex"
        //         }}>
        //             <Toolbar
        //                 sx={{
        //                     pr: '24px', // keep right padding when drawer closed
        //                 }}
        //             >
        //                 <IconButton
        //                     edge="start"
        //                     color="inherit"
        //                     aria-label="open drawer"
        //                     onClick={toggleDrawer}
        //                     sx={{
        //                         marginRight: '36px',
        //                         ...(open && { display: 'none' }),
        //                     }}
        //                 >
        //                     <MenuIcon />
        //                 </IconButton>
        //                 <Typography
        //                     component="h1"
        //                     variant="h6"
        //                     color="inherit"
        //                     noWrap
        //                     sx={{ flexGrow: 1 }}
        //                 >
        //                     React Note App
        //                 </Typography>
        //                 c

        //                 <IconButton color="inherit">
        //                     <Badge badgeContent={4} color="secondary">
        //                         <NotificationsIcon />
        //                     </Badge>
        //                 </IconButton>
        //             </Toolbar>
        //         </MuiAppBar>
        //         <h2>a</h2>
        //         <Box
        //             component="main"
        //             sx={{
        //                 backgroundColor: (theme) =>
        //                     theme.palette.mode === 'light'
        //                         ? theme.palette.grey[100]
        //                         : theme.palette.grey[900],
        //                 flexGrow: 1,
        //                 height: '100vh',
        //                 overflow: 'auto',
        //             }}
        //         >
        //             <Outlet />
        //         </Box>
        //     </Box>
        // </ThemeProvider>
    );
}

export default Layout;