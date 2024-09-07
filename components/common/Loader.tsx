"use client"
import { BeatLoader, CircleLoader, DotLoader, SyncLoader } from "react-spinners";

const Loader = ({ loading }: { loading: boolean }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-800 z-50 opacity-0 transition-opacity duration-300 ${loading && 'opacity-[99%]'}`}>
            <BeatLoader
                color={'rgba(57, 255, 20)'}
                loading={loading}
                size={35}
                speedMultiplier={1.5}
            />
        </div>
    );
};

export default Loader;