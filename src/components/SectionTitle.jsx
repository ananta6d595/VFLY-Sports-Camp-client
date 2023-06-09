const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-4xl font-bold bg-blue-600 text-white rounded-2xl uppercase py-4">{heading}</h3>
            <p className="text-orange-500 my-2">
                {" "}
                {`________ ${subHeading} ________`}{" "}
            </p>
        </div>
    );
};

export default SectionTitle;
