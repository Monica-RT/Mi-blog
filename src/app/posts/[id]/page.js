//import posts from "src/app/assets/Entradas";
import prisma from "lib/prisma";
//import { getPost } from "../../../../lib";
import EditarPost from "../../components/EditarPost";
import { Box, Container } from "@mui/material";

export default async function Post({ params }) {
  const identifier = parseInt(params.id);
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params?.id),
    },
  });
  return (
    <Container maxWidth="lg" sx={{}}>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>

        <EditarPost id={identifier} post={post} />
      </div>
    </Container>
  );
}
/*export default function Posts({params}){
    
    
        
    }
    //content=posts.find((post)=>post.id==params.id)
   /* return <div> 
        <h1>Entrada {params.id}</h1>
        <div>

        </div>    
        
            
        <p>{prisma.post.content}</p>
    </div>
    
}*/
