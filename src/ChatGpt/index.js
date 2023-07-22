import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    organization: "org-3O4hmHwSJuH9JUW3omq6kMNp",
    apiKey: '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'
})
const openai = new OpenAIApi(configuration);

export const generateCompletion = async (content) => {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "user",
                    content
                }
            ],
            temperature: 0,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        console.log(response.data.choices[0].message.content)
        return response.data.choices[0].message.content
    }
    catch (err) {
        console.error(err)
    }
}