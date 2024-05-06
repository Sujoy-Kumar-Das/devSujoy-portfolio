import { Box, FormHelperText } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  name: string;
};

export  function InputFile({ name }: TInputField) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={() => (
        <Box sx={{ width: "100%", mt: 2 }}>
          <input
            type="file"
            {...register(name)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "15px 10px",
              backgroundColor: "transparent",
              color: "white",
              width: "100%",
            }}
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
