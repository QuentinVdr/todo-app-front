import { TaskForm } from '@components/task/TaskFrom/TaskForm';
import { useCreateTaskMutation, useDeleteTaskMutation } from '@hooks/reactQuery/mutation/useTaskMutations';
import { useTagQuery } from '@hooks/reactQuery/queries/useTagQueries';
import { useTaskQuery } from '@hooks/reactQuery/queries/useTaskQueries';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { CircularProgress, Grid, IconButton, Modal, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './Home.module.scss';

/**
 * Page that contains all the components displayed on the application homepage
 */
export default function Home() {
  const { data: tags } = useTagQuery();
  const { data: tasks, isLoading: isTasksLoading, refetch: refetchTasks } = useTaskQuery();
  const { mutateAsync: createTask } = useCreateTaskMutation();
  const { mutateAsync: deleteTask } = useDeleteTaskMutation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onFormSubmit = (data) => {
    createTask(data).then(() => refetchTasks());
    handleClose();
  };

  const findTagNameById = (id) => {
    return tags.find((tag) => tag._id === id)?.name;
  };

  const handleTaskDelete = (id) => {
    deleteTask(id);
  };

  return (
    <>
      <Grid container direction="column" rowGap={6}>
        <Grid item container direction="row" justifyContent="space-between">
          <Typography variant="h1">Bienvenue</Typography>
          <IconButton onClick={handleOpen} size="large">
            <AddCircleOutlineIcon />
          </IconButton>
        </Grid>
        {isTasksLoading ? (
          <Typography variant="body1">
            Chargement <CircularProgress />
          </Typography>
        ) : (
          <Grid item container rowGap={4}>
            {tasks.map((task) => (
              <Grid
                item
                xs={12}
                key={task._id}
                container
                direction="row"
                justifyContent="space-between"
                className={styles.card}
              >
                <Stack>
                  <Typography variant="h2">{task.title}</Typography>
                  <Typography variant="body1">{task.description}</Typography>
                </Stack>
                {task.tags.length > 0 && (
                  <Stack>
                    {task.tags.map((taskTag) => (
                      <Typography key={taskTag} variant="body2">
                        {findTagNameById(taskTag)}
                      </Typography>
                    ))}
                  </Stack>
                )}
                <IconButton onClick={() => handleTaskDelete(task._id)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Grid container direction="column" rowGap={4} className={styles.modalBox}>
          <Typography variant="h2">Créer une tache</Typography>
          <TaskForm onSubmit={onFormSubmit} onCancel={() => handleClose()} />
        </Grid>
      </Modal>
    </>
  );
}
