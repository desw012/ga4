import {useEffect} from "react";


function SPAPage(){

    useEffect(()=>{

        window.GA_Virtual({
            title : 'sadf', location : 'asdf'
        })
    },[]);

    return (
        <>
        </>
    )
}

export default SPAPage;

