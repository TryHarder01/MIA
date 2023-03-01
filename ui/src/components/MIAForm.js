/* eslint-disable */
import { useForm } from "react-hook-form";
import React from "react";
import apiRequester from "./apiRequester";

const MIAForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const handleApi = async () => {
    props.setIsDisabled(true);
    apiRequester(props.data, props.updateData, props.setIsDisabled);
  };

  const submitClickHandler = (formData) => {
    console.log(
      `submitClickHandler ` +
      JSON.stringify(formData)
    );
    props.updateData({ ...props.data, component: "miaform.js" })
    props.updateData({
      ...formData,
      ...props.data, y: 21
    });
    console.log(`submitClickHandler after update ` + JSON.stringify(props.data));
    handleApi().then(() => { }).finally(() => {console.log("handleApi FINISHED") });
  };

  const changeClickHandler = (formData) => {
    console.log(`changeClickHandler ` + formData);
    // props.updateData({ ...formData, ...props.data, y: 1 });
    // console.log(`changeClickHandler after update ` + JSON.stringify(props.data));

  };
  return (
    <form
      // onChange={handleSubmit(changeClickHandler)}
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
