import TextField, { TextFieldProps } from '@mui/material/TextField'

export const Input = (props: TextFieldProps) => {
  return <TextField label="Outlined" variant="outlined" {...props} />
}
