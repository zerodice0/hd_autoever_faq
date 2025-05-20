export interface Tabs<T> {
  label: string;
  value: T;
  category: string;
  isSelected: boolean;
}

export const tabsType = {
	serviceConsult: 'service-consult',
	serviceUsage: 'service-usage',
} as const;

export type TABS_TYPE = (typeof tabsType)[keyof typeof tabsType];
