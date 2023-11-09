import ImageBubble from "@/components/ImageBuble";

const APICoverage = () => {
    return (
        <div className="w-full font-poppins bg-white flex flex-col justify-center items-center">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full container max-w-7xl relative h-full">
                <div className="my-40 ">
                    <h1 className="font-bold text-4xl text-black leading-snug">
                        The largest API coverage <br /> across all commercial<br /> service-offering institutions in Africa
                    </h1>
                    <p className="text-lg text-gray-600 font-medium mt-5">
                        Get useful data from all commercial service providers spanning 10 industries aggregated into services in Nigeria. Currently in beta for Kenya, Ghana, and South Africa.
                    </p>
                    <button className="bg-blue-500 font-semibold text-lg shadow-xl py-4 px-7 rounded-lg mt-10">View Coverage</button>
                </div>

                <div className="h-full relative ">
                    <ImageBubble />
                </div>
            </div>
        </div>
    )
}

export default APICoverage;