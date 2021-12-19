import * as Types from '../../redux/actions/actionTypes'
import FetchUrl from './FetchUrl'

const reduxCall = async (dispatch, { url, method, body, name }) => {
  await dispatch({ type: Types[`${name}_REQUEST`] })
  try {
    const { data, status } = await FetchUrl(url, method, body)
    if (
      (status === 200 || status === 201) &&
      !!(Object.keys(data).length || data.length)
    ) {
      await dispatch({ type: Types[`${name}_SUCCESS`], payload: data })
    } else {
      await dispatch({ type: Types[`${name}_FAILED`], payload: {} })
    }
  } catch (error) {
    await dispatch({ type: Types[`${name}_FAILED`], payload: {} })
    console.log('api request error', error)
  }
}

export default reduxCall
