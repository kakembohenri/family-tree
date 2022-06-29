import ReactDOM from 'react-dom';
import App from './components/App';


export default function index() {

}

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}


