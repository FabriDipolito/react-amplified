import React, { useState, useEffect } from "react";
import { Theme, useMediaQuery } from "@mui/material";

import {
  ButtonMainContainer,
  DashBoardContainer,
  DashBoardMainContainer,
  LeftButton,
  MainButton,
  RightButton,
  Table,
  TBody,
  TD,
  TextButton,
  TH,
  THead,
  Title,
  TitleContainer,
} from "./styles";
import { BEBEDERO, DASHBOARD, NO_DATOS, REGULADOR } from "../../Utils/string";
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

  const [regulatorCounter, setRegulatorCounter] = useState(0);
  const [bebedorCounter, setBebedorCounter] = useState(0);

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

  const onClickRight = (
    actual: number,
    setActual: React.Dispatch<React.SetStateAction<number>>,
    lengthArray: number,
    regulatorType: boolean,
  ) => {
    if (actual === lengthArray - 1) setActual(0);
    else setActual((actual += 1));
    if (regulatorType)
      setSelected(data.measures.electrificadores[regulatorCounter]);
    else setSelected(data.measures.bebederos[bebedorCounter]);
  };

  const onClickLeft = (
    actual: number,
    setActual: React.Dispatch<React.SetStateAction<number>>,
    lengthArray: number,
    regulatorType: boolean,
  ) => {
    if (actual === 0) setActual(lengthArray - 1);
    else setActual((actual -= 1));
    if (regulatorType)
      setSelected(data.measures.electrificadores[regulatorCounter]);
    else setSelected(data.measures.bebederos[bebedorCounter]);
  };

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
          <MainButton
            // onClick={() =>
            //   setSelected(data.measures.electrificadores[regulatorCounter])
            //   onClickRight(
            //     regulatorCounter,
            //     setRegulatorCounter,
            //     data.measures.electrificadores.length,
            //     regulatorType,
            //   )
            // }
          >
            <LeftButton></LeftButton>
            <TextButton>{REGULADOR}</TextButton>
            <RightButton></RightButton>
          </MainButton>
          <MainButton
            onClick={() => setSelected(data.measures.bebederos[bebedorCounter])}
          >
            <TextButton>{BEBEDERO}</TextButton>
          </MainButton>
        </ButtonMainContainer>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
          }}
        >
          <Table>
            <THead>
              <tr>
                <TH>Medida</TH>
                <TH>Fecha Y Hora</TH>
              </tr>
            </THead>
            <TBody>
              {selected ? (
                selected.map((item, index) => (
                  <tr key={index}>
                    <TD>{item.value}</TD>
                    <TD>{item.datetime}</TD>
                  </tr>
                ))
              ) : (
                <tr>
                  <TD>{NO_DATOS}</TD>
                  <TD>{NO_DATOS}</TD>
                </tr>
              )}
            </TBody>
          </Table>
        </div>
      </DashBoardContainer>
    </DashBoardMainContainer>
  );
};

export default DashBoard;
