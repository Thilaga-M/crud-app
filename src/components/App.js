import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseListContainer from './course/CourseListContainer';
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './common/HeaderNavContainer';


const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={CourseListContainer} />
                        <Route path="/courses" component={CourseListContainer} />
                        <Route exact path="/course" component={AddOrEditCourseContainer} />
                        <Route path="/course/:id" component={AddOrEditCourseContainer} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;