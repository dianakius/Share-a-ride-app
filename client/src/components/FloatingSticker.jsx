import { useEffect, useState } from "react";

function FloatingSticker() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-12 right-10 z-[9999] pointer-events-auto">
      <div className="
        bg-pink-500 
        text-white 
        px-8 
        py-6 
        rounded-[2rem] 
        shadow-2xl 
        text-2xl 
        font-bold
        rotate-[-6deg]
        animate-bounce
      ">
        🚀 LET’S RIDE!
      </div>
    </div>
  );
}

export default FloatingSticker;
