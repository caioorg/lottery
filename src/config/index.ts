export default {
  baseUrlRequest: String(
    import.meta.env.VITE_BASE_URL || 
    'https://brainn-api-loterias.herokuapp.com/api/v1'
  )
}