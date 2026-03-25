import { useState } from 'react';
import ProductList from './pages/ProductList';
import { getTheme } from './theme/theme';
import CartDrawer from './components/CartDrawer';
import Header from "./components/Header";
import { ThemeProvider, CssBaseline, Button, createTheme } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header
        onCartOpen={() => setOpen(true)}
        toggleTheme={() => setDarkMode(!darkMode)}
      />

      <ProductList openCart={() => setOpen(true)} />

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </ThemeProvider>
    </>
  )
}

export default App
