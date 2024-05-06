"use client";

import { From, FromTextArea, InputField } from "@/components/shared/from";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export default function ContactFrom() {
  const handleContactFrom = (data: FieldValues) => {};

  return (
    <From handler={handleContactFrom} schema={contactSchema}>
      <InputField label="Name" type="text" name="name" />
      <InputField label="Email" type="email" name="email" />
      <InputField label="Subject" type="text" name="subject" />
      <FromTextArea label="Message" name="message" type="text" />
      <Button color="primary" fullWidth type="submit" sx={{ mt: 3 }}>
        Send
      </Button>
    </From>
  );
}
