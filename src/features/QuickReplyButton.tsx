import wandSparklesIcon from "../assets/wand_sparkles.png";
import sparklesIcon from "../assets/sparkles.png";

const QuickReplyButton = ({ isFocused, isModalVisible, handleModalOpen }) => {
    return (<div
        className="flex flex-row items-center absolute top-28 -right-[400px]"

    >
        {
            isModalVisible && !isFocused &&
            <img className="w-8 mt-2" alt="sparkles" src={sparklesIcon} />
        }
        {
            isFocused &&
            <button onClick={handleModalOpen} className="w-12">
                <img  alt="wand_sparkles" src={wandSparklesIcon} />
            </button>
        }
    </div>)
}

QuickReplyButton.displayName = "QuickReplyButton";
export default QuickReplyButton;