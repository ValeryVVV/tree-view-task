import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from 'components/Header/Header';
import MainFeaturedPost from 'components/MainFeaturedPost/MainFeaturedPost';
import { Box } from '@mui/material';
import TreeCard from 'components/TreeCard/TreeCard';


const mainFeaturedPost = {
  title: 'Title of react tree view',
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
};


const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="React Tree View" />
        <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TreeCard />
            </Box>
        </main>
      </Container>
    </ThemeProvider>
  );
}