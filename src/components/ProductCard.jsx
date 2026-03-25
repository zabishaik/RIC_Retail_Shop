import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ProductCard({
  title,
  price,
  imageUrl,
  rating,
  onAddToCart,
}) {
  return (
    <Card sx={{ p: 2, borderRadius: 3 }}>
      <img
        src={imageUrl || "https://via.placeholder.com/150"}
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography>${price}</Typography>
        <Typography>⭐ {rating}</Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={onAddToCart}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}