import { useEffect, useState } from "react";
import { Grid, Pagination, Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";
import { getProducts } from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import CartDrawer from "../components/CartDrawer";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true)
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProducts = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setCartOpen(true);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <Grid container spacing={2}>
        {paginatedProducts.map((p) => (
          <Grid item key={p.id}>
            <ProductCard
              {...p}
               onAddToCart={() => handleAddToCart(p)}
            />
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default ProductList;