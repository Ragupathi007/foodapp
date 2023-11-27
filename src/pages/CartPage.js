import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import OrderSummary from "../components/orderSummary";
import CartLayout from "../components/cartLayout";

const CartPage = () => {
  return (
    <div>
      <Heading> Cart Page</Heading>

      <br />
      <SimpleGrid width={"100%"} columns={2}>
        <Box>
          <CartLayout />
          <CartLayout />
          <CartLayout />
          <CartLayout />
          <CartLayout />
        </Box>
        <Box>
          <OrderSummary />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default CartPage;
