import '@/shared/header_required/ui/header_required.css';

import type { HeaderRequiredProps } from '@/shared/header_required/model/header_required_props';

export const HeaderRequired = ({ title, isRequired }: HeaderRequiredProps) => {
  return (
    <h4 className="heading-4">
      {title}
      {isRequired && <i className="required">필수</i>}
    </h4>
  );
}