import React from "react";
import { Button, Tag } from "../shared/_index";
import { remove } from "../assets/images/_index";
import JobCard from "./JobCard";

interface Props {
  data: any;
  filters: string[];
  addFilter(tag: string): void;
  removeFilter(tag: string): void;
  clearFilter(): void;
}

export default ({
  data,
  filters,
  addFilter,
  removeFilter,
  clearFilter,
}: Props) => (
  <div className="job-listings wrap-container">
    {filters.length > 0 && (
      <div className="filter-container">
        <div className="job-filters">
          {filters.map((tag, idx) => (
            <Tag
              key={idx}
              label={tag}
              onClick={() => removeFilter(tag)}
              icon={remove}
            />
          ))}
        </div>
        <Button label="clear" onClick={() => clearFilter()} />
      </div>
    )}
    {data.map((job: any) => (
      <JobCard key={job.id} job={job} addFilter={addFilter} />
    ))}
  </div>
);
