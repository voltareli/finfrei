import prompt from 'prompt-sync'
let ler= prompt()
import{ jurosINV, mensagem, mensagemINV, menu, resposta, tempoINV }from './menu.js'
import { Depositar, Sacar, calculoInvestimento, calculoSaque, exibirInvestimento, exibirSaldo } from './financeiro.js'

let saldo = 0
let s = ''
let d = ''
let exibir= ''
let calculo= ''
let investimento = ''
let t = ''
let j= ''
let capital = ''
let continuar = true
while(continuar){

    
    let m = menu()

    let r = resposta()
    

    
    if(r == 5){

        continuar= false
        
    }else{
        
        if(r == 1){

            d = Depositar()
            saldo = saldo + d
            let men = mensagem()
        }

        if(r == 2){

            s = Sacar()
            calculo = calculoSaque(saldo, s)
            saldo = calculo
            let men = mensagem()
        }

         if( r == 3){

            exibir = exibirSaldo(saldo)

        }

        if( r == 4){

             capital = mensagemINV()
             t= tempoINV()
             j= jurosINV()

             investimento= calculoInvestimento(capital, t, j)
             let men = exibirInvestimento(investimento, t)

        }



    }
    


}