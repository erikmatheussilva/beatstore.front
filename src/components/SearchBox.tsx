// import { useState, useEffect, useCallback } from 'react';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { dwellerApi } from '../API/DwellerAPI';
// import type { Dweller } from '../models/dweller';
// import { Grid, Autocomplete, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';

// const useStyles = makeStyles({
//   input: {
//     color: '#FFFFFF',
//     background: 'none',
//     '&.Mui-focused': {
//       background: 'none',
//       border: 'none',
//     },
//     '&.Mui-focusVisible': {
//       background: 'none',
//     },
//     '&:hover': {
//       background: 'none'
//     }
//   },
//   AutocompletePopupIndicator: {
//     display: 'none',
//   }
// });

// const SearchBox = () => {
//   const [dweller, setDweller] = useState<Dweller>();
//   const [dwellers, setDwellers] = useState<Dweller[]>([]);

//   const classes = useStyles();

//   const getDwellers = useCallback(async () => {
//     try {
//       const data = await dwellerApi.getDwellers();
//       console.log(dwellers, 'getDwellers: ', data);
//       setDwellers(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }, []);
//
//   useEffect(() => { getDwellers(); }, [getDwellers]);
//
//
//   return (
//     <Grid
//       display="flex"
//       alignItems="center"
//       mt="25px"
//     >
//       <Autocomplete
//         disablePortal
//         id="areas"
//         options={dwellers}
//         value={dweller}
//         getOptionLabel={(option) => option.name}
//         // onChange={(event, newInputValue) => {
//         //   handleDwellerChange(newInputValue);
//         // }}
//         sx={{ width: '100%', backgroundColor: '#313131', borderRadius: '25px', color: '#FFFFFF' }}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             placeholder="Encontre um Especialista..."
//             style={{
//               backgroundColor: 'white',
//               borderRadius: '10px',
//               width: '100%',
//               padding: '7px 10px',
//             }}
//             InputProps={{ ...params.InputProps, disableUnderline: true, className: classes.input }}
//             variant="standard"
//             size="small"
//             name="q"
//           />
//         )}
//         PaperComponent={({ children }) => (
//           <Paper style={{ background: '#313131', color: '#FFFFFF' }}>{children}</Paper>
//         )}
//         classes={{ popupIndicator: classes.AutocompletePopupIndicator }}
//       />
//       <Grid display="flex">
//         <IconButton
//           style={{ fontSize: '25px', position: 'relative', marginLeft: '-60px' }}
//           type="submit"
//         >
//           <FontAwesomeIcon
//             style={{ fontSize: '20px' }}
//             icon={faArrowRight}
//             color="#FF820F"
//           />
//         </IconButton>
//       </Grid>
//     </Grid>
//   );
// };

export {};
