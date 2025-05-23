export interface AgreementBoxProps {
  agreement: boolean;
  setAgreement: (agreement: boolean) => void;
  dropdownShow: boolean;
  onClickTogglePersonalInformation: () => void;
}