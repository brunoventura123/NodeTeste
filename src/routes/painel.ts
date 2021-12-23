import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req:Request, res: Response)=>{
    res.send('Página Home do Painel')
})
router.get('/noticias', (req:Request, res: Response)=>{
    res.send('Página de noticias')
})
router.get('/musicas', (req:Request, res: Response)=>{
    res.send('Página sobre as musicas mais ouvidas')
})

export default router