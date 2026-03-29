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
import { Planner } from './pages/Planner';
import { appRoutes, routePatterns } from './config/routes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={appRoutes.login} element={<Login />} />
        
        <Route element={<AppShell />}>
          <Route path={appRoutes.root} element={<Navigate to={appRoutes.login} replace />} />
          <Route path={appRoutes.welcome} element={<Welcome />} />
          <Route path={appRoutes.dashboard} element={<Dashboard />} />
          <Route path={appRoutes.courses} element={<Courses />} />
          <Route path={routePatterns.quest} element={<QuestDetails />} />
          <Route path={routePatterns.studyMethod} element={<StudyMethod />} />
          <Route path={routePatterns.deepWork} element={<DeepWork />} />
          <Route path={routePatterns.alchemistTrial} element={<AlchemistTrial />} />
          <Route path={appRoutes.questCompleted} element={<QuestCompleted />} />
          <Route path={appRoutes.community} element={<Community />} />
          <Route path={appRoutes.profile} element={<Profile />} />
          <Route path={appRoutes.reward} element={<Reward />} />
          <Route path={appRoutes.planner} element={<Planner />} />
          <Route path={appRoutes.library} element={<Library />} />
        </Route>
      </Routes>
    </Router>
  );
}
