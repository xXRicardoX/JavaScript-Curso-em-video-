function contando(){
    var tn1 = window.document.getElementById('tnb1')
    var tn2 = window.document.getElementById('tnb2')
    var tn3 = window.document.getElementById('tnb3')
    var res = window.document.getElementById('res')
    
    //Caso o usuario não digita nada
    if (tn1.value.length == 0 || tn2.value.length == 0 || tn3.value.length == 0){
        res.innerHTML = 'Impossivel contar!!!'
        // window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = `Contando: <br> `
        let i = Number(tn1.value)
        let f = Number(tn2.value)
        let p = Number(tn3.value)

        

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i <  f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }            
        }else{
            //Contagem regressiva
            for (let c = i; c <= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`

    }
 }