import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/Description';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function HeaderTabs() {
  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: '#0d47a1' }}>
      <Tabs>
      <Tab label="Home" sx={{ color: 'white', fontWeight: 'bold' }} />
        <Tab label="About" sx={{ color: 'white', fontWeight: 'bold' }} />
        <Tab label="Publish Internship" sx={{ color: 'white', fontWeight: 'bold' }} />
        <Tab label="Publish Competition" sx={{ color: 'white', fontWeight: 'bold' }} />
        <Tab label="Statistics" sx={{ color: 'white', fontWeight: 'bold' }} />
      </Tabs>
    </AppBar>
  );
}

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <HeaderTabs />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Post Job
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Job Title"
                  name="Job Title"
                  required
                  fullWidth
                  id="Job Title"
                  label="Job Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Duration"
                  label="Duration"
                  name="Duration"
                  autoComplete="Duration"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Company Name"
                  label="Company Name"
                  name="Company Name"
                  autoComplete="Company Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Company URL"
                  label="Company URL"
                  name="Company URL"
                  autoComplete="url"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Application link 1"
                  label="Application link 1"
                  name="Application link 1"
                  autoComplete="url"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Application link 2"
                  label="Application link 2"
                  name="Application link 2"
                  autoComplete="url"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Job Description"
                  label="Job Description"
                  name="Job Description"
                  autoComplete="text"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color='primary' />}
                  label="*Required Fields"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </ThemeProvider>
  );
}
