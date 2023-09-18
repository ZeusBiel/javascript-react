import { useState } from 'react'

function Cadastro(){
    /*Hook useState */
    const [dados, setDados]=useState({
        nome:'',
        email:'',
    });

    const info = localStorage.setItem('info',JSON.stringify(dados))

    const dadosInput =(e)=>{
        setDados({...dados,[e.target.name]: e.target.value});
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        localStorage.getItem(info)
    }



    return(
        <>
        <form onClick={handleSubmit}>
        <fieldset>
            <legend>Cadastro</legend>
            <label htmlFor='nome'>Nome:</label>
            <input type="text" name="nome" placeholder="digite seu nome" onChange={dadosInput}/>

            <label htmlFor='email'>Email:</label>
            <input type="text" name="email" placeholder="digite seu Email" onChange={dadosInput}/>

            <button type="submit">Cadastrar</button>
        </fieldset>
        <p>{dados.nome}</p>
        <p>{dados.email}</p>
        </form>
        </>
    )
}
export default Cadastro