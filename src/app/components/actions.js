'use server'
import { revalidatePath } from "next/cache"
import { crearPost }from "../../../lib"
import {editarPost} from "../../../lib"
export async function crearPostAction (title,resumen,contenido){
    await crearPost(title,resumen,contenido)
    
    revalidatePath('/')
}
export async function editarPostAction (id,title,resumen,contenido){
    await editarPost(id,title,resumen,contenido)
    
    revalidatePath('/')
}