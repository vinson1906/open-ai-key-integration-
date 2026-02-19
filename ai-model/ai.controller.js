



const aiCOntroller = async (req, res) => {
    try {


        console.log("running the ai model...")
        const apiKey = process.env.OPENROUTER_API_KEY;
        let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "stepfun/step-3.5-flash:free",
                "messages": [
                    {
                        "role": "user",
                        "content": "What is the meaning of life?"
                    }
                ],
                "reasoning": { "enabled": true }
            })
        });

        const result = await response.json();
        response = result.choices[0].message;

        const messages = [
            {
                role: 'user',
                content: "i have 3 rupees my friend give me 3 rupees now how many rupees i have",
            },
            {
                role: 'assistant',
                content: response.content,
                reasoning_details: response.reasoning_details, 
            },
            {
                role: 'user',
                content: "Are you sure? Think carefully.",
            },
        ];


        const response2 = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "model": "stepfun/step-3.5-flash:free",
                "messages": messages  
            })
        })

        const result2 = await response2.json();
        const finalMessage = result2.choices[0].message.content;

        res.json({
            data: finalMessage
        })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = aiCOntroller


