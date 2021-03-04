import React,{useState , useEffect} from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';


const AssessmentsContent = (props) =>  {
    const [currentAssessmentData , setCurrentAssessmentData] = useState()

    useEffect(() => {
        //alert(JSON.stringify(currentAssessmentData) + "Local Data")
    },[])
    return (
        <FusePageCarded
            classes={{
                content: 'flex',
                contentCard: 'overflow-hidden',
                header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
            }}
            header={<h1></h1>}
            
            content={<AssessmentsContent />}
            innerScroll
        />
    );
}

export default AssessmentsContent;