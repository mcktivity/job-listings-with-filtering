import React from "react";
import Avatar from "../shared/Avatar";
import Label from "../shared/Label";
import Tag from "../shared/Tag";
import { GetAvatar } from "./ImageHelper";

interface Props {
  job: any;
  addFilter(tag: string): void;
}
export default ({ job, addFilter }: Props) => (
  <div className={`card ${job.featured ? "card--featured" : ""}`}>
    <Avatar className="card__avatar" url={GetAvatar(job.logo)} label="company-logo"/>
    <section className="column-container">
      <header className="nowrap-container">
        <h3 className="card__header">{job.company}</h3>
        {job.new && <Label label="New" />}
        {job.featured && <Label label="Featured" />}
      </header>
      <h2 className="card__title">{job.position}</h2>
      <p className="card__text">
        {job.postedAt} <span>&#8226;</span>
        {job.contract} <span>&#8226;</span>
        {job.location}
      </p>
    </section>
    <hr />
    <div className="wrap-container card__tags">
      <Tag label={job.role} onClick={() => addFilter(job.role)} />
      <Tag label={job.level} onClick={() => addFilter(job.level)} />
      {job.languages.map((lang: string, idx: any) => (
        <Tag key={idx} label={lang} onClick={() => addFilter(lang)} />
      ))}
      {job.tools.map((tool: string, idx: any) => (
        <Tag key={idx} label={tool} onClick={() => addFilter(tool)} />
      ))}
    </div>
  </div>
);
