function validacao(){

    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let endereço = document.getElementById("i_endereco");
    let cep = document.getElementById("i_cep");
    let data = document.getElementById("i_data");
    let senha = document.getElementById("i_senha");
    let con_senha = document.getElementById("i_conSenha");

    input_style(nome, "#f45656", "#008000");
    input_style(sobrenome, "#f45656", "#008000");
    input_style(endereço, "#f45656", "#008000");
    input_style(cep, "#f45656", "#008000");
    input_style(data, "#f45656", "#008000");
    input_style(senha, "#f45656", "#008000");
    input_style(con_senha, "#f45656", "#008000");

}

function input_style(input, cor_1, cor_2){


    if(!input.checkValidity()){
        return input.style.border = `3px solid ${cor_1}`;
    }


    else{
        return input.style.border = `1px solid ${cor_2}`;
    }
}