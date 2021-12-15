import reduxCall from '../../components/Utils/reduxCall'

export const PRODUCT_HOME_ACTION = () => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'https://61b749f564e4a10017d18a2e.mockapi.io/products',
      method: 'GET',
      name: 'PRODUCT',
    })
  }
}
