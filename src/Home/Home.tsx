import React, { useState } from "react";
import Data from "../data.json";
import JobList from "./JobList";

export default () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [data, setData] = useState(Data);

  function filterData(filters: string[]) {
    const filteredData = Data.filter((d: any) => {
      let arr: string[] = [];
      const tags = arr.concat(d.role, d.level, d.languages, d.tools);
      return filters.every((f) => tags.includes(f));
    });
    setData(filteredData);
  }

  function addFilter(tag: string) {
    let x = filters.includes(tag) ? filters : [tag, ...filters];
    setFilters(x);
    filterData(x);
  }

  function removeFilter(tag: string) {
    let x = filters.filter((f) => f !== tag);
    setFilters(x);
    filterData(x);
  }

  function clearFilter() {
    let x: string[] = [];
    setFilters(x);
    setData(Data);
  }

  return (
    <JobList
      data={data}
      filters={filters}
      clearFilter={clearFilter}
      addFilter={(filter: string) => addFilter(filter)}
      removeFilter={(filter: string) => removeFilter(filter)}
    />
  );
};
