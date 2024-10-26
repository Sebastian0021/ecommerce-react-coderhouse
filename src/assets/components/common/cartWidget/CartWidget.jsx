import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <div>
      <Badge badgeContent={getTotalItems()} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
