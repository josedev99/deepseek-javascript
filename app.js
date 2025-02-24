const API_KEY = "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";
const API_URL = 'https://openrouter.ai/api/v1/chat/completions'

let headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
}

let data = {
    "method": "post",
    body: JSON.stringify({
        model: "deepseek/deepseek-chat:free",
        messages: [{"role": "user", "content": "Hola?"}],
    }),
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
}
fetch(API_URL,data)
.then((response)=>response.json()).then((result)=>{
    console.log(result.choices[0].message);
    let messages = result.messages
}).catch((err)=>{
    console.log(err)
})
