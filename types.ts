import React from 'react';

export interface ComparisonData {
  algorithm: string;
  CF1: number;
  MW1: number;
  DAS_CMOP1: number;
  [key: string]: string | number;
}

export interface RealWorldProblem {
  id: string;
  name: string;
  objectives: number;
  variables: number;
  constraints: number;
  description: string;
}

export interface FlowStep {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}