import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {Spinner} from "../components/Spinner";
import React from "react";
import useLocationPathname from "../hooks/useLocationPathname";

const withLocation = ({}) =>
    (Component) =>
        (props) => {
            let location = useLocationPathname()
            const postStatus = useSelector(state => state[location].status)
            const error = useSelector(state => state[location].error)


            if (postStatus === 'loading') {
                return <Spinner text="Loading..."/>
            } else if (postStatus === 'succeeded') {

                return <div className={'weather'}><Component {...props} /></div>

            } else if (postStatus === 'failed') {
                return <div>{error}</div>
            }

        }

        export default withLocation