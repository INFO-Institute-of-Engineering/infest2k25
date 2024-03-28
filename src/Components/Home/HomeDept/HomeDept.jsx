import HomeDeptCard from "./HomeDeptCard/HomeDeptCard.jsx";

const Dept = () => {
    return (
        <div className="my-[5%]">
            <div>
                <div>
                    <div className="my-4 relative text-[60px] font-extrabold text-center [-webkit-text-stroke:1px_#0092ff] text-transparent">D E P A R T M E N T S<p className="[-webkit-text-stroke:1px_#000] font-extrabold text-black text-[30px] text-center absolute top-[calc(100%-50px)] left-0 right-0 mx-auto">DEPARTMENTS</p></div>
                </div>

                <div className="w-[90%] mx-auto">
                    <HomeDeptCard />
                </div>

            </div>
        </div>
    )
}

export default Dept