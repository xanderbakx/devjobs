const Card = ({ job }) => {
  return (
    <div className="bg-white rounded-lg p-6 w-72">
      <img src={job.logo} alt={`${job.company} logo`} />
      <p>{job.postedAt}</p>
      <p>{job.contract}</p>
      <p>{job.position}</p>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default Card;
