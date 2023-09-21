import { Rowing } from '@material-ui/icons';
import { Margin } from '@mui/icons-material';
import { Button, Card, Divider, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";


function JobApplication() {
  return (
    <Card style={{padding:20}}>

    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Grid item xs={6}>
            <Typography variant="h3" color={'black'} textAlign={'left'} gutterBottom>Java Staff Software Engineer - Distributed Systems</Typography>
        </Grid> <Grid item xs={6}/>

        <Grid item xs={6}>
        <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>We're Celonis, the global leader in execution management and process mining technology, and one of the 50 most valuable private companies in the world. We believe that every company can unlock its full execution capacity - and for that, we need you to join us.</Typography>
        </Grid> <Grid item xs={8}/>

        <Divider/>
        <Grid item xs={6}>
        <Typography variant="subtitle2" color={'black'} textAlign={'left'} gutterBottom><strong>The Team:</strong></Typography>
        </Grid> <Grid item xs={8}/>

        <Grid item xs={6}>
        <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
        You will be part of the Core Mining Engine team. The Core Mining Engine enables our customers to interactively process mine enterprise sized data sets. To achieve that goal we developed our own analytical database. In order to handle the strong growth of our customer base and their demands we heavily invest on the scalability of the Core Mining Engine.
            </Typography>
        </Grid> <Grid item xs={8}/>

        <Grid item xs={6}>
        <Typography variant="subtitle2" color={'black'} textAlign={'left'} gutterBottom><strong>
            The Role:
            </strong></Typography>
        </Grid> <Grid item xs={8}/>

        <Grid item xs={6}>
        <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
        As a member of the Core Mining Engine team you will work on our analytical database which is built on a microservice architecture, optimized to process large amounts of data. You will address scaling problems, increasing robustness while maintaining cost efficiency and integrating the Core Mining Engine with new technologies like Apache Kafka.             </Typography>
        </Grid> <Grid item xs={8}/>

        
        <Grid item xs={6}>
        <Typography variant="subtitle2" color={'black'} textAlign={'left'} gutterBottom><strong>
        The work you’ll do:
            </strong></Typography>
        </Grid><Grid item xs={6}></Grid>

        <Grid item xs={6}>
        <List sx = {{listStyleType: 'disc',pl: 2,}}>
        

            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
            Implementing features in existing or newly created microservices                 
            </Typography>
            </ListItem>

                        <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>Take ownership of features from design to operation            </Typography>
            </ListItem>

            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>            Collaborate with various teams and coworkers to cope with rapidly increasing system workload
            </Typography>
            </ListItem>

            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>Identify and eliminate bottlenecks in our current system
            </Typography>
            </ListItem>
            
        </List></Grid> <Grid item xs={8}/>

        <Grid item xs={6}>
        <Typography variant="subtitle2" color={'black'} textAlign={'left'} gutterBottom><strong>
            The qualification you need:
            </strong></Typography>
        </Grid> <Grid item xs={8}/>
        
        <Grid item xs={6}>
        <List sx = {{listStyleType: 'disc',pl: 2,}}>

            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
        You have experience with writing scalable, reliable, and testable software
</Typography>
            </ListItem>            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
You are fluent in Java. Python or C++ are a plus
</Typography>
            </ListItem>            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
You have experience with developing data-intensive and performance-critical systems
</Typography>
            </ListItem>            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
You know how to analyze complex systems
</Typography>
            </ListItem>            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
You have solid knowledge of data structures / algorithms
</Typography>
            </ListItem>            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
You have solid knowledge about asynchronous / concurrent programming and have worked with the low-level building blocks of synchronization like semaphores, read-write locks, mutexes etc.
</Typography>
            </ListItem>            <ListItem sx = {{display: 'list-item'}}>
            <Typography variant="body1" color={'black'} textAlign={'left'} gutterBottom>
You made first experiences with Spring
</Typography>
            </ListItem>
        </List></Grid> <Grid item xs={8}/>

        <Grid item xs={6}>
        <Typography variant='body1' textAlign={'left'} ><strong>Resume/CV*:</strong></Typography>
        </Grid><Grid item xs={8}/>

        <Divider/>
        <Grid item xs={12} alignSelf={'flex-end'}>
            
                <Button variant="contained" sx={{ backgroundColor: "#AAFF00", color:"black"}}>Next</Button>
        </Grid>
    </Grid>
    </Card>
    
  )
}

export default JobApplication