import Router from 'express'

import * as HomeController from '../controllers/homeController'
import * as InfoController from '../controllers/infoController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/', HomeController.home)
router.get('/contato', InfoController.contato)
router.get('/sobre', InfoController.sobre)

router.get('/name', userController.name)
router.post('/age', userController.age)

export default router