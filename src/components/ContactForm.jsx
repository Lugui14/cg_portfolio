import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactForm = () => {
  const formHeight = useBreakpointValue({ base: "50%", md: "100%" });

  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let send = true;

    if (form.email.length === 0) {
      setErrors({ ...errors, email: "Campo obrigatório" });
      send = false;
    }

    if (form.subject.length === 0) {
      setErrors({ ...errors, subject: "Campo obrigatório" });
      send = false;
    }

    if (!form.message) {
      setErrors({ ...errors, message: "Campo obrigatório" });
      send = false;
    }

    if (form.subject.length > 100) {
      setErrors({ ...errors, subject: "Máximo de 100 caracteres" });
      send = false;
    }

    if (form.message.length > 1000) {
      setErrors({ ...errors, message: "Máximo de 1000 caracteres" });
      send = false;
    }

    if (send) {
      console.log(form);
    }
  };

  const handleInput = (field) => (e) => {
    setErrors({ email: "", subject: "", message: "" });

    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: formHeight,
      }}
    >
      <FormControl isInvalid={errors.email.length > 0}>
        <FormLabel>Endereço de Email</FormLabel>
        <Input
          type="email"
          value={form.email}
          onChange={handleInput("email")}
          placeholder="Email"
        />
        {errors.email.length > 0 && (
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors.subject.length > 0}>
        <FormLabel>Assunto do Email</FormLabel>
        <Input
          type="text"
          value={form.subject}
          onChange={handleInput("subject")}
          placeholder="Assunto"
        />
        {errors.subject.length > 0 && (
          <FormErrorMessage>{errors.subject}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors.message.length > 0}>
        <FormLabel>Mensagem do Email</FormLabel>
        <Textarea
          placeholder="Mensagem"
          value={form.message}
          onChange={handleInput("message")}
        />
        {errors.message.length > 0 && (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button w={"50%"} colorScheme="blue" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default ContactForm;
