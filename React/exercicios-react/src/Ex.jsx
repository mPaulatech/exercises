export function PerfilUsuario({nome, cargo, foto}){
    return(
        <>
        <img src={foto} alt={`Foto de perfil de ${nome}`} />
        <h2>{nome}</h2>
        <p>{cargo}</p>
        </>
    )
}