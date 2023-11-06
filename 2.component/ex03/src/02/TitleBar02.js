import React from 'react';

function TitelBar02() {

    const onClickHander = function() {
        console.log('TitleBar02 clicked!!');
    }

    return (

        <div>
            <h1
                onClick={onClickHander} >
                Function Handler
            </h1>
        </div>

    )
}

export default TitelBar02;