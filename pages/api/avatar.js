const crypto = require('crypto')

const avatar = async (req, res) => {
  const { name, email } = req.body || req.query || {}
  let data = null

  if (name) {
    const hash = crypto.createHash('md5').update(`${name}@gmail.com`).digest('hex')
    data = `https://s.gravatar.com/avatar/${hash}`
  }

  if (email) {
    const hash = crypto.createHash('md5').update(email).digest('hex')
    data = `https://s.gravatar.com/avatar/${hash}`
  }

  if (data) {
    return res.status(200).json({ error: null, data })
  }

  return res.status(400).json({ error: 'Name or Email is required', data: null })
}

export default avatar
