import type { ReactElement } from "react";
import info from '@config/info_config.json';
import { NavLink } from "react-router";
import { parseDate } from "@utils/parseDate";

import './About.css';

// TODO document
// TODO make skills clickable to go to the projects page and add it to the search filter

export default function About(): ReactElement {

    let skillsTableLanguagesSpan = 
        (info.skills.programmingLanguages.length > 0 ? 1 : 0) +
        (info.skills.otherLanguages.length > 0 ? 1 : 0);

    let fillSkillsTable = (): ReactElement[] => {

        let skillsRows: ReactElement[] = [];
        let index = 0;
        let progLangLen = info.skills.programmingLanguages.length;
        let otherLangLen = info.skills.otherLanguages.length;
        let libLen = info.skills.libraries.length;
        let frameLen = info.skills.frameworks.length;
        let techLen = info.skills.technologies.length;
        let maxLen = Math.max(progLangLen, otherLangLen, libLen, frameLen, techLen);
        
        while (index < maxLen - 1) {

            skillsRows.push(
                <tr key={index}>
                    {
                        progLangLen > 0 &&
                        <td>
                            {index <= progLangLen - 1 ? info.skills.programmingLanguages[index] : undefined}
                        </td>
                    }
                    {
                        otherLangLen > 0 &&
                        <td>
                            {index <= otherLangLen - 1 ? info.skills.otherLanguages[index] : undefined}
                        </td>
                    }
                    {
                        libLen > 0 &&
                        <td>
                            {index <= libLen - 1 ? info.skills.libraries[index] : undefined}
                        </td>
                    }
                    {
                        frameLen > 0 &&
                        <td>
                            {index <= frameLen - 1 ? info.skills.frameworks[index] : undefined}
                        </td>
                    } 
                    {
                        techLen > 0 &&
                        <td>
                            {index <= techLen - 1 ? info.skills.technologies[index] : undefined}
                        </td>
                    }
                </tr>
            );

            index++;
        }

        return(skillsRows);
    }

    return(
        <div
            id='about'
        >
            <div
                id='basic-information'
            >
                <h1>{`${info.name.first} ${info.name.middle.charAt(0)}. ${info.name.last}`}</h1>
                <p>{info.shortDesc}</p>
            </div>
            <div
                id='contact-and-resume'
            >
                <h2>Contact and Resume</h2>
                <p>
                    🖂 Email: <a href={`mailto:${info.contact.email}`}>{info.contact.email}</a>
                </p>
                <p>
                    ✆ Phone: <a href={`tel:${info.contact.phone}`}>{info.contact.phone}</a>
                </p>
                <p>
                    🗎 Resume:{' '}
                    <a
                        href='/misc/resume.pdf'
                        download={`
                            ${info.name.first}_${info.name.middle.charAt(0)}_${info.name.last}_Resume.pdf
                        `}
                    >
                        Download <b>⭳</b>
                    </a>
                </p>
            </div>
            <div
                id='education'
            >
                <h2>Education</h2>
                {info.education.map((value, index) => (
                    <div
                        key={index}
                        className='education-item'
                    >
                        <h4>{value.school}</h4>
                        <p>{`Major${value.degree.majors.length > 1 ? "s" : ""}: ${value.degree.majors.join(", ")}`}</p>
                        <p>{`Minor${value.degree.minors.length > 1 ? "s": ""}: ${value.degree.minors.join(", ")}`}</p>
                        {value.gpa != "" && <p>{`GPA: ${value.gpa}`}</p>}
                    </div>
                ))}
            </div>
            <div
                id='experience'
            >
                <h2>Professional Experience</h2>
                {info.experience.map((value, index) => (
                    <div
                        key={index}
                        className='experience-item'
                    >
                        <p>
                            <b>{value.title}</b> - {value.employer}{' '}
                            {`(${parseDate(value.employmentRange.start)} - 
                            ${parseDate(value.employmentRange.end)})`}  
                        </p>
                        Responsibilities:
                        <ul>
                            {value.responsibilities.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div
                id='skills'
            >
                <h2>Skills</h2>
                <p>Check the <NavLink to='/projects' className='navlink'>projects page</NavLink> to view and filter projects using these skills!</p>
                <table
                    id='skills-table'
                >
                    <thead>
                        <tr>
                            {
                                skillsTableLanguagesSpan > 0 &&
                                <th colSpan={skillsTableLanguagesSpan}>Languages</th>
                            }
                            {
                                info.skills.libraries.length > 0 &&
                                <th rowSpan={2}>Libraries</th>
                            }
                            {
                                info.skills.frameworks.length > 0 &&
                                <th rowSpan={2}>Frameworks</th>
                            }
                            {
                                info.skills.technologies.length > 0 &&
                                <th rowSpan={2}>Technologies</th>
                            }
                        </tr>
                        <tr>
                            {
                                info.skills.programmingLanguages.length > 0 &&
                                <th>Programming</th>
                            }
                            {
                                info.skills.otherLanguages.length > 0 &&
                                <th>Other</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {fillSkillsTable()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}