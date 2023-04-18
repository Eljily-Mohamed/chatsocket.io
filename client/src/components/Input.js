import { FiSend } from "react-icons/fi";
const Input = ({ setMessage, sendMessage, message }) => (
  <form className="p-[10px] border-[0.7px] w-[90%] m-auto flex justify-between rounded-[4px] ">
    <input
      className="outline-none border-none "
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <FiSend
      className="text-[30px] text-[#19e564]"
      onClick={(e) => sendMessage(e)}
    >
      Send
    </FiSend>
  </form>
);

export default Input;
