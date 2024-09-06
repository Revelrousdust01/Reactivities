import React from 'react';
import {Grid} from "semantic-ui-react";
import {Activity} from "../../../app/models/activity.ts";
import ActivityList from "./ActivityList.tsx";
import ActivityDetails from '../details/ActivityDetails.tsx';
import ActivityForm from "../form/ActivityForm.tsx";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, selectActivity, deleteActivity,
          selectedActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, submitting}: Props) {
    return (
        <Grid>
            <Grid.Column width={'10'}>
            <ActivityList activities={activities} 
              selectActivity={selectActivity}
              deleteActivity={deleteActivity}
              submitting={submitting}
            />
            </Grid.Column>
            <Grid.Column width={'6'}>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity = {cancelSelectActivity}
                    openForm={openForm}
                />}
                {editMode &&
                    <ActivityForm 
                        closeForm={closeForm} 
                        activity={selectedActivity} 
                        createOrEdit={createOrEdit}
                        submitting={submitting}/>
                }
            </Grid.Column>
        </Grid>
    )
}