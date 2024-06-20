import { TaskForm } from '@components/task/TaskFrom/TaskForm';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Grid, IconButton, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './Home.module.scss';

/**
 * Page that contains all the components displayed on the application homepage
 */
export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onFormSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <Grid container direction="row" justifyContent="space-between">
      <Typography variant="h1">Bienvenue</Typography>
      <IconButton onClick={handleOpen} size="large">
        <AddCircleOutlineIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Grid container gap={4} className={styles.modalBox}>
          <Typography variant="h2">Créer une tache</Typography>
          <TaskForm onSubmit={onFormSubmit} onCancel={() => handleClose()} />
        </Grid>
      </Modal>
    </Grid>
  );
}
