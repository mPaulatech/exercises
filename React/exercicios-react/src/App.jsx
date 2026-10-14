import { PerfilUsuario } from "./Ex.jsx"
import fotoGato from "./assets/fotoGato.jpg";
import fotoCoroa from "./assets/fotoCoroa.jpg";

export default function App(){
  return(
    <>
      <h1>Exercicios do Gemini:</h1>
      
      <TitleEx
      tit2="Exercicio 1:"
      />
      <PerfilUsuario
      nome="Gato Preto"
      cargo="Desenvolvedor Frontend"
      foto={fotoGato}
      />

      <PerfilUsuario
      nome="Menino Rei"
      cargo="Desenvolvedor Backend"
      foto={fotoCoroa}
      />

      <TitleEx
      tit2="Exercicio 2:"
      />
      
      <TitleEx
      tit2="Exercicio 3:"
      />
    </>
  )
}

export function TitleEx({tit2}){
  return(
    <>
    <h2>{tit2}</h2>
    </>
  )
}