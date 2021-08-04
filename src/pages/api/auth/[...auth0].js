import { handleAuth, handleProfile } from '@auth0/nextjs-auth0'

export default handleAuth({
  async profile(req, res) {
    try {
      await handleProfile(req, res, {
        refetch: true, // only if on SSR
      })
    } catch (error) {
      res.status(error.status || 500).end(error.message)
    }
  },
})
