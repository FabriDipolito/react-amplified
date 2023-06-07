import React, { useState, useEffect } from "react";
import { Theme, useMediaQuery } from "@mui/material";

import {
  ButtonContainer,
  ButtonMainContainer,
  ButtonTemplate,
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

  const onClickRightRegulator = () => {
    let i = regulatorCounter;
    if (regulatorCounter === data.measures.electrificadores.length - 1) {
      setRegulatorCounter(0);
      i = 0;
    } else {
      setRegulatorCounter(i + 1);
      i++;
    }
    setSelected(data.measures.electrificadores[i]);
  };

  const onClickLeftRegulator = () => {
    let i = regulatorCounter;
    if (regulatorCounter === 0) {
      setRegulatorCounter(data.measures.electrificadores.length - 1);
      i = data.measures.electrificadores.length - 1;
    } else {
      setRegulatorCounter(i - 1);
      i--;
    }
    setSelected(data.measures.electrificadores[i]);
  };

  const onClickRightBebedor = () => {
    let i = bebedorCounter;
    if (bebedorCounter === data.measures.bebederos.length - 1)
      setBebedorCounter(0);
    else setBebedorCounter((i += 1));
    setSelected(data.measures.bebederos[bebedorCounter]);
  };

  const onClickLeftBebedor = () => {
    let i = bebedorCounter;
    if (bebedorCounter === 0)
      setBebedorCounter(data.measures.bebederos.length - 1);
    else setBebedorCounter((i -= 1));
    setSelected(data.measures.bebederos[bebedorCounter]);
  };

  return (
    <DashBoardMainContainer>
      <TitleContainer>
        <Title>{DASHBOARD}</Title>
        <Title>
          {selected ? selected[0].name + " " + selected[0].number : ""}
        </Title>
        <ButtonContainer>
          <ButtonTemplate
            onClick={() =>
              setSelected(data.measures.electrificadores[regulatorCounter])
            }
          >
            Electrificador
          </ButtonTemplate>
          <ButtonTemplate
            onClick={() =>
              setSelected(data.measures.baterias[regulatorCounter])
            }
          >
            Bateria
          </ButtonTemplate>
          <ButtonTemplate
            onClick={() => setSelected(data.measures.paneles[regulatorCounter])}
          >
            Panel
          </ButtonTemplate>
        </ButtonContainer>
      </TitleContainer>
      <DashBoardContainer>
        <ButtonMainContainer>
          <MainButton>
            <LeftButton onClick={() => onClickLeftRegulator()}></LeftButton>
            <TextButton>{REGULADOR}</TextButton>
            <RightButton onClick={() => onClickRightRegulator()}></RightButton>
          </MainButton>
          <MainButton>
            <LeftButton onClick={() => onClickLeftBebedor()}></LeftButton>
            <TextButton>{BEBEDERO}</TextButton>
            <RightButton onClick={() => onClickRightBebedor()}></RightButton>
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
