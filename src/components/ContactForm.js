import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { Container, style } from "@mui/system";

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="textarea-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error" style={{color:'red'}}>{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error" style={{color:'red'}}>{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error" style={{color:'red'}}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const ContactForm = () => {
  return (
    <Container maxWidth="sm" style={{backgroundColor:'#D8EC8A', textAlign:'center'}}>
        <h1 style={{color:'#3A724D'}}>Contactanos!</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            comments: "",
            acceptedTerms: false,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Máximo 15 caracteres!")
              .required("Requerido!"),
            lastName: Yup.string()
              .max(20, "Máximo 20 caracteres!")
              .required("Requerido!"),
            phone: Yup.string()
              .min(10, "Mínimo 10 caracteres!")
              .required("Requerido!"),  
            email: Yup.string()
              .email("Dirección email incorrecta!")
              .required("Requerido!"),
            acceptedTerms: Yup.boolean()
              .required("Requerido!")
              .oneOf([true], "Debe aceptar términos y condiciones!"),
            comments: Yup.string()
              .min(15, "Mínimo 15 caracteres!")
              .required("Requerido!"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form
            style={{
              display: "grid",
              textAlign: "center",
              justifyContent: "center",
              height: "75vh",
              fontWeight: "bold",
              padding: "20px"
            }}
          >
            <MyTextInput
              label="Nombre"
              name="firstName"
              type="text"
              placeholder="Jorge"
            />

            <MyTextInput
              label="Apellido"
              name="lastName"
              type="text"
              placeholder="Lopez"
            />

            <MyTextInput
              label="Telefono"
              name="phone"
              type="int"
              placeholder="111111111"
            />

            <MyTextInput
              label="Dirección de Email"
              name="email"
              type="email"
              placeholder="usuario@mail.com"
            />

            <MyCheckbox name="acceptedTerms">
              Aceptar términos y condiciones
            </MyCheckbox>

            <MyTextArea
              label="Deje su consulta"
              name="comments"
              placeholder="Comentarios..."
            />
            <Button type="submit" variant="contained"  color="success" style={{backgroundColor:'#00382A'}}>
              Enviar
            </Button>
          </Form>
        </Formik>
      </Container>
  );
};
export default ContactForm;
