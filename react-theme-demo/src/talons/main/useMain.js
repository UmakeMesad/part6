import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import Dashboard from '../../components/dashboard';
import PageNotFound from '../../components/pageNotFound';
import YourProject from '../../components/yourProject';
import SettingProject from '../../components/settingProject';
import Home from '../../components/home';
import UserPage from '../../components/userPage';



const useMain = (props = {}) => {
    const location = useLocation();
    const { pathname } = location;

    const getComponentRenderMapping = useCallback(() => {
        switch (pathname) {
            case '/': {
                return Home;
            }

            case '/dash-board':{
                return Dashboard;
            }

            case '/your-project':{
                return YourProject;
            }

            case '/setting-project':{
                return SettingProject;
            }

            case '/user':{
                return UserPage;
            }

            default: {
                return PageNotFound;
            }
            
        }
    }, [pathname]);

    const ComponentRender = getComponentRenderMapping();

    return {
        ComponentRender
    };
};

export default useMain;