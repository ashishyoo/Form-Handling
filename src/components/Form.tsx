import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData } from "@/types/form";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/types/schema";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
    setIsPasswordVisible(false);
  };

  const handlePasswordCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsPasswordVisible(event.target.checked);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <Typography variant="h3" className="pb-6">
        React Hook Form
      </Typography>
      <div className="flex flex-col gap-4 max-w-sm mb-4">
        <TextField
          autoComplete="off"
          id="outlined-basic name"
          label="Name"
          variant="outlined"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          autoComplete="off"
          id="outlined-basic email"
          label="Email"
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          autoComplete="off"
          id="outlined-basic password"
          label="Password"
          variant="outlined"
          type={isPasswordVisible ? "text" : "password"}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handlePasswordCheckbox}
                checked={isPasswordVisible}
              />
            }
            label="Show Password"
          />
        </FormGroup>
      </div>
      <Button type="submit" variant="contained" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
