# LinkedIn AI

The LinkedIn AI Reply Chrome Extension simplifies message replies on LinkedIn with dynamic AI assistance, featuring modal interaction for command input and response generation. Built with React, TypeScript, and Tailwind CSS, it evaluates candidates on problem-solving, design fidelity, and execution speed.

## Screenshots

 ##### Show the AI icon when the user focuses on the LinkedIn message input field. The icon should disappear when the input field is no longer focused.
[![Screenshot-from-2024-06-30-04-11-59.png](https://i.postimg.cc/NffCnpFq/Screenshot-from-2024-06-30-04-11-59.png)](https://postimg.cc/V5pFr9XD)

##### Display a center-aligned modal when clicking on the icon. Clicking anywhere outside this modal should close it.
[![Screenshot-from-2024-06-30-04-12-04.png](https://i.postimg.cc/pL30pvZR/Screenshot-from-2024-06-30-04-12-04.png)](https://postimg.cc/DSdQMtHM)

##### The user can enter any command in the modal's input field.
[![Screenshot-from-2024-06-30-04-18-17.png](https://i.postimg.cc/wj1fqMDw/Screenshot-from-2024-06-30-04-18-17.png)](https://postimg.cc/9Djt1W89)

#####  Clicking on the “Generate” button should just display this dummy response: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask." The “Regenerate” button should be non-functional.
[![Screenshot-from-2024-06-30-04-18-25.png](https://i.postimg.cc/sXrw4JqL/Screenshot-from-2024-06-30-04-18-25.png)](https://postimg.cc/2q0Qznzd)

 ##### When the user clicks on the insert button, the generated static text should be inserted into the message input field.
[![Screenshot-from-2024-06-30-04-18-37.png](https://i.postimg.cc/Kjcfd8Zr/Screenshot-from-2024-06-30-04-18-37.png)](https://postimg.cc/sQ85WyGv)

## Video Demonstration
https://github.com/zehan12/Chat_GPT_Writer_Task/assets/73664886/126960ab-650b-41f5-87cf-9b93a9fd4cda

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

See how to load the extension: https://docs.plasmo.com/framework/workflows/dev#loading-the-extension

For further guidance, [visit our Documentation](https://docs.plasmo.com/).


## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

### Technology Stack

* HTML5
* Tailwind CSS
* TypeScript
* ReactJS
