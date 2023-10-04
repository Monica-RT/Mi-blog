"use client";
import { Box, Container } from "@mui/material";

import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useRef } from "react";
import { crearPost } from "../../../lib";
import { crearPostAction } from "./actions";

const NuevoPost = () => {
  /*const [inputs,setInputs]=useState({})

    const formRef = useRef(null)
    const handleChange=(event)=>{
        
        const name= event.target.name
        const value =event.target.value
        
        setInputs(values=>({...values,[name]:value}))
      
    }
    async function handleSubmit(data){
        
        const title=data.get('title')
        const resumen=data.get('resumen')
        const contenido=data.get('contenido')
        console.log(title)
        console.log(resumen)
        console.log(contenido)
        await crearPostAction(title,resumen,contenido)
        formRef.current?.reset()
        */

  //USANDO FORMIK
  const formRef = useRef(null);
  async function nuevoPost(formik) {
    const { titulo, resumen, contenido } = formik.values;
    await crearPostAction(titulo, resumen, contenido);
    formRef.current?.reset();
  }
  const formik = useFormik({
    initialValues: {
      titulo: "",
      resumen: "",
      contenido: "",
    },
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));

      nuevoPost(formik);
    },
  });

  return (
    <Box
      component="form"
      ref={formRef}
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <h1>Ingresar nueva entrada</h1>

      {/*<label>Título
            <input type="text" name="title" value={inputs.title} onChange={handleChange}/>
        
    </label>*/}
      <br />
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
      {/*<label>Resumen
            <input type="text" name="resumen"value={inputs.resumen} onChange={handleChange} />
        </label>*/}
      <br />
      <TextField
        sx={{ color: "text.primary", backgroundColor: "white" }}
        id="contenido"
        label="Contenido"
        value={formik.values.contenido}
        onChange={formik.handleChange}
      />
      {/*<label>Contenido
          <input type="text" name="contenido" value={inputs.contenido} onChange={handleChange}/>
    </label>*/}
      <br />
      <Button type="submit" variant="outlined">
        Submit
      </Button>

      {/*<button type="submit">Submit</button>*/}
    </Box>
  );
};

export default NuevoPost;
