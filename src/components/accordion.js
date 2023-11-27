import React from "react";
import "../styles/accordian.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";

function AccordionArea() {
  return (
    <div>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                className="Acc_title_box"
                fontWeight={"300"}
                as="span"
                flex="1"
                textAlign="left"
              >
                Recommended
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pt={3} pb={0} container={"fluid"}>
            <Grid className="parent" templateColumns="50% 50%">
              {/* grid item 1 -- food content area components  */}
              <div className="acc_food_content_area">
                <div className="acc_food_text">
                  <h1>Bedmi Poori(2pcs)(served with Subzi and Pickle)</h1>
                  <h1>&#8377; 70</h1>
                  <p>
                    Medium Spicy | Comes with Sabzi and Pickle | Serves 1 |
                    Crispy , oil free and fresh
                  </p>
                </div>
              </div>
              {/* grid item 2 -- food image and add button component  */}
              <div className="acc_food_image_area">
                <Image
                  boxSize="160px"
                  w={"300px"}
                  borderRadius={"10px"}
                  objectFit="fit"
                  src="https://th.bing.com/th/id/OIP.flbNVRz5bmJcQ04qVxtEmQHaHa?rs=1&pid=ImgDetMain"
                  alt="Dan Abramov"
                />
                <Button color={"orange"} fontSize={"20px"}>
                  Add
                </Button>
              </div>
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionArea;
