import jwt from 'jsonwebtoken'
export const generateToken = (user = initial, time = '1h') => {
  const generate = jwt.sign(
    {
      data: user,
    },
    'secret',
    { expiresIn: time }
  )
  return generate
}
