import React from 'react';
import { ComparisonData, RealWorldProblem } from './types';
import { Calculator, Target, Shuffle, BarChart3, Search, Settings } from 'lucide-react';

export const PAPER_TITLE = "Learning-Based Surrogate-Assisted Modelling Strategy Selection for Expensive Constrained Multi-objective Optimisation";
export const AUTHORS = ["Zheng Cai", "Yit Hong Choo", "Tao Zhou", "Vu Le", "Wei Hong Lim", "Chee Peng Lim"];

export const ABSTRACT_SUMMARY = `
  Surrogate-assisted evolutionary algorithms (SAEAs) are promising for solving expensive constrained multi-objective optimisation problems (ECMOPs). 
  However, existing methods often use fixed strategies. This paper proposes QSAEA, a Double Q-learning-based SAEA. 
  It adaptively selects one of three surrogate modelling strategies based on the correlation between objective improvement and constraint violation.
`;

// Data from Table II (Mean IGD - Lower is better)
export const PERFORMANCE_DATA: ComparisonData[] = [
  { algorithm: 'DRL-SAEA', CF1: 0.1407, MW1: 0.3372, DAS_CMOP1: 0.3543 },
  { algorithm: 'KTS', CF1: 0.2527, MW1: 0.2073, DAS_CMOP1: 0.6347 },
  { algorithm: 'K-MGSAEA', CF1: 0.1608, MW1: 0.3841, DAS_CMOP1: 0.6169 },
  { algorithm: 'MO-EGO', CF1: 0.2194, MW1: 0.5275, DAS_CMOP1: 0.5102 },
  { algorithm: 'M1-2', CF1: 0.1817, MW1: 0.3063, DAS_CMOP1: 0.5512 },
  { algorithm: 'M2-2', CF1: 0.1895, MW1: 0.5983, DAS_CMOP1: 0.5097 },
  { algorithm: 'HeE-MOEA', CF1: 0.2090, MW1: 0.0, DAS_CMOP1: 0.5294 }, // Note: NaN in paper treated as 0 or handled in chart
  { algorithm: 'QSAEA (Proposed)', CF1: 0.1406, MW1: 0.3434, DAS_CMOP1: 0.1995 },
];

export const REAL_WORLD_PROBLEMS: RealWorldProblem[] = [
  { 
    id: 'RWMOP1', 
    name: 'Speed Reducer Design', 
    objectives: 2, 
    variables: 7, 
    constraints: 11,
    description: "Minimise volume and stress, subject to gear strength and shaft deflection constraints."
  },
  { 
    id: 'RWMOP2', 
    name: 'Car Side Impact Design', 
    objectives: 3, 
    variables: 7, 
    constraints: 10,
    description: "Minimise passenger intrusion and weight while ensuring structural integrity in crashes."
  },
  { 
    id: 'RWMOP3', 
    name: 'Gear Box Design', 
    objectives: 3, 
    variables: 7, 
    constraints: 11,
    description: "Minimise total gearbox volume satisfying gear ratios, torque, and material strength."
  },
  { 
    id: 'RWMOP4', 
    name: 'Spring Design', 
    objectives: 2, 
    variables: 3, 
    constraints: 8,
    description: "Minimise spring weight subject to limits on coil stress, deflection, and free length."
  },
  { 
    id: 'RWMOP5', 
    name: 'Bulk Carrier Design', 
    objectives: 3, 
    variables: 6, 
    constraints: 9,
    description: "Optimise ship design for fuel efficiency, structural integrity, and payload capacity."
  },
];

export const FLOW_STEPS = [
  {
    id: 'init',
    title: 'Initialisation',
    description: 'Initialize Population (P) and Q-Tables',
    details: 'The algorithm starts by generating an initial population using Latin Hypercube Sampling. Two Q-tables (Q1, Q2) are initialized to zero to facilitate the Double Q-Learning process.',
    icon: <Shuffle className="w-6 h-6" />
  },
  {
    id: 'state',
    title: 'State Extraction',
    description: 'Calculate Pearson Correlation',
    details: 'The state (st) is determined by the Pearson correlation between the convergence indicator and constraint violation (CV). A positive correlation implies feasible solutions are converging well; negative implies tension between feasibility and convergence.',
    icon: <Search className="w-6 h-6" />
  },
  {
    id: 'action',
    title: 'Action Selection',
    description: 'Double Q-Learning Decision',
    details: 'Using an epsilon-greedy policy on Q1 + Q2, the agent selects an action (at). The action corresponds to one of the three surrogate modelling strategies.',
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 'modeling',
    title: 'Surrogate Construction',
    description: 'Build Kriging Models',
    details: 'Based on the selected action, Kriging models are built. Strategy 1: Objectives only. Strategy 2: Objectives + CV. Strategy 3: Objectives + Unsatisfied Constraints.',
    icon: <Calculator className="w-6 h-6" />
  },
  {
    id: 'evolution',
    title: 'Evolutionary Search',
    description: 'SPEA2 Optimisation',
    details: 'The SPEA2 algorithm is run for a fixed number of generations using the surrogate models to evaluate offspring. This reduces the number of expensive real function evaluations.',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 'update',
    title: 'Update & Reward',
    description: 'Update Tables & Archive',
    details: 'Real function evaluations are performed on promising candidates. The archive is updated, and the Q-tables are updated based on the reward (improvement in fitness and feasibility).',
    icon: <BarChart3 className="w-6 h-6" />
  }
];
