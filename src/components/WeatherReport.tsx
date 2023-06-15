import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Box,
  Button,
  Skeleton,
  CircularProgress,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchRegion } from 'src/styles/searchRegionStyle';
import { weather } from 'src/API/Weather';
import BigWidget from './BigWidget';

const Search = () => {
  const [cards, setCards] = useState(<Grid />);
  const [search, setSearch] = useState(<FontAwesomeIcon icon={faSearch} />);
  const [dados, setDados] = useState({
    city: '',
  });

  const getCity = async () => {
    try {
      setCards(
        <Skeleton
          variant="rectangular"
          width={535}
          height={475}
          sx={{ borderRadius: '15px', boxShadow: '0 0 15px #0000008F' }}
        />
      );
      setSearch(<CircularProgress style={{ color: '#fff', width: '16px', height: '16px', marginTop: '6px' }} />);
      const response = await weather.getWeather(dados.city);
      setCards(<BigWidget {...response} />);
      setSearch(<FontAwesomeIcon icon={faSearch} />);
      return response;
    } catch (err) {
      return setCards(<Grid>Deu não</Grid>);
    }
  };
  const handleClick = () => {
    getCity();
  };

  return (
    <Box style={searchRegion.box} display="flex" justifyContent="center">
      <Grid display="flex" flexDirection="column" justifyContent="center">
        <Grid display="flex" justifyContent="center">
          <Typography style={searchRegion.TitlePage}>
            DIGITE O NOME DA CIDADE
          </Typography>
        </Grid>
        <Grid
          style={{ width: '100%' }}
          display="flex"
          justifyContent="center"
          p={5}
          alignItems="center"
        >
          <input
            style={{
              height: '24px',
              width: '100%',
              borderRadius: '15px 0 0 15px',
              border: '1px solid #000',
              paddingLeft: '10px',
            }}
            value={dados.city}
            onChange={(e) => setDados({ city: e.target.value })}
            align-item="center"
            id="inputText"
            type="text"
          />

          <Button
            style={{ backgroundColor: '#00d4ff' }}
            sx={searchRegion.Btn}
            variant="contained"
            onClick={handleClick}
            disableElevation
          >
            <Grid>
              {search}
            </Grid>
          </Button>
        </Grid>
        <Grid pb={8} pt={2}>{cards}</Grid>
      </Grid>
    </Box>
  );
};
export default Search;
