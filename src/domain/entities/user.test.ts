import {describe, it, expect} from 'vitest'
import { User } from './user'

describe('User', () => {
  it('should create a user', () => {
    const user = User.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
    })
    
    expect(user).toBeDefined()
    expect(user.id).toBeDefined()
    expect(user.name).toBe('John Doe')
    expect(user.email).toBe('john.doe@example.com')
  })
})
