import { Box, FormHelperText, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  type: string;
  name: string;
  label: string;
};

export  function InputField({ type, name, label }: TInputField) {
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
          }}
        >
          <TextField
            {...field}
            fullWidth
            variant="outlined"
            label={label}
            type={type}
            sx={{ mt: 2 }}
            error={!!errors[name]}
          />
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
