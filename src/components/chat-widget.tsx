import { createSignal } from "solid-js";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", "z-index": "1000" }}>
      <button class="bg-[#d3d3d3] rounded-[50%] p-[10px] text-[#fff]"
      onClick={() => setIsOpen(!isOpen())}>
        💬
      </button>
      <div class="absolute bottom-[60px] right-0 w-[300px] rounded-[15px] h-[400px] bg-white shadow overflow-auto p-[10px]" 
      style={{ display: isOpen() ? "block" : "none"}}>
        
      </div>
    </div>
  );
};

export default ChatWidget;
