import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    let title = "An Error Occurred!"
    let message = "Somenthing went wrong"

    if(error.status === 500){
        message = error.data.message;
    }

    if (error.status === 404){
        title= 'Not Found'
        message = 'Could not find resources or page.'
    }

    return(
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default Error