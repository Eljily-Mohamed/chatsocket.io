import { FiSend } from "react-icons/fi";
const Input = ({theme,setMessage, sendMessage, message }) => (
  <form className={`${theme}  lg:w-[600px] inset-x-0 bottom-0 p-[10px] border-[0.7px] flex justify-between rounded-[4px] `}>
    <input
      className="outline-none border-none"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <FiSend
      className="text-[30px] text-red-500"
      onClick={(e) => sendMessage(e)}
    >
      Send
    </FiSend>
  </form>
);

export default Input;
