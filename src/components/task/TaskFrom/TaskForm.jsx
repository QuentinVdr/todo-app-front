import { Button, Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

export const TaskForm = ({
  onSubmit,
  onCancel,
  defaultValue = {
    title: '',
    description: ''
  }
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: defaultValue });

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowGap={4} justifyContent="center">
        <Grid container direction="row" rowGap={3} columnSpacing={3}>
          <Grid item xs={12}>
            <TextField
              label="titre"
              {...register('title', { required: 'Le titre est obligatoire' })}
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="description"
              {...register('description')}
              error={!!errors.description}
              helperText={errors.description?.message}
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item justifyContent="flex-end" container gap={2}>
          <Button variant="outlined" onClick={handleCancel}>
            annuler
          </Button>
          <Button variant="contained" type="submit">
            créer
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  defaultValue: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};
