import React from "react";

const Test = () => {
    return (
        <div className="flex h-full">
            <div className="flex-grow">
                {/* <div
                    className="flex items-stretch"
                    style={{ height: "calc(100% - 1.375rem)" }}
                >
                    <div className="h-full w-16 bg-gray-500 flex-col flex"></div>
                    <div className="flex flex-grow">
                        <div className="transition md:transition-none fixed md:relative md:translate-x-0 top-0 bottom-0 bg-gray-200 dark:bg-gray-800 transform z-50 md:z-0 left-0 md:rounded-tl-lg -translate-x-full md:translate-x-0 flex md:w-60 md:min-w-[15rem] w-78 min-w-[19.5rem]"></div>
                    </div>
                    <div className="flex flex-col flex-grow"></div>
                </div> */}
                <div
                    className="flex items-stretch"
                    style={{ height: "calc(100% - 1.375rem)" }}
                >
                    <div className="side1 w-16 bg-gray-100"></div>
                    <div className="flex flex-grow">
                        <div className="flex flex-col w-64 bg-red-200 sidebar relative">
                            <div className="w-full h-full relative overflow-y-auto">
                                <div className="text-xl my-10">A</div>
                                <div className="text-xl my-10">A</div>
                                <div className="text-xl my-10">A</div>
                                <div className="text-xl my-10">A</div>
                                <div className="text-xl my-10">A</div>
                                <div className="text-xl my-10">A</div>
                                <div className="text-xl my-10">A</div>
                                <div className="text-xl my-10">A</div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h1 className="w-full bg-green-200 p-4 h-auto">
                                ICI TITRE
                            </h1>
                            <div className="h-full p-4">
                                <div className="flex flex-col bg-blue-200 w-full h-full relative overflow-y-auto">
                                    <div className="text-xl my-10">A</div>
                                    <div className="text-xl my-10">A</div>
                                    <div className="text-xl my-10">A</div>
                                    <div className="text-xl my-10">A</div>
                                    <div className="text-xl my-10">A</div>
                                    <div className="text-xl my-10">A</div>
                                    <div className="text-xl my-10">A</div>
                                    <div className="text-xl my-10">A</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
