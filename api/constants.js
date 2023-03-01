/*
not sure how to get constants file working
*/


export const API_DUMMY_RESPONSE_A = {
    id: "cmpl-6nayZONxrV7yIYcnliklevunew3bZ",
    object: "text_completion",
    created: 1677278227,
    model: "text-davinci-003",
    choices: [
      {
        text: "\n\nA cat is a furry, four-legged, house pet that is often a beloved companion to its owners. They usually have soft, silky fur that can range in color from white to black, gray, and even orange or other colors. A cat's eyes are typically almond-shaped and can be either yellow, green, or blue. They have a long, slender tail and pointy ears that give them an alert and curious look. Cats are curious and playful creatures that love to climb, scratch, and explore. They are known for their intelligence and can even be taught to perform tricks. Cats also like to groom themselves, often licking their fur and taking long naps throughout the day.",
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
    usage: { prompt_tokens: 4, completion_tokens: 142, total_tokens: 146 },
  };
  
  export const API_DUMMY_RESPONSE_B = {
    id: "xxxx-6nayZONxrV7yIYcnliklevunew3bZ",
    object: "text_completion",
    created: 1677278227,
    model: "text-davinci-003",
    choices: [
      {
        text: "\n\nSECOND RESPONSE.",
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
    usage: { prompt_tokens: 4, completion_tokens: 142, total_tokens: 146 },
  };
  

export const API_PROD_A = {
    data: "foo"
}

export const API_PROD_B = {
    data: "AAA"
 }

//  export {API_DUMMY_RESPONSE_A, API_DUMMY_RESPONSE_B}