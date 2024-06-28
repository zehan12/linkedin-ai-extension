export interface GenerateResponse {
    generatedResponse: string;
}

export const getGeneratedResponse = (prompt: string):Promise<GenerateResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (prompt.trim().length !== 0) {
                resolve({
                    generatedResponse:
                        "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
                })
            } else {
                reject({ error: "Invalid prompt" })
            }
        }, 100)
    })
}
