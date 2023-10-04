import NuevoPost from "./components/NuevoPost";
import { FormEvent } from "react";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import { onSubmit } from "react";
//import {useState} from "react";
import TextField from "@mui/material/TextField";
import prisma from "lib/prisma";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

//import posts from "./assets/Entradas";
import { getPost } from "../../lib/index";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Black_And_White_Picture } from "next/font/google";

export default async function Home() {
  const { posts } = await getPost();
  //let postsReactivos=posts
  //const [inputs,setInputs]=useState({})
  //const ultimoPost=postsReactivos.length

  //let index=ultimoPost
  //index=index+1

  // const handleChange=(event)=>{
  //const name= event.target.name
  //const value =event.target.value

  //setInputs(values=>({...values,[name]:value}))

  // }
  // function handleSubmit(event){

  // event.preventDefault()

  // Object.defineProperty(inputs,"id",{value:index,
  // writable:true})
  //postsReactivos.push(inputs)
  //console.log(posts)

  //}

  return (
    <Container
      maxWidth="lg"
      sx={{
        color: "success.main",
      }}
    >
      <div className="bienvenida">
        <Image
          src="/images/font-letter.jpg"
          height={225}
          width={925}
          alt="Logo"
        />
        <h1>Bienvenido al Blog</h1>
        <div>
          <Grid container spacing={0}>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h2>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                  </h2>
                  <h4>{post.resume}</h4>
                </li>
              ))}
              {/*{postsReactivos.map((post)=>(
          <li key={post.id}>
            <h2> 
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
           <p>{post.resumen}</p>
          </li>
        ))}*/}
            </ul>
          </Grid>
        </div>

        <div>
          <NuevoPost></NuevoPost>

          {/* <form onSubmit={handleSubmit}>
          
          <label>Título
          <input type="text" name="title" value={inputs.title} onChange={handleChange}/>
          </label>

          <br/>
          <label>Resumen
          <input type="text" name="resumen" value ={inputs.resumen} onChange={handleChange}/>
          </label>
          <br/>
          <label>Contenido
          <input type="text" name="contenido" value={inputs.contenido} onChange={handleChange}/>
          </label>
          <br/>
          <button type="submit">Submit</button>
      </form>*/}
        </div>
      </div>
    </Container>
  );
}
