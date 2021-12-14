import * as Types from '../../redux/actions/actionTypes'
import FetchUrl from './FetchUrl'

const reduxCall = async (dispatch, { url, method, datas, name }) => {
  await dispatch({ type: Types[`${name}_REQUEST`] })
  try {
    const { data, status } = await FetchUrl(url, method, datas)
    if (status === 200) {
      await dispatch({ type: Types[`${name}_SUCCESS`], payload: data })
    }
  } catch (error) {
    await dispatch({ type: Types[`${name}_FAILED`], payload: {} })
    console.log('api request error', error)
  }
}

export default reduxCall
