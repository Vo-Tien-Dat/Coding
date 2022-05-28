

import './Problem.index.scss';
import NotificationIndex from '../Home/Components/Notification/Notification.index';
function ProblemIndex() {
    return (
        <div className='container-fluid' id='container-fluid'>
            <div className='row'>
                <div className='col w-9' id='main'>
                    <table className='Table'>
                        <tr className='Table-title'>
                            <th id='id-table'>id</th>
                            <th id='name-table'>name</th>
                            <th id='difficulty-table'>difficulty</th>
                            <th id='acceptance-table'>acceptance</th>
                        </tr>
                        <tr>
                            <td className='Table-item'>166B</td>
                            <td>Old Subarrays</td>
                            <td>3700</td>
                            <td>1080</td>
                        </tr>
                        <tr>
                            <td className='Table-item'>166B</td>
                            <td>Old Subarrays</td>
                            <td>3700</td>
                            <td>1080</td>
                        </tr>
                        <tr>
                            <td className='Table-item'>166B</td>
                            <td>Old Subarrays</td>
                            <td>3700</td>
                            <td>1080</td>
                        </tr>
                        <tr>
                            <td className='Table-item'>166B</td>
                            <td>Old Subarrays</td>
                            <td>3700</td>
                            <td>1080</td>
                        </tr>
                    </table>
                </div>
                <div className='col w-3' id='notification'>

                </div>
            </div>

        </div>
    )
}

export default ProblemIndex;