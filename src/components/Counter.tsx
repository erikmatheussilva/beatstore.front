import React, { FC, useState } from 'react';
import {
  Box,
  // Button,
  Grid,
  // ImageList,
  // ImageListItem,
  // ImageListItemBar,
} from '@material-ui/core';
// import './Counter.css';
const Counter: FC = (props) => {
  //  Contador is a state initialized to 0
  const [counter, setContador] = useState(0);

  // Function is called everytime increment button is clicked
  const mais1 = () => {
    // Contador state is incremented
    setContador(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const menos1 = () => {
    // Contador state is decremented
    setContador(counter - 1);
  };
  const mais10 = () => {
    // Contador state is incremented
    setContador(counter + 10);
  };

  // Function is called everytime decrement button is clicked
  const menos10 = () => {
    // Contador state is decremented
    setContador(counter - 10);
  };
  const mais100 = () => {
    // Contador state is incremented
    setContador(counter + 100);
  };

  // Function is called everytime decrement button is clicked
  const menos100 = () => {
    // Contador state is decremented
    setContador(counter - 100);
  };
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3
      }}
      {...props}

    >
      <Grid sx={{ minWidth: 700 }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '300%',
          width: '100%',
          height: '100%',
        }}
        >
          <div style={{
            fontSize: '120%',
            position: 'relative',
            top: '10vh',
          }}
          >
            {counter}
          </div>
          <div className="buttons">
            <button
              type="button"
              style={{
                fontSize: '60%',
                position: 'relative',
                top: '20vh',
                marginRight: '5px',
                borderRadius: '8%',
              }}
              onClick={mais100}
            >
              +100

            </button>
            <button
              type="button"
              style={{
                fontSize: '60%',
                position: 'relative',
                top: '20vh',
                marginRight: '5px',
                borderRadius: '8%',
              }}
              onClick={mais10}
            >
              +10

            </button>
            <button
              type="button"
              style={{
                fontSize: '60%',
                position: 'relative',
                top: '20vh',
                marginRight: '5px',
                borderRadius: '8%',
              }}
              onClick={mais1}
            >
              +1

            </button>
            <button
              type="button"
              style={{
                fontSize: '60%',
                position: 'relative',
                top: '20vh',
                marginLeft: '5px',
                borderRadius: '8%',
              }}
              onClick={menos1}
            >
              -1

            </button>
            <button
              type="button"
              style={{
                fontSize: '60%',
                position: 'relative',
                top: '20vh',
                marginLeft: '5px',
                borderRadius: '8%',
              }}
              onClick={menos10}
            >
              -10

            </button>
            <button
              type="button"
              style={{
                fontSize: '60%',
                position: 'relative',
                top: '20vh',
                marginLeft: '5px',
                borderRadius: '8%',
              }}
              onClick={menos100}
            >
              -100

            </button>
          </div>
        </div>
      </Grid>
    </Box>
  );
};

export default Counter;
