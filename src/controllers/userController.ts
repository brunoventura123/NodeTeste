import { Request, Response } from 'express'

export const name =  (req:Request, res: Response)=>{
    let name: string = req.query.name as string
    let age : string = req.query.age as string
    res.render('pages/name',{name, age})
}
export const age = (req: Request, res: Response)=>{
    let show: boolean = false
    let idade: number = 0
    if(req.body.ano){
        let anoNasc: number = parseInt(req.body.ano as string)
        let anoAtual: number = new Date().getFullYear()
        idade = anoAtual - anoNasc
        show = true
    }
    res.render('pages/age',{idade, show})
}