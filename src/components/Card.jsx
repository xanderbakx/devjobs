const Card = ({ job }) => {
  return (
    <div className="bg-white rounded-lg p-6 w-[305px] h-[228px] relative">
      <div
        style={{
          backgroundColor: job.logoBackground,
        }}
        className={`flex items-center justify-center w-[50px] h-[50px] rounded-2xl absolute -top-6`}
      >
        <img className="" src={job.logo} alt={`${job.company} logo`} />
        {/* <p>test</p> */}
      </div>
      <div className="flex flex-row pt-5 pb-3 text-darkgrey">
        <p>{job.postedAt}</p>
        <p className="px-2 font-black">•</p>
        <p>{job.contract}</p>
      </div>
      <p className="font-[900] pb-3">{job.position}</p>
      <p className="pb-6 text-darkgrey">{job.company}</p>
      <p className="text-violet font-semibold">{job.location}</p>
    </div>
  );
};

export default Card;
