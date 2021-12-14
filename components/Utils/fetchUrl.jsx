import axios from 'axios'

const fetchUrl = (url, method = 'get', data = {}) => {
  console.log('url', url)
  // ########################
  // ### error unexpected ###
  // ########################

  axios.interceptors.response.use(null, (error) => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    if (!expectedErrors) {
      console.log('error:', error)
      //   toast.error("مشکلی از سمت سرور رخ داده است.", {
      //     position: "top-right",
      //     closeOnClick: true,
      //   });
    }
    console.log('reject')
    return Promise.reject(error)
  })

  // ########################
  // #### axios  request ####
  // ########################

  const errorFunc = (error) => {
    if (error.response) {
      // Request made and server responded
      console.log('data', error.response.data)
      console.log('status', error.response.status)
      console.log('headers', error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      console.log('request', error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    return undefined
  }
  let responsed
  switch (method) {
    case 'get':
      return (responsed = axios.get(url).catch((error) => errorFunc(error)))
      break
    case 'post':
      return (responsed = axios
        .post(url, data)
        .catch((error) => errorFunc(error)))
      break
    case 'put':
      return (responsed = axios
        .put(url, data)
        .catch((error) => errorFunc(error)))
      break
    case 'delete':
      return (responsed = axios
        .delete(url, data)
        .catch((error) => errorFunc(error)))
      break
    default:
      break
  }

  return responsed
}

export default fetchUrl
