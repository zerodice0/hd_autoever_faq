import { useEffect, useState } from 'react';
import { fetchAdminPrivacy, fetchJoinServicesUse } from '@/widgets/dialog_policy/api/terms_api';
import type { Term } from '@/widgets/dialog_policy/model/terms_model';

export const useAdminPrivacy = (): Term[] => {
  const [adminPrivacyData, setAdminPrivacyData] = useState<Term[]>([]);

  useEffect(() => {
    fetchAdminPrivacy().then((data: Term[]) => {
      setAdminPrivacyData(data);
    });
  }, []);
  
  return adminPrivacyData;
}

export const useJoinServicesUse = (): Term[] => {
  const [joinServicesUseData, setJoinServicesUseData] = useState<Term[]>([]);

  useEffect(() => {
    fetchJoinServicesUse().then((data: Term[]) => {
      setJoinServicesUseData(data);
    });
  }, []);

  return joinServicesUseData;
}