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
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
