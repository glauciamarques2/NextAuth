import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";


//pagina protegida ao lado do servidor
//se nao ouver sessao o usuario sera redirecionado para fazer o login e voltar pra Member com uma aperencia melhor

const Member = async () => {
  const session = await getServerSession(options);  

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/Member");
  }

  return (
    <div>
        <h1>Member Server Session </h1>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.role}</p>
    </div>
  );
};

export default Member;
