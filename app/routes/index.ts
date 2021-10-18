import { Router } from 'express'
import root from '../controllers/root'
import notFound from '../controllers/notfound'

const router = Router()

// Routes
router.get('/', root)

// Fall Through Route
router.use(notFound)

export default router
