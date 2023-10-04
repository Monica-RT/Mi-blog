import prisma from './prisma';


export async function getPost () {
    try {
        const posts=await prisma.post.findMany()
        return{posts}
    }
    catch(error){
        return {error}
    }
}
export async function crearPost(title,resumen,content){
    
    try{

        
        const post= await prisma.post.create({
                data:{
                title:title,
                resume:resumen,
                content:content,
                }
                })
       // const createPost=await prisma.post.create({data:post})
        return {post}

    }
    catch(error){
        return{error}
    }
}
export async function editarPost (id,title,resumen,content) {
    try{
               
        const post= await prisma.post.update({
            where:{
                id:id,
            },
                data:{
                title:title,
                resume:resumen,
                content:content,
                }
                })
        //const editarPostPost=await prisma.post.update({data:post})
        return {post}
    }
    catch(error){
        return{error}
    }

}