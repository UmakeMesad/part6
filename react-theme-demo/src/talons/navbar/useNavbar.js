import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useNavbar = (props = {}) => {
    const history = useHistory();

    const handleNavbarToHomePage = useCallback(()=>{
        history.push('/')
    },[history]);

    const handleNavbarToWorklist = useCallback(() => {
        history.push('/dash-board');
    }, [history]);

    const handleNavbarToYourProject = useCallback(() => {
        history.push('/your-project');
    }, [history]);

    const handleNavbarToSettingProject = useCallback(() => {
        history.push('/setting-project');
    },[history]);
    
    const handleHeadertoUserPage = useCallback(() =>{
        history.push('/user');
    },[history]);
    

    return {
        handleNavbarToHomePage,
        handleNavbarToWorklist,
        handleNavbarToYourProject,
        handleNavbarToSettingProject,
        handleHeadertoUserPage
    };
};

export default useNavbar;