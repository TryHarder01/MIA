// const API_ENDPOINT = "https://api.openai.com/v1/completions";
const API_HOST = 'http://localhost' // make this a .env variable
const PORT = process.env?.REACT_APP_API_PORT || '3001'
const PROD = 'prod'
const MOCK = 'mock'

const TIMEOUT_DEFAULT = 1000

const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const chooseEnv = () => {
  console.log('process.env: ' + JSON.stringify(process.env))
  if (process.env.REACT_APP_RUN_PROD === 'true') {
    console.log('PROD endpoints')
    return PROD
  } else {
    console.log('MOCK endpoints')
    return MOCK
  };
}
const apiCall = async (requestOptions, data, updateData, setIsDisabled) => {
  const url = `${API_HOST}:${PORT}/${chooseEnv()}`
  console.log(`url: ${url}`)
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const apiResponse = JSON.parse(result)
      console.log('apiCall data' + JSON.stringify(data))
      updateData({
        ...data,
        output: apiResponse?.data,
        timeout: data.timeout + 1
      })
      console.log(result)
      console.log('data updated')
    })
    .catch((error) => console.log('error', error))
    .finally(() => {
      setIsDisabled(false)
      console.log('finally')
    })
}

const apiRequester = (data, updateData, setIsDisabled) => {
  setIsDisabled(true)
  console.log('apiRequester')
  console.log('data: ' + JSON.stringify(data))

  const promptPayload = JSON.stringify({
    companyName: data.companyName,
    companyDesc: data.companyDesc,
    productDesc: data.productDesc,
    targetAudience: data.targetAudience
  })

  console.log('promptPayload: ' + promptPayload)
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: promptPayload,
    redirect: 'follow'
  }

  pause(TIMEOUT_DEFAULT).then(() =>
    apiCall(requestOptions, data, updateData, setIsDisabled)
  )

  console.log('make request')
}

export default apiRequester

// try {
//   new Promise((resolve) => {
//     let timeout = TIMEOUT_DEFAULT; //props.data.timeout;
//     setTimeout(resolve, timeout);
//   });
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("wait over")
// }
