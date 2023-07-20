import Card from '@mui/material/Card';
import image from '../assets/img/goatifi.png';
import Box from '@mui/material/Box';
import { CardHeader, CardMedia, Link, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import '../style/Profile.css';

function About() {
    return (
        <Card className='profile' sx={{ boxShadow: 5 }}>
            <CardHeader title="Joonas Saarela" subheader="Installation Specialist" />
            <CardMedia
                className='profile_image'
                component='img'
                height='100%'
                image={image}
                alt='Joonas Saarela'
            />
            {/* Timeline */}
            <Timeline className='timeline' position='right' sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0, }, }}>
                {/* Name */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant='outlined' className='timeline_first_dot' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='timeline_header'><Box component='span' sx={{ fontWeight: 'bold' }}>Name</Box>: Joonas Saarela</TimelineContent>
                </TimelineItem>
                {/* Age */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant='outlined' className='timeline_dot_header' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='timeline_header'><Box component='span' sx={{ fontWeight: 'bold' }}>Age</Box>: 24</TimelineContent>
                </TimelineItem>
                {/* Job */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant='outlined' className='timeline_dot_header' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='timeline_header'><Box component='span' sx={{ fontWeight: 'bold' }}>Job</Box>: Installation Specialist</TimelineContent>
                </TimelineItem>
                {/* Email */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant='outlined' className='timeline_dot_header' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='timeline_header'><Box component='span' sx={{ fontWeight: 'bold' }}>Email</Box>: jsaarela98@gmail.com</TimelineContent>
                </TimelineItem>
                {/* GitHub */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant='outlined' className='timeline_dot_header' />
                    </TimelineSeparator>
                    <TimelineContent className='timeline_header'><Box component='span' sx={{ fontWeight: 'bold' }}>GitHub</Box>: <Link href='https://github.com/lo6ical'>/lo6ical</Link></TimelineContent>
                </TimelineItem>
            </Timeline>
        </Card>
    )
}
export default About;