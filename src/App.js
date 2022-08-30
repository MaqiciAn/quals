import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Analytic from './pages/analytic.jsx';
import Student from './pages/student.jsx';
import Goals from './pages/goals.jsx';
import Quiz from './pages/quiz.jsx';
import Subscription from './pages/subscription.jsx';
import Content from './pages/content.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Analytic/>} />
          <Route path="/analytic" element={<Analytic/>} />
          <Route path="/student" element={<Student/>} />
          <Route path="/goals" element={<Goals/>} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/subscription" element={<Subscription/>} />
          <Route path="/content" element={<Content/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
