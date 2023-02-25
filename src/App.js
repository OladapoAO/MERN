import './App.css';
import GoalList from './components/GoalList/GoalList';

const App = () => {
  const courseGoals = [ 
  {id:'cg1', text: 'Finish The Course'},
  {id:'cg2', text: 'Learn all about the Course Main Topic'},
  {id:'cg3', text: 'Help other students in the Course Q&A'}
]


  return <div className="course-goals">
    <h2> Course Goals</h2>
    <GoalList goals={courseGoals}/>
  </div>
}

export default App;
