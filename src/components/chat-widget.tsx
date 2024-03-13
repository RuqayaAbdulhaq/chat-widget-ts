import { createSignal } from "solid-js";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", "z-index": "1000" }}>
      <img style={{cursor: "pointer"}} src="https://chat-widget-ts.vercel.app/chat.png" alt="chat.png" onClick={() => setIsOpen(!isOpen())}/>
      <div style={{ display: isOpen() ? "block" : "none", position: "absolute", bottom: "60px", right: "0", width: "200px", height: "300px", background: "#fff", 
      "box-shadow": "0 0 10px rgba(0,0,0,0.2)", overflow: "auto", padding: "10px" }}>
        
      </div>
    </div>
  );
};

export default ChatWidget;
