import { useEffect, useState } from 'react';
import './tables.css';

// import { API, graphqlOperation } from 'aws-amplify';
// import { createNotice, updateNotice, createHomework, updateHomework, createTimetable, updateTimetable } from '../graphql/mutations';

const Homework = () => {
    const [homeworkFormat, setHomeworkFormat] = useState();

    const confirmChanges = () => {
        console.log("changes made");
    }
    
    useEffect(() => {
        const homework = [{"cellid":1, msg:"messag1"}, {"cellid":2, msg:"messag2"}, {"cellid":3, msg:"message3"}, {"cellid":4, msg:"messag2"}, {"cellid":5, msg:"messag2"}, {"cellid":6, msg:"messag2"}, {"cellid":7, msg:"messag2"}]   

        const allHomework = homework.map((message) => <tr className="all-notices" key={message.cellid}>
                                                        <td> {message.cellid} {message.msg} </td>
                                                        <td> {message.cellid} {message.msg} </td>
                                                        <td > {message.cellid} {message.msg} </td>
                                                    </tr>)
        setHomeworkFormat(allHomework);
    }, []);
    



    return (
        <table className="notice-table">
            <tr  className="top-notices">
                <th colSpan="2"> <h2>Homework Table</h2> </th>
                <td>
                    <button className="row-buttons-save" onClick={confirmChanges}> Save </button>
                </td>
            </tr>
            <tr>
                <th style={{width: "20%"}}>
                    Title
                </th>
                <th>
                    Message
                </th>
                <th>
                    Date sent
                </th>
            </tr>
            { homeworkFormat }

            
        </table>
    );
}

export default Homework;