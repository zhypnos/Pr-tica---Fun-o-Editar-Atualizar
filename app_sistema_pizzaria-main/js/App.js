import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditPizza from './app_sistema_pizzaria-main/js';

function App() {
    return (
        <Router>
            <Switch>
                {/* Other routes */}
                <Route path="/pizzas/edit/:id" component={EditPizza} />
            </Switch>
        </Router>
    );
}

export default App;
