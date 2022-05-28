

import './Topic.index.scss';
function TopicIndex(props) {
    const { title, content } = props;
    const contentTest = [
        'hello',
        'hi'
    ]
    return (
        <div className='container w-12'>
            <div className='container-title'>{title}</div>
            <div className='container-content'>
                <ul className='container-tree'>
                    {
                        contentTest.map(
                            (item, index) =>
                                <li key={index} className='container-item'>{item}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default TopicIndex;