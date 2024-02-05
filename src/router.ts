import { Router } from 'express'
import { firstController } from './app/controller/FirstController'
import { secondController } from './app/controller/SecondController'

const router: Router = Router()
//Routes
router.get('/', firstController.GET)
router.get('/second', secondController.GET)
router.post('/second', secondController.postqualquer)


export { router }
