import { Drawer, Typography, IconButton, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartDrawer({ open, onClose }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 300, padding: 20 }}>
        <Typography variant="h6">Cart</Typography>

        {items.map((item) => (
          <Box key={item.id} sx={{ marginBottom: 2, paddingBottom: 2, borderBottom: "1px solid #eee" }}>
            <Typography variant="subtitle1">{item.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              ${item.price}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginY: 1 }}>
              <IconButton
                size="small"
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                disabled={item.quantity <= 1}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <Typography sx={{ minWidth: 30, textAlign: "center" }}>
                {item.quantity}
              </Typography>

              <IconButton
                size="small"
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
              >
                <AddIcon fontSize="small" />
              </IconButton>

              <IconButton onClick={() => dispatch(removeFromCart(item.id))} sx={{ marginLeft: "auto" }}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>

            <Typography variant="body2">
              Subtotal: ${(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Box>
        ))}

        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Total: ${total.toFixed(2)}
        </Typography>

        <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
          Checkout
        </Button>
      </div>
    </Drawer>
  );
}
export default CartDrawer;