import React, { useState, useEffect } from "react";
import { Theme, useMediaQuery } from "@mui/material";

import {
  ButtonMainContainer,
  DashBoardContainer,
  DashBoardMainContainer,
  MainButton,
  TextButton,
  Title,
  TitleContainer,
} from "./styles";
import { BEBEDERO, DASHBOARD, REGULADOR } from "../../Utils/string";
import getData from "../../API/getData";

interface Measure {
  id: string;
  name: string;
  number: string;
  datetime: string;
  value: number;
}

interface MyData {
  measures: {
    electrificadores: Array<Array<Measure>>;
    baterias: Array<Array<Measure>>;
    paneles: Array<Array<Measure>>;
    bebederos: Array<Array<Measure>>;
    bomba: Array<Measure>;
  };
  message: string;
}

const DashBoard = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(768));

  const [data, setData] = useState<MyData>(null);
  const [selected, setSelected] = useState<Array<Measure>>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const json: any = await getData();
        setData(json.body);
      } catch (error) {
        console.error("Error fetching JSON from Lambda:", error);
      }
    };

    fetchData();
    if (data && !selected) {
      setSelected(data.measures.electrificadores[0]);
    }
  }, []);

  return (
    <DashBoardMainContainer>
      <TitleContainer>
        <Title>{DASHBOARD}</Title>
        <Title>
          {selected ? selected[0].name + " " + selected[0].number : ""}
        </Title>
      </TitleContainer>
      <DashBoardContainer>
        <ButtonMainContainer>
          <MainButton>
            <TextButton>{REGULADOR}</TextButton>
          </MainButton>
          <MainButton>
            <TextButton>{BEBEDERO}</TextButton>
          </MainButton>
        </ButtonMainContainer>
        <div>
          <table>
            <thead>
              <tr>
                <th>Medida</th>
                <th>Fecha Y Hora</th>
              </tr>
            </thead>
            {selected && (
              <tbody>
                {selected.map((item, index) => (
                  <tr key={index}>
                    <td>{item.value}</td>
                    <td>{item.datetime}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </DashBoardContainer>
    </DashBoardMainContainer>
  );
};

export default DashBoard;
