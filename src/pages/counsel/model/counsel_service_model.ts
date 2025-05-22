export const COUNSEL_SERVICE = {
  'notSelected': '선택안함',
  'vehicleSubscription': '차량 구독 패키지',
  'solutionSubscription': '솔루션 구독 패키지',
  'hybridSubscription': '하이브리드 패키지',
};

export type CounselService = typeof COUNSEL_SERVICE[keyof typeof COUNSEL_SERVICE];
