export const isAuthenticated = ()=> sessionStorage.getItem('TOKEN_KEY') !== null
export const getToken = ()=> sessionStorage.getItem('TOKEN_KEY')
export const login = (tokenKey)=> sessionStorage.setItem('TOKEN_KEY', tokenKey)
export const logout = ()=> sessionStorage.removeItem('TOKEN_KEY')

