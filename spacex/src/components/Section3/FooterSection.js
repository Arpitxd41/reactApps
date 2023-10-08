function footerSection() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    return (
        <>
            <div className="footerSection flex flex-row border border-t-amber-300/40 border-x-0 border-b-0 justify-between px-16 text-gray-300 text-sm pt-8 pb-4 mt-10">
                <p className="dateCounter">{formattedDate}</p>
                <p className="policies font-semibold">© SPACEX Policies</p>
                <p className="">Affiliations</p>
            </div>
        </>
    )
}

export default footerSection;