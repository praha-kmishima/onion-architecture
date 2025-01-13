import {CommandBus} from './application/bus/commandBus'
import {AddUserCommand} from './application/commands/addUserCommand'
import {ListUsersCommand} from './application/commands/listUsersCommand'
import {AddUserHandler} from './application/handlers/addUserHandler'
import {ListUsersHandler} from './application/handlers/listUsersHandler'
import {InMemoryUserRepository} from './infrastructure/repositories/inMemoryUserRepository'
import {UserController} from './presentation/controllers/userController'

// Create the repository
const userRepository = new InMemoryUserRepository()

// Create handlers
const addUserHandler = new AddUserHandler(userRepository)
const listUsersHandler = new ListUsersHandler(userRepository)

// Create the command bus
const commandBus = new CommandBus()
commandBus.register(AddUserCommand, addUserHandler)
commandBus.register(ListUsersCommand, listUsersHandler)

// Create controllers
const userController = new UserController(commandBus)

userController.addUser('Alice', 'alice@example.com')
userController.addUser('Bob', 'bob@example.com')
userController.listUsers()
