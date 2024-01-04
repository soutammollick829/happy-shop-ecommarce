import { FaRegEnvelope } from "react-icons/fa";

const Subscribe = () => {
    return (
        <div className="text-center bg-slate-100 p-10 space-y-3 mx-5 mb-20">
            <FaRegEnvelope className="mx-auto text-6xl text-[#ffd90c]"/>
            <p className="text-xl font-semibold">Newsletter</p>
            <p>Subscribe with us to get special offers and other discount information</p>
            <input type="text" placeholder="Enter your mail" className="input input-bordered input-warning w-full text-center rounded-none" /><br />
            <button className="btn rounded-none uppercase bg-slate-800 text-white w-40 hover:bg-[#ffd90c] hover:text-black">subscribe</button>
        </div>
    );
};

export default Subscribe;