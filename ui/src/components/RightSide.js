/* eslint-disable */
import React from 'react'
import apiRequester from './apiRequester'
import { v4 as uuidv4 } from 'uuid'
/*
The right side has a button to reload the api response and a text box to display the api response.
*/

const TIMEOUT_DEFAULT = 1000
const RightSide = (props) => {
  // const [isDisabled, setIsDisabled] = useState(false);
  // TODO: move the disabled logic to the App file
  // I want to disable all buttons when the api is being called
  // and then re-enable them when the api call is done

  const reloadClickHandler = async (event) => {
    apiRequester(props.data, props.updateData, props.setIsDisabled)
  }
  //   props.setIsDisabled(true);
  //   try {
  //     // your async function here
  //     await new Promise((resolve) => {
  //       console.log("timeout: " + props.data.timeout + " seconds");
  //       let timeout = TIMEOUT_DEFAULT; // props.data.timeout * 1000 * .5
  //       setTimeout(resolve, timeout);
  //     });

  //     apiRequester(props.data, props.updateData, props.setIsDisabled);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {

  //     // props.setIsDisabled(false);
  //   }
  // };

  /*
  a state handler is passed down as part of the props
  */

  return (
    <div>
      <h1>Your new ideas:</h1>

      <div className="response">
        {props?.data.output.split('\n').map((e) => (
          <p key={uuidv4()}>{e}</p>
        ))}
      </div>

      {/* <h3>{JSON.stringify(props?.data)}</h3> */}
      {/* <h3>{JSON.stringify(data)}</h3> */}
      {/* <h3>
        {
          props.data?.output ? JSON.stringify(props?.data?.output) : "no data" // JSON.stringify(data)
        }
      </h3> */}
      <button onClick={reloadClickHandler} disabled={props.disabledState}>
        {/* <button> */}
        Reload
      </button>
    </div>
  )
}

export default RightSide
