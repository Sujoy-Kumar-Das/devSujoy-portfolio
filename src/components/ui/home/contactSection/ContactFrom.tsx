"use client";

import { inViewItemVariants } from "@/animation/framerMotion/inview-animation";
import { From, FromTextArea, InputField } from "@/components/shared/from";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
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
      <Box component={motion.div} variants={inViewItemVariants}>
        <InputField label="Name" type="text" name="name" />
      </Box>

      <Box component={motion.div} variants={inViewItemVariants}>
        <InputField label="Email" type="email" name="email" />
      </Box>

      <Box component={motion.div} variants={inViewItemVariants}>
        <InputField label="Subject" type="text" name="subject" />
      </Box>

      <Box component={motion.div} variants={inViewItemVariants}>
        <FromTextArea label="Message" name="message" type="text" />
      </Box>

      <Button
        color="primary"
        fullWidth
        type="submit"
        sx={{ mt: 3 }}
        component={motion.button}
        variants={inViewItemVariants}
      >
        Send
      </Button>
    </From>
  );
}
