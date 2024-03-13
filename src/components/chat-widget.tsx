import { createSignal } from "solid-js";
// import ChatImg from "../assets/chat.png";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", "z-index": "1000" }}>
      {/* <button class="bg-[#777f91]" style={{ padding: "10px", "border-radius": "50%", color: "#fff" }} 
      onClick={() => setIsOpen(!isOpen())}>
        💬
      </button> */}
      <img style={{cursor: "pointer"}} src="/chat.png" alt="chat.png" onClick={() => setIsOpen(!isOpen())}/>
      <div style={{ display: isOpen() ? "block" : "none", position: "absolute", bottom: "60px", right: "0", width: "200px", height: "300px", background: "#fff", 
      "box-shadow": "0 0 10px rgba(0,0,0,0.2)", overflow: "auto", padding: "10px" }}>
        
      </div>
    </div>
  );
};

export default ChatWidget;
