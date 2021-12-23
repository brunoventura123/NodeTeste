/*
server.get('/', ( req:Request, res: Response)=>{
    res.send('Olá pessoal!')
})
server.get('/noticia/:slug', ( req:Request, res: Response)=>{
    let slug: string = req.params.slug
    res.send(`Noticia: ${slug}`)
})

server.get('/voo/:origem-:destino',(req:Request, res:Response)=>{
    let {origem, destino} = req.params
    res.send(`Voo de ${origem.toUpperCase()} para ${destino.toUpperCase()}`)
})

export let versao: string = '1.0'

export function somar(x:number,y:number): number {
    return x + y
}
export function subtrair(x:number,y:number): number {
    return x - y
}
export function multiplicar(x:number,y:number): number {
    return x * y
}

// export default {somar,subtrair, multiplicar,versao}

module.exports.somar = somar
module.exports.subtrair = subtrair
module.exports.multiplicar = multiplicar

import { somar, subtrair } from './Matematica'
let n1:number = 10
let n2:number = 2
// const Matematica = require('./Matematica')
// import * as Matematica from './Matematica'
// console.log(`Soma: ${Matematica.somar(n1,n2)}`)
// console.log(`Subtração: ${Matematica.subtrair(n1,n2)}`)
// console.log(`Multiplicação: ${Matematica.multiplicar(n1,n2)}`)

console.log(`Soma: ${somar(n1,n2)}`)
console.log(`Subtração: ${subtrair(n1,n2)}`)
// console.log(`Multiplicação: ${multiplicar(n1,n2)}`)



npm start
tsc -w //para iniciar o nodewatch
node dist/index.js //para rodar o arquivo
npm install -g nodemon
npm install validator
nodemon src/index.ts //roda o arquivo sem precisar rodar o comando toda hora, só salvar que roda
*/
