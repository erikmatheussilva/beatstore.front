import type { FC } from 'react';
import {
  Box,
  Button,
  Grid,
  // ImageList,
  // ImageListItem,
  // ImageListItemBar,
} from '@material-ui/core';
import Scrollbar from '../Scrollbar';
import { Player } from '../player';

// const products = [
//   {
//     id: '5eff2512c6f8737d08325676',
//     image: '/static/mock-images/products/product_1.jpeg',
//     name: 'Song 1',
//     author: 'Charlie Tulip Dress',
//   },
//   {
//     id: '5eff2516247f9a6fcca9f151',
//     image: '/static/mock-images/products/product_2.jpeg',
//     name: 'Song 2',
//     author: 'Kate Leopard Dress',
//   },
//   {
//     id: '5eff251a3bb9ab7290640f18',
//     image: '/static/mock-images/products/product_3.jpeg',
//     name: 'Song 3',
//     author: 'Lounge Puff Fabric slipMockper',
//   },
//   {
//     id: '5eff251e297fd17f0dc18a8b',
//     image: '/static/mock-images/products/product_4.jpeg',
//     name: 'Song 4',
//     author: 'Flared Sleeve Floral Blouse',
//   },
//   {
//     id: '5eff2516247f9a6fcca9f151',
//     image: '/static/mock-images/products/product_2.jpeg',
//     name: 'Song 2',
//     author: 'Kate Leopard Dress',
//   },
//   {
//     id: '5eff251a3bb9ab7290640f18',
//     image: '/static/mock-images/products/product_3.jpeg',
//     name: 'Song 3',
//     author: 'Lounge Puff Fabric slipMockper',
//   },
//   {
//     id: '5eff251e297fd17f0dc18a8b',
//     image: '/static/mock-images/products/product_4.jpeg',
//     name: 'Song 4',
//     author: 'Flared Sleeve Floral Blouse',
//   },
//   {
//     id: '5eff2524ef813f061b3ea39f',
//     image: '/static/mock-images/products/product_5.jpeg',
//     name: 'Song 5',
//     author: 'Soft Wrap Top',
//   }
// ];

const SongList: FC = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Scrollbar>
      <Grid sx={{ minWidth: 700, marginTop: 30 }}>
        <Player />
        {/* <ImageList
          variant="masonry"
          cols={3}
          gap={12}
        >
          {products.map((product) => (
            <ImageListItem key={product.image}>
              <img
                src={`${product.image}?w=248&fit=crop&auto=format`}
                srcSet={`${product.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={product.name}
                loading="lazy"
              />
              <ImageListItemBar
                position="below"
                title={product.name}
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </Grid>
    </Scrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        size="small"
        sx={{ cursor: 'pointer' }}
        variant="text"
      >
        See All
      </Button>
    </Box>
  </Box>
);

export default SongList;
