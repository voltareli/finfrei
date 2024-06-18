import prompt from 'prompt-sync'
let ler= prompt()

export function Depositar(){
    let valord = ''
    do{
        valord = 0
        console.log(`Digite o valor que deseja depositar`)
        valord= Number(ler())
        }while(valord <= 0)


return valord
}

export function Sacar(){
    let valors = ''
    do{
     valors= 0
    console.log(`Digite o valor que deseja sacar`)
    valors= Number(ler())
    }while(valors <= 0)
    
    return valors
}

    export function exibirSaldo(r){

        console.log(`Você possui ${r}R$`)
        
        }    


export function calculoSaque(saldo, valor){

    let valors = ''
    let contador =0 
   if(valor> saldo){
    
    do{
        valors = 0
        console.log(`Você não possui esse saldo, tente novamente...`)
        console.log(`Digite o valor que deseja sacar`)
        valors= Number(ler())

        if(valors< saldo){

            contador++
        }

        
    }while(contador== 0)

       saldo -= valors

   }else {

    saldo -= valor

   }

    return saldo
}


export function calculoInvestimento(capital, tempo, juros){

    let calculo = capital * ((1+ (juros/100))** tempo)
    return calculo
}

export function exibirInvestimento(calculo, tempo){

    console.log(`Você possuirá ${calculo.toFixed(2)}R$ durante esse periodo de ${tempo} meses. `)
    
    }  

