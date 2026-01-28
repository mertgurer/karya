export interface StepItem {
  key: string;
  localeSource: string;
  icon: React.ReactNode;
  pointCount: number;
}

export interface FlowProps {
  steps: StepItem[];
}
