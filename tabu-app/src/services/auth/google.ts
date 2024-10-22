// the axios instance and types
import http from '../api'

async function googleLogin(name: string, email: string) {
  return await http({
    url: 'api/oauth/login/google/callback',
    method: 'POST',
    headers: {},
    data: {
      isGoogleLogin: true,
      email: email,
      name: name,
    },
  })
}

export { googleLogin }
