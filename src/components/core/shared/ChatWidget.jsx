import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CHATRA_ID = "YaYd2PZTKjF6F4qHv";

const ChatWidget = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.Chatra) {
      window.ChatraID = CHATRA_ID;
      window.Chatra =
        window.Chatra ||
        function () {
          (window.Chatra.q = window.Chatra.q || []).push(arguments);
        };

      const script = document.createElement("script");
      script.id = "chatra-script";
      script.async = true;
      script.src = "https://call.chatra.io/chatra.js";
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  useEffect(() => {
    const chatWidget = document.getElementById("chatra-widget");
    if (chatWidget) {
      chatWidget.style.display = pathname.startsWith("/") ? "block" : "none";
    }
  }, [pathname]);

  return <div id="chatra-widget" />;
};

export default ChatWidget;
