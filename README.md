# Job Tracker

- An app that allows users to monitor all their job search details in one place 

# Purpose 
- I want to build an app that can help people who are overwhelemed with the job searching process like myself.

# Pages
The job tracker app consist of the following 4 pages:

2. Landing Page
- Provides a small introduction to the app
- Includes a "Get Started" button to navigate users to the homepage.

3. Homepage 
- Contains the dashboard that shows an overview of the job applications (Ex: total jobs applied, status, date, and notes) (READ)
- Users can delete job entry from the dashboard (DELETE)

4. Edit Job
- Form to update an exisiting job application (UPDATE)

5. Add Job
- Form to add job application details (CREATE)


# No API atm

# Model Schema 

const mongoose = require("mongoose");
const jobDataModel = new mongoose.Schema({
    
    companyName:{
        type: string,
        required: true
    },

    jobTitle: {
        type: string,
        required: true
    },

    date: {
        type: date,
        required: true
    },

    status:{
        type: boolean,
        required: true
    },

    notes:{
        type: string,
        required: false
    }
});

module.exports = mongoose.model("JobData", jobDataModel);



