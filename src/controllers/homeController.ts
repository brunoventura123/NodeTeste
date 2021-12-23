import { Request, Response } from 'express'
import {Product} from '../models/Product'

export const home = (req:Request, res: Response)=>{
    let idade = 80
    let showOld = false

    if(idade > 50){
        showOld = true
    }

    let lista = Product.getAll()
    let expenseList = Product.getFromPriceAfter(12)

    let user = {
        name:'Bruno',
        age:44,
        show: true,
        showOld,
        products: lista,
        expenses: expenseList,
        list:[]
    }

    res.render('pages/home',{user})
}