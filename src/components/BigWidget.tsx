import { Box, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Cidade } from '../models/cidade';
import { bigWidget } from '../styles/bigWidget';

const BigWidget = (info: Cidade) => {
  const [weatherInfo] = useState(info);
  const [dia, setDia] = useState('');
  const [hours, setHours] = useState('');
  // const inputEl = useRef('');

  useEffect(() => {
    const hoje = new Date();
    const horas = `${hoje.getHours()}:${hoje.getMinutes()}`;
    const diaDaSemana = hoje.getUTCDay();
    console.log(diaDaSemana);
    switch (diaDaSemana) {
      case 0:
        setDia('Domingo');
        setHours(horas.toString());
        break;
      case 1:
        setDia('Segunda-Feira');
        setHours(horas.toString());
        break;

      case 2:
        setDia('Terça-Feira');
        setHours(horas.toString());
        break;

      case 3:
        setDia('Quarta-Feira');
        setHours(horas.toString());
        break;

      case 4:
        setDia('Quinta-Feira');
        setHours(horas.toString());
        break;

      case 5:
        setDia('Sexta-Feira');
        setHours(horas.toString());
        break;

      case 6:
        setDia('Sábado');
        setHours(horas.toString());
        break;

      default:
        setDia('Não é um dia valido');
        break;
    }
  }, []);

  // const toUpperFirst = (text: any) => {
  //   const words = text.toLowerCase().split(' ');
  //   for (let a = 0; a < words.length; a++) {
  //     const w = words[a];
  //     words[a] = w[0].toUpperCase() + w.slice(1);
  //   }
  //   return words.join(' ');
  // };
  return (
    <Box
      style={bigWidget.box}
      display="flex"
      flexDirection="column"
      p={2}
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          color="#727272"
        >
          <Grid display="flex">
            <Typography fontSize="24px">{dia}</Typography>
          </Grid>
          <Grid display="flex">
            <Typography fontSize="24px">{hours}</Typography>
          </Grid>
        </Grid>
        {/* <Grid>
          <Typography
            fontSize="48px"
            color="#5EA8EC"
          >
            {inputEl}
          </Typography>
        </Grid> */}
        <Grid>
          <Typography
            fontSize="48px"
            color="#5EA8EC"
          >
            {weatherInfo.description}
          </Typography>
        </Grid>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid>
            <Typography fontSize="48px">
              Temperatura:
              {weatherInfo.temperature}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          display="flex"
          alignItems="center"
        >
          <Typography fontSize="20px">
            Vento:
            {' '}
            {weatherInfo.wind}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BigWidget;
