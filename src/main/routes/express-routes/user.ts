import { getUserByTokenController } from './../../factories/controllers/user/getByToken';
import { Router } from 'express';
import { adaptRoute } from '../../adapters/expressRoutes/adapter';
import { loginController } from '../../factories/controllers/auth/login';
import { createUserController } from '../../factories/controllers/user/create';
import { getUserByIdController } from '../../factories/controllers/user/getById';
import { authenticateRoute } from '../../../presentation/middlewares/auth';
import { getUsersController } from '../../factories/controllers/user/getAll';
import { updateUsersController } from '../../factories/controllers/user/update';
import { deleteUserController } from '../../factories/controllers/user/delete';

const router = Router();

router.post('/login', adaptRoute(loginController()));
router.use(authenticateRoute);
router.post('/create', adaptRoute(createUserController()));
router.get('/getById/:id', adaptRoute(getUserByIdController()));
router.get('/getByToken', adaptRoute(getUserByTokenController()));
router.get('/getAll', adaptRoute(getUsersController()));
router.put('/edit', adaptRoute(updateUsersController()));
router.delete('/delete/:id', adaptRoute(deleteUserController()));

export {router as userRoutes};