import TextField from '@material-ui/core/TextField';
import { useAppSelector } from 'store';

const TextFieldModifiedUsername = () => {
  const { errorExistsUsername } = useAppSelector((state) => state.form);

  return (
    <TextField
      error={errorExistsUsername.errorExists}
      helperText={errorExistsUsername.errorDesc}
      label="Username"
      variant="outlined"
      type="username"
      id="username"
      margin="normal"
      required
      FormHelperTextProps={{
        style: {
          fontSize: '12px',
          lineHeight: '1.55',
        },
      }}
    />
  );
};

export default TextFieldModifiedUsername;
