import { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

const Grid = () => {
  const [jobList, setJobList] = useState();

  const fetchData = async () => {
    try {
      const { data: jobs } = await axios.get("./data.json");
      setJobList(jobs);
      console.log(jobs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-3 gap-x-6 gap-y-16">
        {jobList && jobList.map((job) => <Card key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default Grid;
