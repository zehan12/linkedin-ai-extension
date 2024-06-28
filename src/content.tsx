import React, { useEffect, useState, useRef } from "react";
import cssText from "data-text:~style.css";
import type {
  PlasmoCSConfig,
  PlasmoGetOverlayAnchor
} from "plasmo";
import QuickReplyModal from "~features/QuickReplyModal";
import QuickReplyButton from "~features/QuickReplyButton";

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
};

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(".msg-form__contenteditable");

const PlasmoOverlay = () => {
  console.log("new code now mf")
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);


  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const messageTextArea = document.querySelector(".msg-form__contenteditable");

    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = () => {
      setTimeout(() => {
        setFocused(false);
      }, 400)
    };

    if (messageTextArea) {
      messageTextArea.addEventListener("focus", handleFocus);
      messageTextArea.addEventListener("blur", handleBlur);
    }


    return () => {
      if (messageTextArea) {
        messageTextArea.removeEventListener("focus", handleFocus);
        messageTextArea.addEventListener("blur", handleBlur);
      }

    };
  }, []);

  return (
    <>
      <QuickReplyButton
        isFocused={isFocused}
        isModalVisible={isModalVisible}
        handleModalOpen={handleModalOpen}
      />
      {isModalVisible && (
        <QuickReplyModal
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};

export default PlasmoOverlay;
