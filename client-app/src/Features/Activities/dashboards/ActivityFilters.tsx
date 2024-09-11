import {Header, Menu} from "semantic-ui-react";
import {Calendar} from "react-calendar";

export default function Activityfilters() {
    return (
        <>
            <Menu vertical size={'large'} style = {{width: '100%', marginTop: 30}} >
                <Header icon={'filter'} attached color={'teal'} content={'Filters'} />
                <Menu.Item content={'All Activities'} />
                <Menu.Item content={"I'm Going"} />
                <Menu.Item content={"I'm Hosting"} />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}