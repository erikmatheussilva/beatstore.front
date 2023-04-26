import { useState } from 'react';
import type { FC } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Typography
} from '@material-ui/core';
import FileDropzone from '../FileDropzone';
import { importWalletApi } from '../../API/ImportWalletApi';
import { Helmet } from 'react-helmet-async';

const ImportWallet: FC = () => {
  const [openToast, setOpenToast] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [files, setFiles] = useState<any[]>([]);

  const handleDrop = (newFiles: any): void => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemove = (file): void => {
    setFiles((prevFiles) => prevFiles.filter((_file) => _file.path
      !== file.path));
  };

  const handleRemoveAll = (): void => {
    setFiles([]);
  };

  return (
    <div>
      <Helmet>
        <title>Importação de carteira</title>
      </Helmet>
      <Box
        sx={{
          minHeight: 1000,
          minWidth: 800,
          p: 6
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Typography
              color="textSecondary"
              sx={{
                mb: 2,
                mt: 3
              }}
              variant="subtitle2"
            >
              Importação de Carteira de Debito
            </Typography>
            <FileDropzone
              accept={[
                'application/excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              ]}
              files={files}
              onDrop={handleDrop}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
              maxFiles={1}
            />
            <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'flex-end', p: 2 }}>
              <Button
                color="primary"
                onClick={() => {
                  setIsSubmitting(true);
                  console.log('files', files);
                  importWalletApi.postImportWallet(files);
                  setOpenToast(true);
                  setIsSubmitting(false);
                }}
                disabled={isSubmitting}
                variant="contained"

              >
                Importar arquivo
              </Button>
            </Box>
            <Snackbar
              open={openToast}
              autoHideDuration={6000}
              onClose={() => setOpenToast(false)}
            >
              <Alert
                onClose={() => setOpenToast(false)}
                severity="success"
                sx={{
                  width: '100%',
                  backgroundColor: 'green',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Salvo com sucesso!
              </Alert>
            </Snackbar>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ImportWallet;
