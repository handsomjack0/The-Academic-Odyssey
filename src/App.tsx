/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { Login } from './pages/Login';
import { Welcome } from './pages/Welcome';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { QuestDetails } from './pages/QuestDetails';
import { StudyMethod } from './pages/StudyMethod';
import { DeepWork } from './pages/DeepWork';
import { AlchemistTrial } from './pages/AlchemistTrial';
import { QuestCompleted } from './pages/QuestCompleted';
import { Community } from './pages/Community';
import { Profile } from './pages/Profile';
import { Reward } from './pages/Reward';
import { Library } from './pages/Library';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<AppShell />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/quest/:questId" element={<QuestDetails />} />
          <Route path="/task/:taskId/study-method" element={<StudyMethod />} />
          <Route path="/task/:taskId/deep-work" element={<DeepWork />} />
          <Route path="/task/:taskId/alchemist-trial" element={<AlchemistTrial />} />
          <Route path="/quest/completed" element={<QuestCompleted />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/library" element={<Library />} />
        </Route>
      </Routes>
    </Router>
  );
}
