import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Paper,
  Snackbar,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Button } from './button';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const navigate = useNavigate(); // Mover para fora do handleSubmit

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5173/recsenha/recsenha', {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emails: [email] })
      });

      if (!response.ok) {
          throw new Error('Erro ao enviar o e-mail');
      }

      const data = await response.text();
      setSnackbarMessage(data);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Erro:', error);
      setSnackbarMessage('Falha ao enviar o e-mail.');
      setOpenSnackbar(true);
    }
  };

  const handlenavigation = () => {
    navigate('/');
  };

  return (
    <>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
        }}
      >
        <Container component="main" maxWidth="sm">
          <Paper className='p-10 h-fit flex flex-col justify-start items-center'
            elevation={4} 
          >
            <Typography 
              variant="h2" 
              component="h1" 
              align="center" 
              sx={{ marginTop: '16px', marginBottom: '16px' }} 
            >
              Esqueceu a Senha?
            </Typography>
            
            <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '16px' }}>

            <label className="text-sm font-semibold text-gray-700">Email</label>
              <TextField
                color='secondary'
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="Email"
                autoFocus
              />

              <Button 
                variant='third'
              >
                Enviar
              </Button>

            </form>

            <Button
              className='mt-4   border-2 border-transparent hover:border-purple-300 hover:bg-transparent hover:text-purple-600'
              variant="fifth"
              onClick={handlenavigation}
            >
              Voltar
            </Button>

          </Paper>
        
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={() => setOpenSnackbar(false)} severity="success">
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </>
  );
};

export default ForgotPassword;