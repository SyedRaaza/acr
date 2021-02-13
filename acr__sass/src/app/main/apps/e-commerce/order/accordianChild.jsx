import React , {useState , useEffect} from 'react';
import {getUsers , reduceCake , getCisData} from '../../../../store/redux/index';
import {connect} from 'react-redux';

const AccordianChild = ({getCis , cisData , getUsers}) => {

    useEffect(() => {
        getUsers()
        console.log("getUsers");
    },[])
    return (
        <div>
            <h1>Data</h1>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        userData: state.userReducer,
        cisData: state.cisReducer,
    }
}

const mapDispatchToProps = dispatch => {
    console.log(dispatch)
    return {
        getCis: () => dispatch(getCisData()),
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (React.memo(AccordianChild));