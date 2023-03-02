
require("dotenv").config();
const { response } = require("express");
const express = require("express");
// const req = require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const app = express();
const port = 3001;

//////////////////
//////////////////
//////////////////
// export const API_DUMMY_RESPONSE_A = {
//   id: "cmpl-6nayZONxrV7yIYcnliklevunew3bZ",
//   object: "text_completion",
//   created: 1677278227,
//   model: "text-davinci-003",
//   choices: [
//     {
//       text: "\n\nA cat is a furry, four-legged, house pet that is often a beloved companion to its owners. They usually have soft, silky fur that can range in color from white to black, gray, and even orange or other colors. A cat's eyes are typically almond-shaped and can be either yellow, green, or blue. They have a long, slender tail and pointy ears that give them an alert and curious look. Cats are curious and playful creatures that love to climb, scratch, and explore. They are known for their intelligence and can even be taught to perform tricks. Cats also like to groom themselves, often licking their fur and taking long naps throughout the day.",
//       index: 0,
//       logprobs: null,
//       finish_reason: "stop",
//     },
//   ],
//   usage: { prompt_tokens: 4, completion_tokens: 142, total_tokens: 146 },
// };

// export const API_DUMMY_RESPONSE_B = {
//   id: "xxxx-6nayZONxrV7yIYcnliklevunew3bZ",
//   object: "text_completion",
//   created: 1677278227,
//   model: "text-davinci-003",
//   choices: [
//     {
//       text: "\n\nSECOND RESPONSE.",
//       index: 0,
//       logprobs: null,
//       finish_reason: "stop",
//     },
//   ],
//   usage: { prompt_tokens: 4, completion_tokens: 142, total_tokens: 146 },
// };


const API_PROD_A = {
  data: "foo"
}
 const API_PROD_B = {
  data: "AAA"
}

//////////////////
//////////////////
//////////////////
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Replace "http://example.com" with the domain of your website
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  console.log(`${req.method} ${req.url} - ${new Date()}`);
  console.log(JSON.stringify(req.body));
  console.log(req.body);

  next();
});

let counter = 0;


const getFromApi = (prompt) => {
  // response
  console.log("RESPONSE getFromApi");
  try {
    
    console.log("The Promise is resolved!", response);
    let r = "a"
  } catch(error) {
    console.error("The Promise is rejected!", error);
  } finally {
    console.log(
      "The Promise is settled, meaning it has been resolved or rejected.", response
    );

    return r;  // this is the response
  }
};

const createPrompt = (data) => {
  return JSON.stringify({
    prompt: `I am going to ask you a question. No matter what do not repeat the question back to me. Brainstorm 6 original marketing campaigns for ${data.companyName}, ${data.companyDesc}. Let your imagination run wild. Provide as much detail as possible and a creative brief.
  . PRODUCT DESCRIPTION: ${data.productDesc} TARGET AUDIENCE: ${data.targetAudience}`,
  });
};

app.post("/prod", (req, res) => {
  console.log("PROD got called!");
  //TODO: move the promopt interpolation logic to the backend
  console.log(`prompt inputs-- ${JSON.stringify(req.body)}`);
  const prompt = createPrompt(req.body);
  console.log("PROMPT", prompt)


  const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  response.then((value) => {
    console.log("The value.data is resolved!", value.data);
    res.send({ data: value.data.choices[0].text, a: 2 });
  })
  .catch((error) => {
    console.error("The Promise is rejected!", error);
  })
  .finally(() => {
    console.log(
      "The Promise is settled, meaning it has been resolved or rejected."
    );
  });    

  console.log("RESPONSE", response);
  // const response =  getFromApi(req.body.prompt);
});

// post request that logs the request body
app.post("/mock", (req, res) => {
  counter++;
  console.log("got called!");
  // log the request
  console.log(`prompt inputs-- ${JSON.stringify(req.body)}`);
  const prompt = createPrompt(req.body);
  console.log("PROMPT", prompt)
  //todo: make api call with incoming body and return
  if (counter % 2) {
    res.send(API_PROD_A);
  } else {
    res.send(API_PROD_B);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  // console.log(`key: ${process.env.OPENAI_API_KEY}`);
});
