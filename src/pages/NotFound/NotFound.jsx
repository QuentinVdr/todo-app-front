import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Box className={styles.container}>
      <Stack alignItems="center" gap={2}>
        <Typography variant="h1">Page indisponible</Typography>
        <Typography variant="h6">La page que vous essayez de consulter n&apos;existe pas ou a été supprimée</Typography>
        <Button variant="contained" endIcon={<ArrowForward />} onClick={() => navigate('/')}>
          revenir en lieu sur
        </Button>
      </Stack>
    </Box>
  );
}
