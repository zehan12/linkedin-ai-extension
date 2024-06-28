import { useState, type FC } from "react";
import sendHorizontal from "../assets/send_horizontal.png";
import refresh from "../assets/refresh.png";
import downArrow from "../assets/down_arrow.png";
import { getGeneratedResponse, type GenerateResponse } from "~services/chatGpt.service";



interface QuickReplyModalProps {
    handleModalClose: () => void;
}

const QuickReplyModal: FC<QuickReplyModalProps> = ({
    handleModalClose,
}) => {

    const [prompt, setPrompt] = useState<string>("");
    const [userPrompt, setUserPrompt] = useState<string>("")
    const [isResponseGenrated, setResponseGenrated] = useState<boolean>(false);
    const [genratedResponse, setGeneratedResponse] = useState<string>("");

    const handleGenerateResponse = async (): Promise<void> => {
        if (prompt.trim().length !== 0) {
            setResponseGenrated(true);
            setUserPrompt(prompt);

            try {
                const response = await getGeneratedResponse(prompt) as GenerateResponse;
                setPrompt("");
                setGeneratedResponse(response.generatedResponse);
            } catch (error) {
                console.error('Error generating response:', error);
            }
        }
        return;
    };

    const handleInsertText = () => {
        const messageTextArea = document.querySelector(".msg-form__contenteditable").children[0] as HTMLElement;
        const placeholder = document.querySelector(".msg-form__placeholder") as HTMLElement;
        const btn = document.querySelector(".msg-form__send-btn") as HTMLElement;

        if (messageTextArea && placeholder && btn) {
            placeholder.classList.remove("msg-form__placeholder");
            btn.classList.remove("artdeco-button--disabled");
            btn.removeAttribute("disabled");
            messageTextArea.textContent = genratedResponse;
            return handleModalClose();
        }
    };


    return (<div id="modal" onClick={handleModalClose} className="fixed inset-0 bg-black/70 bg-opacity-70 flex justify-center items-center">
        <div onClick={(e) => e.stopPropagation()} className="w-3/12 gap-4 flex flex-col justify-evenly bg-[#F9FAFB] p-4 rounded-lg shadow-xl bg-opacity-100">
            {isResponseGenrated && <div className='h-fit [&>*:nth-child(odd)]:ml-auto'>
                <div className="w-max max-w-sm m-4 px-4 py-2 text-gray-600 rounded-2xl  bg-gray-300">
                    {userPrompt}
                </div>
                <div className="w-max max-w-sm m-4 px-4 py-2 rounded-2xl text-gray-600 bg-blue-200">
                    {genratedResponse}
                </div>
            </div>}
            <input
                type='text'
                name='prompt'
                value={prompt}
                placeholder='Your prompt'
                onChange={(e) => setPrompt(e.target.value)}
                className='w-full border-[1px] p-2 rounded-md focus:outline-0'
            />
            <div className='flex justify-end gap-2'>
                {
                    !isResponseGenrated ?
                        (
                            <button onClick={handleGenerateResponse} className='flex items-center gap-2 px-3 py-1.5 font-semibold bg-blue-500 text-white rounded-md'>
                                <img className="w-5" alt="send_horizontal" src={sendHorizontal} />
                                <p>Generate</p>
                            </button>

                        ) :
                        (<>
                            <button onClick={handleInsertText} className='flex items-center gap-2 px-3 py-1.5 font-semibold bg-white text-gray-500 border-[1px] border-gray-500 rounded-md'>
                                <img className="w-3" src={downArrow} />
                                <p>Insert</p>
                            </button>
                            <button className='flex items-center gap-2 px-3 py-1.5 font-semibold bg-blue-500 text-white rounded-md'>
                                <img className="w-3" src={refresh} />
                                <p>Regenerate</p>
                            </button>
                        </>)
                }
            </div>
        </div>
    </div>)
}

QuickReplyModal.displayName = "QuickReplyModal";
export default QuickReplyModal;