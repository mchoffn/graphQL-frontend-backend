import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Dragon from './pages/Dragon';
import NotFound from './pages/NotFound';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        dragons: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/dragons/:id" element={<Dragon />} />
             <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>  
  );
}

export default App;
