import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container } from '@material-ui/core';
import Chart2 from '../../components/widgets/charts/Chart2';
import Chart3 from '../../components/widgets/charts/Chart3';
import Chart4 from '../../components/widgets/charts/Chart4';
import Chart5 from '../../components/widgets/charts/Chart5';
import Chart6 from '../../components/widgets/charts/Chart6';
import Chart7 from '../../components/widgets/charts/Chart7';
import Chart9 from '../../components/widgets/charts/Chart9';
import Chart10 from '../../components/widgets/charts/Chart10';
import Chart11 from '../../components/widgets/charts/Chart11';
import WidgetPreviewer from '../../components/WidgetPreviewer';
import gtm from '../../lib/gtm';

const BrowseCharts: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Browse: Charts </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mt: 3 }}>
            <WidgetPreviewer
              element={<Chart2 />}
              name="Chart 2"
            />
            <WidgetPreviewer
              element={<Chart3 />}
              name="Chart 3"
            />
            <WidgetPreviewer
              element={<Chart4 />}
              name="Chart 4"
            />
            <WidgetPreviewer
              element={<Chart5 />}
              name="Chart 5"
            />
            <WidgetPreviewer
              element={<Chart6 />}
              name="Chart 6"
            />
            <WidgetPreviewer
              element={<Chart7 />}
              name="Chart 7"
            />
            <WidgetPreviewer
              element={<Chart9 />}
              name="Chart 9"
            />
            <WidgetPreviewer
              element={<Chart10 />}
              name="Chart 10"
            />
            <WidgetPreviewer
              element={<Chart11 />}
              name="Chart 11"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BrowseCharts;
