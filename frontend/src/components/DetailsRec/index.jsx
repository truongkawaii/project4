import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import './DetailsRec.scss';

function DetailsRec({detail}) {
    return (
            <div className="detail-item__job">
        
         {  ReactHtmlParser(detail) }
            </div>
    )
}

export default DetailsRec
