import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import HeaderConditionHall from "./Headers/HeaderConditionHall/HeaderConditionHall"

function ConditionHall() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden items-center bg-[#ADADAD]/10">
        <Header />
            <div className="p-8 mt-[80px]">
              <HeaderConditionHall />
            </div>
        <Footer />
      </div>
    </>
  )
}

export default ConditionHall;