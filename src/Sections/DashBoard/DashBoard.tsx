import React, { useState, useEffect } from "react";
import { Theme, useMediaQuery } from "@mui/material";

import { DashBoardContainer, Title } from "./styles";
import { DASHBOARD } from "../../Utils/string";
import getData from "../../API/getData";

const DashBoard = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(768));

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json = await getData();
        console.log(json);
        //setJsonData(json);
      } catch (error) {
        console.error("Error fetching JSON from Lambda:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashBoardContainer>
      <Title>{DASHBOARD}</Title>
    </DashBoardContainer>
  );
};

export default DashBoard;
