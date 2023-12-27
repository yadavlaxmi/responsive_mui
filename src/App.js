import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Stack, Typography, Toolbar,  Box, Divider, Drawer, CssBaseline, Card, CardContent } from '@mui/material';



const drawerWidth = 240;
function Webpage(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const menuItems = ["All","William Mapan","Zancan","Obvious","Alkan Avcloglu","Alice Gordon","Ivona Tau","Nancy Burson","Kenny Schachter","Thomas Lin Pedersen","Alexander Reben","Anna Ridler","Anne Spalter","Vera Molnar","Vebjoern Isaksen","Tom White","Sputunikol","Casey Reas","Sofia Crespo","Shizuko Yoshikawa","Roman Verostko","Robble Barrat","Primavera de Filppi","Osinachi","Nicolas Schoffer","Memo Akten","Mariko klingemann ","Marcelo Soria-Rodriguez","Manolo Gamboa Naon","Manfred mohr","Lucas Aguirre","Ksawery Kirklewski","Kjettill golid","Kevin Abosch","John Watkinson&Matt Hall","John Maeda","Jared S Tarbell","Iskra Velitchkova","Herbert W.Franke","Helena Sarin","Harold Cohen","Harm van den Dorpel","Hans Dehlinger","Gotfried Jagar","Alexander Mordvinstev","Gotfried honeggar","Gordon Berger","Geog Nees","Ganbrood","Frieder Nake","Francois Morellet","Espen kluge","Entangled Other Studio","Eko33","Dominikus","Desmond Paul Henry","David Young","Cornelia Sollfrank","charles Csuri"];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <List style={{ flex: 1, backgroundColor: "white" }}>
                <img style={{ marginLeft: "30px" ,width:"90px"}} src="https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/cfa23454-f3a1-44c6-aba3-6193758d5178/kvg_logo.png?format=1500w" alt='no' />
                <Stack direction="row" spacing={1} >


                </Stack>

                {menuItems.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}

            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
        <Box sx={{
            display: 'flex'

        }}>
            <CssBaseline />

           
                
                 <Grid>
                    <Box
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px `},
                    
                }}
            >
                <Toolbar style={{ backgroundColor: "white",marginTop:"20px" }}>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex'} }}>
                        Artist
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex',marginLeft:"15px" } }} >
                        Exhibitions
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex',marginLeft:"15px"} }}>
                        Marketplace
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex',marginLeft:"15px"} }}>
                        KVG Blog
                    </Grid><Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex',marginLeft:"15px"} }}>
                        KVG Collections 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex',marginLeft:"15px" } }}>
                        About

                    </Grid>                      
                     <Grid item xs={12} sm={6} md={3} lg={3} xl={2} sx={{ display: { xs: 'none', sm: 'flex',  marginLeft:"950px"} }}>
                        cart(0)
                    </Grid>
                     
                </Toolbar>
        
            </Box>
            </Grid>
          




            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth } , flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>



            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: {
                  sm: `calc(100% - ${drawerWidth}px)`, 
                }
              }}
              
            >
                <Toolbar />
                

                <Grid container spacing={2} style={{ marginTop: "30px" }}>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1685959916202-PVR22XYD5S8I93HZBR0F/coral41.png?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}
                                    />
                                    <Grid container item justifyContent="center"> 
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>

                                </Grid>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1685959916202-PVR22XYD5S8I93HZBR0F/coral41.png?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}
                                    />
                                      <Grid container item justifyContent="center">
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1685959599772-9MYVBUZJAUA1AEYCBHTY/flower21.jpeg?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}
                                    />
                                      <Grid container item justifyContent="center">
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>

                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginTop: "30px" }}>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1685959502329-TMFNH115PF0F2PWLRH9Z/flower11.jpeg?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}

                                    />
                                </Grid>
                                <Grid container item justifyContent="center"> 
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1685959117256-T1GRMW1U1ZF50OM4JU9O/coral31.jpeg?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}

                                    />
                                     <Grid container item justifyContent="center"> 
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1685959026792-Q7SZ0OW4A0MFAW0K7OY1/coral21.jpeg?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}

                                    />
                                     <Grid container item justifyContent="center"> 
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>

                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>




                <Grid container spacing={2} style={{ marginTop: "30px" }}>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1685958936533-IAXQM38OJRO4D7EBCWXH/coral11.jpeg?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}

                                    />
                                    </Grid>
                                    <Grid container item justifyContent="center"> 
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>
                            </CardContent>
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1675030607164-HEL8EC3JXYV0UJN73MAS/Screenshot+2022-04-13+at+18.00.00.png?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}

                                    />
                                         <Grid container item justifyContent="center">
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card>
                            <CardContent>
                                <Grid container item>
                                    <img
                                        src='https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/1675029502481-XJOCR3EHQ3PVEMP5K9XP/AR.png?format=1000w'
                                        alt='no img'
                                        style={{height:"500px",width:"500px"}}

                                    />
                                    
                                    <Grid container item justifyContent="center"> 
                                        <Typography variant='h4'>Anna Ridler</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box >
        </>
    );
}

export default Webpage;