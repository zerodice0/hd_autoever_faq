export interface XxlargeTertiaryButtonProps {
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  buttonText: string
  buttonDescription: string | null
  buttonIcon: 'write' | 'talk' | 'download'
}