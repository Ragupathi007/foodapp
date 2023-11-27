import React from "react";
import "../styles/ordersummary.css";
import {
  Box,
  Card,
  CardBody,
  SimpleGrid,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

const OrderSummary = () => {
  const [itemPrice, setItemPrice] = useState(300);
  const [discount, setDiscount] = useState(30);
  const [deliveryCharge, setDeliveryCharge] = useState(13.5);
  const savedAmount = discount - deliveryCharge;

  return (
    <div>
      <Stack>
        <Card width={"100%"} height={"auto"}>
          <CardBody textAlign={"start"} className="card_main">
            <Box
              textAlign={"start"}
              fontWeight={"700"}
              fontSize={"20px"}
              letterSpacing={"2px"}
            >
              Order Summary
            </Box>
            <hr />
            <br />
            <SimpleGrid
              className="main_grid"
              columns={2}
              columnGap={"100px"}
              rowGap={"auto"}
              textAlign={"start"}
            >
              <Box>Price (6 Items)</Box>
              <Box fontWeight={"bold"}>
                <h2>&#8377; {itemPrice}</h2>
              </Box>
              <Box>Discount (10%)</Box>
              <Box fontWeight={"bold"}>
                <h2> - &#8377; {discount}</h2>
              </Box>
              <Box>Delivery Charges (5%)</Box>
              <Box fontWeight={"bold"}>
                <h2>&#8377; {deliveryCharge}</h2>
              </Box>
              <br />
            </SimpleGrid>

            <p> you'ill save &#8377; {savedAmount} on this order 🎉</p>
            <hr />
            <br />
            <SimpleGrid
              className="total_amt_grid"
              columnGap={"50px"}
              columns={2}
              textAlign={"start"}
            >
              <Box>Total Amount</Box>
              <Box>
                <h2>&#8377; {itemPrice - discount + deliveryCharge}</h2>
              </Box>
              <br />
            </SimpleGrid>
            <hr />
            <br />
            <center>
              <Button
                width={"100%"}
                className="order_placing_button"
                variant={""}
              >
                Place Order
              </Button>
            </center>
          </CardBody>
        </Card>
      </Stack>
    </div>
  );
};

export default OrderSummary;
