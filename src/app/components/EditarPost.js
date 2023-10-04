"use client";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import { Box, Container } from "@mui/material";
import { useFormik } from "formik";
import prisma from "lib/prisma";
import { editarPost } from "../../../lib";
import { editarPostAction } from "./actions";
import posts from "../assets/Entradas";

const EditarPost = ({ id, post }) => {
  /*const [inputs, setInputs] = useState({
    title: post.title,
    resume: post.resume,
    content: post.content,
  });

  const formRef = useRef(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };
  async function handleSubmit(data) {
    const title = data.get("title");
    const resumen = data.get("resumen");
    const contenido = data.get("contenido");

    await editarPostAction(id, title, resumen, contenido);
    formRef.current?.reset();

  }*/
  const formRef = useRef(null);
  async function editaPost(id, formik) {
    const { titulo, resumen, contenido } = formik.values;
    await editarPostAction(id, titulo, resumen, contenido);
    formRef.current?.reset();
  }
  const formik = useFormik({
    initialValues: {
      titulo: post.title,
      resumen: post.resume,
      contenido: post.content,
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      editaPost(id, formik);
    },
  });
  return (
    /*
    <form ref={formRef} action={handleSubmit}>
      <h1>Editar entrada</h1>
      
      <label>
        Título
        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Resumen
        <input
          type="text"
          name="resumen"
          value={inputs.resume}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contenido
        <input
          type="text"
          name="contenido"
          value={inputs.content}
          onChange={handleChange}
        />
      </label>
      <br />
      <Button type="submit" variant="contained">
        Editar
      </Button>
    </form>*/

    <Box
      component="form"
      ref={formRef}
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <h1>Editar entrada</h1>
      <TextField
        sx={{ color: "text.primary", backgroundColor: "white" }}
        id="titulo"
        label="Titulo"
        value={formik.values.titulo}
        onChange={formik.handleChange}
      />
      <br />
      <TextField
        sx={{ color: "text.primary", backgroundColor: "white" }}
        id="resumen"
        label="Resumen"
        value={formik.values.resumen}
        onChange={formik.handleChange}
      />

      <br />
      <TextField
        sx={{ color: "text.primary", backgroundColor: "white" }}
        id="contenido"
        label="Contenido"
        value={formik.values.contenido}
        onChange={formik.handleChange}
      />
      <br />
      <Button type="submit" variant="contained">
        Editar
      </Button>
    </Box>
  );
};
export default EditarPost;
