import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
  Heading,
  Text,
  IconButton,
  Box,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const CartLayout = ({ images }) => {
  // demo values
  const demoFood = {
    foodTitle: "Briyani",
    foodDetails:
      "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with rice, some type of meat (chicken, beef, goat, lamb, prawn, or fish) and spices",
    foodAmt: 218,
    foodQty: " (201 X 2)",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw",
  };

  // demo values end

  const layoutColor = "red";
  const [itemsCount, setItemsCount] = useState(0);
  function incrementItem() {
    setItemsCount(itemsCount + 1);
  }
  function decrementItem() {
    setItemsCount(itemsCount - 1);
  }
  console.log(itemsCount);
  return (
    <div>
      <Card
        borderRadius={"5px"}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          borderRadius={"10%"}
          maxW={{ base: "100%", sm: "250px" }}
          src={demoFood.image}
          alt="Carted_food"
          p={"10px"}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{demoFood.foodTitle}</Heading>
            <Text py="1">{demoFood.foodDetails}</Text>
            <Flex
              width={"140px"}
              justifyContent={"space-between"}
              fontSize={"17px"}
            >
              <Text py="1" fontWeight={"bold"}>
                &#8377;{demoFood.foodAmt}
              </Text>
              <Text py="1">{demoFood.foodQty}</Text>
            </Flex>
          </CardBody>
          <CardFooter
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} gap={"20px"} alignItems={"center"}>
              <IconButton
                backgroundColor={"#FF5100"}
                color={"white"}
                colorScheme="#FF5100"
                aria-label="Search database"
                icon={<MinusIcon />}
                onClick={decrementItem}
              />
              <Text fontSize={"20px"} fontWeight={"bold"}>
                {itemsCount}
              </Text>

              <IconButton
                backgroundColor={"#FF5100"}
                color={"white"}
                aria-label="Search database"
                icon={<AddIcon />}
                onClick={incrementItem}
                colorScheme="#FF5100"
              />
            </Box>
            <Button variant="outline" colorScheme={layoutColor}>
              Remove
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default CartLayout;
