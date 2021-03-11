import TextField from '@material-ui/core/TextField';
import { useAppSelector } from 'store';

const TextFieldModifiedEmail = () => {
  const { errorExistsEmail } = useAppSelector((state) => state.form);

  return (
    <TextField
      error={errorExistsEmail.errorExists}
      helperText={errorExistsEmail.errorDesc}
      id="email"
      label="Email"
      variant="outlined"
      type="email"
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

export default TextFieldModifiedEmail;
