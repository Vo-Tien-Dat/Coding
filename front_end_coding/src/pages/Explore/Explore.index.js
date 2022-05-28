
import './Explore.index.scss';
import TopicIndex from './Topic/Topic.index';
function ExploreIndex() {
    return (
        <div className='container-fluid' id='container-fluid'>
            <div className='container w-12'>
                <div className='container w-8' id='Topic'>
                    <TopicIndex title={`Thuật toán`} />
                </div>
                <div className='container w-8' id='Topic'>
                    <TopicIndex title={`Cấu trúc dữ liệu`} />
                </div>
            </div>
        </div>
    )
}

export default ExploreIndex;