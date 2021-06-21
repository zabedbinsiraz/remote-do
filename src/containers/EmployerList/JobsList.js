import React from "react";
import { Alert, Container, CardDeck, CardColumns, CardGroup } from "react-bootstrap";
import JobItem from "../../components/JobItem/JobItem";
export default function JobsList(props) {
  console.log(props.jobs)
  const hasJobs = props.jobs.length === 0 ? true : false
  console.log("hasjobs", hasJobs)
  return hasJobs ? (
    <Alert variant="info">No data available right now.</Alert>
    ) : 
    (
      <>
        <CardColumns>
          {props.jobs.map(job => (
            <JobItem key={job.id} job={job} handleApply={props.handleApply} />
          ))}
        </CardColumns>
      </>
    );
}
