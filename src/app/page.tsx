export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center mt-28 md:mt-10">
                <div className="font-headingNow text-7xl md:text-9xl">WHAT WILL YOU CHOOSE?</div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <img src="/HextechEdited.png" alt="Hextech picture" className="h-1/2 w-1/2 md:h-2/5 md:w-2/5 animate-float"/>
                    <img src="/ShimmerEdited.png" alt="Shimmer picture" className="h-1/2 w-1/2 md:h-2/5 md:w-2/5 animate-float"/>
                </div>
            </div>
        </>
    );
}
