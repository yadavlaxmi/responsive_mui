import { Grid, Typography, useTheme, Box } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} marginTop={5} sx={{ border: "red solid 1px", height: "150px" }}>
        <Grid container alignItems="center">
          <Grid item>
            <Box sx={{ border: "solid red 1px" }}>
              <img
                src="https://images.squarespace-cdn.com/content/v1/63a2ce0664014f2264b055d4/cfa23454-f3a1-44c6-aba3-6193758d5178/kvg_logo.png"
                height={100}
                width={100}
                alt="Logo"
              />
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={6} lg={11} sx={{ display: "flex", border: "solid red 1px", marginLeft: "50px" }}>
            <Grid container direction="row" spacing={1}>
              <Typography sx={{ marginLeft: "10px" , fontSize: theme.breakpoints.down("sm") ? "12px" : undefined }}>
                Artists
              </Typography>
              <Typography sx={{ marginLeft: "10px",fontSize: theme.breakpoints.down("sm") ? "12px" : undefined  }} >
                Exhibitions
              </Typography>
              <Typography sx={{ marginLeft: "10px" ,fontSize: theme.breakpoints.down("sm") ? "12px" : undefined }}>
                Marketplace
              </Typography>
              <Typography sx={{ marginLeft: "10px",fontSize: theme.breakpoints.down("sm") ? "12px" : undefined  }} >
                KVG Blog
              </Typography>
              <Typography sx={{ marginLeft: "10px",fontSize: theme.breakpoints.down("sm") ? "12px" : undefined  }} >
                KVG Collections
              </Typography>
              <Typography sx={{ marginLeft: "10px" ,fontSize: theme.breakpoints.down("sm") ? "12px" : undefined }} >
                About
              </Typography>
              <Typography sx={{ marginLeft: "auto",fontSize: theme.breakpoints.down("sm") ? "12px" : undefined  }} >
                cart(0)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
