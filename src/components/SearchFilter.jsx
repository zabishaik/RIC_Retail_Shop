import { TextField, MenuItem, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
}) {
    const theme = useTheme();
    const [input, setInput] = useState(search);
    
    useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(input);
    }, 500);
 
    return () => clearTimeout(handler); 
  }, [input]);

  return (
    <Box sx={{ display: "flex", gap: "16px", margin: "20px 20px", padding: "16px", border: "2px solid ${theme.palette.divider}", borderRadius: "8px", backgroundColor: theme.palette.mode === "dark" ? "#2a2a2a" : "#f5f5f5", }}>
      <TextField
        label="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        variant="outlined"
        sx={{ flex: 1, maxWidth: "500px" }}
      />

      <TextField
        select
        label="Category"
        variant="outlined"
        sx={{ flex: 1, maxWidth: "200px" }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Shoes">Shoes</MenuItem>
        <MenuItem value="Clothing">Clothing</MenuItem>
        <MenuItem value="Accessories">Accessories</MenuItem>
      </TextField>
    </Box>
  );
}
export default SearchFilter;