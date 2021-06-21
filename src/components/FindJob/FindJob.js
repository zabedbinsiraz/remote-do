import React, { useEffect, useState, useRef, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { stringify } from "query-string";
// import axios from "axios";
import Header from './../../containers/Header/Header';
import BigJumbo from './../../containers/BigJumbo/BigJumbo';
import JobsList from '../../containers/EmployerList/JobsList';
import Footer from './../../containers/Footer/Footer';
import { useForm } from 'react-hook-form';
import ApplicantInfo from "../../Dashboards/ApplicantInfo/ApplicantInfo";




export default function FindJob() {
    // const baseUrl = {
    //   github: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
    // }
    // const [jobs, setJobs] = useState([]);
    // const [job, setJob] = useState({
    //   title: "",
    //   location: ""
    // })
    // console.log(jobs);
    // const initialReqUrlRender = useRef(true);
    // useEffect(() => {
    //   if (initialReqUrlRender.current) {
    //     initialReqUrlRender.current = false;
    //     getJobs(job)
    //   } else {
    //     getJobs(job);
    //   }
    // }, [job]);

    // const getJobs = async (job) => {
    //   //  Github 
    //   const realReqUrl = `${Config.sitesConfig.github.url}?description=${job.title}&location=${job.location}`
    //   console.log('githuburl', realReqUrl)
    //   let response = await fetch(realReqUrl, {
    //     method: "GET",
    //     headers: { "X-Requested-With": "XMLHttpRequest" }
    //   });
    //   let data = await response.json();
    //   let formattedData = formatData(data, 'github')
    //   let jobs = formattedData
    //   console.log(data);
    //   // setJobs(formattedData)

    //   // // Jooble
    //   let opts = {
    //     keywords: job.title === "" ? "it" : job.title, // jooble requires keywords field
    //     location: job.location,
    //     searchMode: 1 // recommeded job from jooble
    //   }
    //   response = await fetch(`${Config.sitesConfig.jooble.url}${Config.sitesConfig.jooble.API_KEY}`, {
    //     method: 'post',
    //     body: JSON.stringify(opts)
    //   })
    //   data = await response.json()
    //   console.log('--',data)
    //   data = data.jobs
    //   console.log('jb', data)
    //   formattedData = formatData(data, 'jooble')
    //   jobs = jobs.concat(formattedData)
    //   console.log(jobs)
    //   setJobs(jobs)
    // };

    // const formatData = (data, site) => {
    //   const newData = data.map(data => formatGithubData(data, site))
    //   console.log(newData)
    //   return newData
    // }

    // const formatGithubData = (data, site) => {
    //   const formattedData = {}

    //   if (site === 'github') {
    //     Object.assign(formattedData, {
    //       from: "github",
    //       id: data.id,
    //       title: data.title,
    //       location: data.location,
    //       company: data.company,
    //       created_at: data.created_at,
    //       url: data.url
    //     })
    //   } else if (site === 'jooble') {
    //     Object.assign(formattedData, {
    //       from: "facebook",
    //       id: data.id,
    //       title: data.title,
    //       location: data.location,
    //       company: data.company,
    //       created_at: data.updated,
    //       url: data.link
    //     })
    //   }
    //   return formattedData

    // }

    const { register, handleSubmit } = useForm();


    
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4001/allJobs`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const [filterJobs, setFilterJobs] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    console.log(filterJobs);
    console.log(isFiltered);


    const onSubmit = data => {
        console.log(data);
        if (data.level !== 'all') {
            const afterFilter = jobs.filter(job => job.job_level === data.level)
            setFilterJobs(afterFilter);
            setIsFiltered(true);
        } else {
            window.location.reload();
        }

    }


    const [doApply, setDoApply] = useState(false);
    const [singleItem, setSingleItem] = useState({});

    const handleApply = id => {
        console.log('buy now', id)

        setDoApply(true);

        fetch(`http://localhost:4001/job/${id}`)
            .then(res => res.json())
            .then(item => {
                setSingleItem(item)
                console.log(item)


            })

    }

    return (
        
         <section style={{backgroundColor:'lightblue'}}>
            
         {
             doApply ? 
                 <ApplicantInfo singleItem={singleItem}></ApplicantInfo>
             
                 : <div >
            
                 <Header />
                 <BigJumbo />
                 <Container >
                     {/* <SearchJob
           updateJobDetail={setJob}
         /> */}
 
                     <div className="m-2 p-2">
                         <form onSubmit={handleSubmit(onSubmit)}>
                         <input className='m-2' type="submit" value="Filter jobs" />
                             <select {...register("level")}>
                                 
                                 <option className='p-2' value="all">All</option>
                                 <option className='p-2' value="Intern">Internship</option>
                                 <option className='p-2' value="Entry">Entry</option>
                                 <option className='p-2' value="Mid">Mid-Senior</option>
                                 <option className='p-2' value="Senior">Senior</option>
                             </select>
                             
                         </form>
                     </div>
 
                     {
                         isFiltered ? <JobsList jobs={filterJobs} handleApply={handleApply} />
                             : <JobsList jobs={jobs} handleApply={handleApply} />
                     }
                 </Container>
                 <Footer />
 
     
         </div>
         }
     </section>
    );
}

// export default App;
