import React, { useState, useEffect } from "react";

const generatePagination = (
    n: number,
    index: number = 1
): (number | null)[] => {
    let arr: (number | null)[] = [];

    if (n <= 1) {
        return [];
    } else if (n <= 6) {
        return [1, 2, 3, 4, 5, 6];
    } else if (index == 1 || index == 2) {
        return [1, 2, 3, null, n - 1, n];
    } else if (index) {
        arr = [1, null, index - 1, index, index + 1, null, n];
    }

    return arr;
};

interface props {
    maxIndex: number;
}

const MoviesPagination: React.FC<props> = ({ maxIndex }) => {
    console.log(maxIndex);
    const [paginationArray, setPaginationArray] = useState<(number | null)[]>(
        []
    );

    useEffect(() => {
        let arr = generatePagination(maxIndex);
        console.log(arr);
        setPaginationArray(arr);
    }, [maxIndex]);

    return (
        <React.Fragment>
            <div className="h-8 w-auto  mt-auto flex flex-row text-white font-bold">
                <TitledIndex title="First" />

                <TitledIndex title="Prev" />
                {paginationArray.map((pagIndex, idx) => {
                    if (pagIndex !== null) {
                        return <PaginationIndex index={pagIndex} key={idx} />;
                    } else {
                        return <TitledIndex title="..." key={idx} />;
                    }
                })}
                <TitledIndex title="Next" />
                <TitledIndex title="Last" />
            </div>
        </React.Fragment>
    );
};

interface IndexesProps {
    index: number;
}

export const PaginationIndex: React.FC<IndexesProps> = ({ index }) => {
    return (
        <div className="w-8 h-full flex items-center justify-center bg-red-300 mx-1 rounded-md cursor-pointer">
            {index}
        </div>
    );
};

export const TitledIndex: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="bg-red-300 w-16 h-full px-1 mx-1 flex items-center justify-center rounded-md cursor-pointer">
            {title}
        </div>
    );
};

export default MoviesPagination;
