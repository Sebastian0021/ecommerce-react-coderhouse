import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={1} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
