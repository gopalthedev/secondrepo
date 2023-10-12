import LeftMenu from "../components/LeftMenu";
import ChatDetail from "../components/ChatDetail";

function WhatsApp() {
  return (
    <>
      {/* 2 components cointainer */}
      <div className="flex justify-center items-center w-screen h-screen bg-[#111a21] ">
        <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] w-full 2xl:w-10/12 transition-all">
          {/* LeftMenu */}
          <div className="bg-[#111a21] w-1/3 ">
            <LeftMenu />
          </div>

          {/* ChatDetail */}
          <div className="bg-[#222f35] flex-1">
            <ChatDetail />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatsApp;
