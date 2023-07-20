import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import { useEffect, useState } from 'react';
import educationJSON from '../education.json';

function Education() {
    const [education, setEducation] = useState(educationJSON);

    return (
        <Timeline className='timeline' position='right' sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0, }, }}>
            <TimelineItem>
                <TimelineSeparator className='separator_padding'>
                    <TimelineDot className='timeline_dot_icon'>
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{paddingTop: '30px'}} />
                </TimelineSeparator>
                <TimelineContent className='timeline_header' sx={{ paddingTop: '15px' }}><Typography variant='h6' >Education</Typography></TimelineContent>
            </TimelineItem>
            {education.map((item, index) => (
                <TimelineItem key={index} sx={{ paddingLeft: '12px' }}>
                    <TimelineSeparator className='separator_padding'>
                        <TimelineDot variant='outlined' className='timeline_dot' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='timeline_header'>
                        <Typography variant='h6'>{item.programme}</Typography>
                        <Typography variant='subtitle1'>{item.school}</Typography>
                        <Typography sx={{ textAlign: 'justify' }} variant='body2'>{item.description}</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}

export default Education;