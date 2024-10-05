const ShowDetails = ({ onShowModal, img, title, descript }) => {
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen z-50 bg-slate-600 backdrop-blur-sm"
        >
            <div
                className="absolute bg-[#191D26] text-gray-100 left-2/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[684px] p-10 max-h-[90vh] custom-scrollbar overflow-auto"
            >
                <img src={img} alt={title} className="w-full rounded-lg mb-4 " />
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="mb-4">{descript}</p>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition" onClick={() => onShowModal(false)}>close</button>
            </div>

        </div>
    );
};

export default ShowDetails;