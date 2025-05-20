import type { Term } from '@/shared/dialog_policy/model/terms_model';

export const fetchAdminPrivacy = async (): Promise<Term[]> => {
  const response = await fetch('/terms?termsClassID=STARTADMIN_ADMIN_PRIVACY');
  const data = await response.json();

  return data.terms.map((term: Term) => term);
};

export const fetchJoinServicesUse = async (): Promise<Term[]> => {
  const response = await fetch('/terms?termsClassID=STARTADMIN_JOIN_SERVICES_USE');
  const data = await response.json();
  
  return data.terms.map((term: Term) => term);
};
