/* eslint-disable */
import { useForm } from "react-hook-form";
import React, {useEffect } from "react";
import apiRequester from "./apiRequester";
import { useNavigationContext } from '../context/context'

const MIAForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const { data, setData
} = useNavigationContext();


  const handleApi = async () => {
    props.setIsDisabled(true);
    apiRequester(data, setData, props.setIsDisabled);
  };

  const submitClickHandler = (formData) => {
    console.log(
      `submitClickHandler form` +
      JSON.stringify(formData)
    );

    console.log(setData);
    setData({l:32});
    // setData({
    //   ...formData,
    //   ...data, y: 21
    // });

    console.log(`submitClickHandler after update ` + JSON.stringify(data));
    // handleApi() //.then(() => { }).finally(() => {console.log("handleApi FINISHED") });
  };

  useEffect(() => { console.log("MIAForm rendered") }, [data])

  return (
    <form
      onSubmit={handleSubmit(submitClickHandler)}
    >
      <div>
        <label>
          Company description
          <div>
            <textarea
              // defaultValue="Datadog is an essential monitoring platform for cloud applications. It brings together data from servers, containers, databases, and third-party services to make your stack entirely observable. These capabilities help DevOps teams avoid downtime, resolve performance issues, and ensure customers are getting the best user experience."
              {...register("companyDesc")}
            />
          </div>
        </label>
      </div>

      <div>
        <label>
          Company name
          <div>
            <input
              // defaultValue="Datadog"
              {...register("companyName")}
            />
          </div>
        </label>
      </div>
      {/* include validation with required or other standard HTML validation rules */}

      <div>
        <label>
          Product description
          <div>
            <textarea
              // defaultValue="End-to-end distributed tracing and service-centric observability at scale, correlated to all telemetry."
              {...register("prodDesc")}
            />
            {/* <input defaultValue="..." /> */}
          </div>
        </label>
      </div>

      <div>
        <label>
          Target audience
          <div>
            <textarea
              type="text"
              // defaultValue="Software engineers and technical leaders"
              {...register("targetAudience")}
            />
            {/* <textarea type="text" defaultValue="..."  /> */}
          </div>
        </label>
      </div>
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <div>
        <input
          type="submit"
          title="SUBMIT"
          value="Generate Text"
          disabled={props.disabledState}
        />
      </div>
    </form>
  );
};

export default MIAForm;

//   try {
//     // your async function here
//     await new Promise((resolve) => {
//       let timeout = TIMEOUT_DEFAULT; //props.data.timeout;
//       setTimeout(resolve, timeout);
//     });

//     apiRequester(props.data, props.updateData, props.setIsDisabled);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     props.setIsDisabled(false);
//   }
