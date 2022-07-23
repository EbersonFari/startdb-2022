class Forca {
    letrasChutadas = [];
    palavra = [];
    vidas = 6
    palavraChave = "abacaxi"



    chutar(letra) {

        const letraExistente = this.palavraChave.includes(letra);
        if (this.vidas <= 0) {
            console.log("Acabou suas vidas!")
        } else if (letraExistente) {
            console.log("Parabéns")
            this.palavra.push(letra)
        } else {
            this.vidas--
                console.log("Errou")
        }
        const letraDigitada = this.letrasChutadas.includes(letra);
        this.letrasChutadas.push(letra)

    }

    buscarEstado() { // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
        const myEnums = {
            PERDEU: "perdeu",
            AGUARDANDOCHUTE: "aguardando chute",
            GANHOU: "ganhou",
        }

        if (this.vidas > 0 && this.palavra.join("") === this.palavraChave) {
            return myEnums.GANHOU
        } else if (this.vidas == 0) {
            return myEnums.PERDEU
        }
        return myEnums.AGUARDANDOCHUTE
    }

    buscarDadosDoJogo() {
        return {
            letrasChutadas: this.letrasChutadas.join(""), // Deve conter todas as letras chutadas
            vidas: this.vidas, // Quantidade de vidas restantes
            palavra: this.palavra.join(""), // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
        }
    }
}

module.exports = Forca;