import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { useEffect, useState } from 'react';
import workHistoryJSON from '../workHistory.json';

function WorkHistory() {
    const [workHistory, setWorkHistory] = useState(workHistoryJSON);
    console.log(workHistory);
    return (
        <Timeline className='timeline' position='right' sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0, }, }}>
            <TimelineItem>
                <TimelineSeparator className='separator_padding'>
                    <TimelineDot className='timeline_dot_icon'>
                        <WorkHistoryIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{paddingTop: '30px'}} />
                </TimelineSeparator>
                <TimelineContent className='timeline_header' sx={{ paddingTop: '15px' }}>
                    <Typography variant='h6'>Work History</Typography>
                </TimelineContent>
            </TimelineItem>
            {workHistory.map((item, index) => (
                <TimelineItem key={index} sx={{ paddingLeft: '12px' }}>
                    <TimelineSeparator className='separator_padding'>
                        <TimelineDot variant='outlined' className='timeline_dot' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='timeline_header'>
                        <Typography variant='h6'>{item.title}</Typography>
                        <Typography variant='subtitle1'>{item.company}</Typography>
                        <Typography sx={{ textAlign: 'justify' }} variant='body2'>{item.description}</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default WorkHistory;