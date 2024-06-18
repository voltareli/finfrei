import prompt from 'prompt-sync'
let ler= prompt()


export function menu(mensagem){

    console.log(`
    Escolha oque deseja:
    1. Depositar 
    2. Sacar
    3. Visualizar o saldo
    4. Simule um investimento
    5. Fechar app
    `)




}

export function resposta(){

    let resp = Number(ler())

    return resp
}

export function mensagem(resposta){

    console.log(`Ação realizada`)

}

export function mensagemINV(){

    let capital = 0
    console.log('Quanto irá investir?')
    capital = Number(ler())
    return capital
}

export function jurosINV(){

    let juros = 0
    console.log('Qual será o juros?')
    juros = Number(ler())
    return juros
}

export function tempoINV(){

    let tempo = 0
    console.log('Quantos meses?')
    tempo = Number(ler())
    return tempo
}