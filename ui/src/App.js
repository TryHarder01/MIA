import 'bootstrap/dist/css/bootstrap.css'

// import {useForm} from 'react-hook-form';
import logo from './assets/main.png'
import './styles/App.css'
import React, { useState } from 'react'

import MIAForm from './components/MIAForm.js'
import RightSide from './components/RightSide'

/*

*/

export default function App () {
  const [isDisabled, setIsDisabled] = useState(false)

  const [data, setData] = useState({
    timeout: 10,
    output: '',
    z: 2,
    y: 0,
    component: 'app.js'
  })
  console.log('App.js rendered')
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (formData) => {
  //   setData({ ...data, ...formData });
  //   console.log(formData);
  // };

  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Marketing Ideation Assistant</h1>
        <p>Create inteligent campaigns for your company in a flash </p>

      </header>
      <div className="container text-left">
        <div className="row">
          <div className="col">
            <MIAForm
              data={data}
              updateData={setData}
              disabledState={isDisabled}
              setIsDisabled={setIsDisabled}
            />
            {/* TODO: modify props */}
          </div>
          <div className="col">
            <RightSide
              data={data}
              updateData={setData}
              disabledState={isDisabled}
              setIsDisabled={setIsDisabled}
            />
          </div>
          {/* {this.data.name ? "link"  : "ee"} */}
        </div>
      </div>
    </div>
  )
}
