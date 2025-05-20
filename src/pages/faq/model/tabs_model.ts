export interface Tabs<T> {
  label: string;
  value: T;
  isSelected: boolean;
}

export const tabsType = {
	serviceConsult: 'CONSULT',
	serviceUsage: 'USAGE',
} as const;

export type TABS_TYPE = (typeof tabsType)[keyof typeof tabsType];
