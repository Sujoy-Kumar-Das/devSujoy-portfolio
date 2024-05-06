import {
  Box,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  name: string;
  label: string;
  items: string[];
};

export function InputField({ items, name, label }: TInputField) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Box
          sx={{
            width: "100%",
            mt: 2,
          }}
        >
          <InputLabel>Select a {label}</InputLabel>
          <Select {...field} fullWidth error={!!errors[name]}>
            {items.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>

          {errors[name] && (
            <FormHelperText
              error
              sx={{ textTransform: "capitalize", width: "100%" }}
            >
              {errors[name]?.message as string}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
