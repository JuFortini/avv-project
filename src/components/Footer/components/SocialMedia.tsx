import { FacebookLogo, InstagramLogo, PhoneCall, WhatsappLogo } from "@phosphor-icons/react";

export enum SocialMediaTheme {
  Dark,
  Light,
}

export enum SocialMediaType {
  Whatsapp,
  Instagram,
  Facebook,
  Telefone,
}

interface SocialMediaProps {
  theme?: SocialMediaTheme;
  type: SocialMediaType;
  redirection: string;
}

export function SocialMedia({ theme = SocialMediaTheme.Light, type, redirection }: SocialMediaProps): JSX.Element {

  const mediaIcon = () => {
    switch (type) {
      case SocialMediaType.Facebook:
        return <FacebookLogo size={20} color={theme === SocialMediaTheme.Light ? "#000000" : "#FFFFFF"} />
      case SocialMediaType.Whatsapp:
        return <WhatsappLogo size={20} color={theme === SocialMediaTheme.Light ? "#000000" : "#FFFFFF"} />
      case SocialMediaType.Instagram:
        return <InstagramLogo size={20} color={theme === SocialMediaTheme.Light ? "#000000" : "#FFFFFF"} />
      case SocialMediaType.Telefone:
        return <PhoneCall size={20} color={theme === SocialMediaTheme.Light ? "#000000" : "#FFFFFF"} />
      default:
        break;
    }
  }

  return (
    <a href={redirection} className={`p-2 ${theme === SocialMediaTheme.Light ? 'bg-slate-100' : 'bg-teal-600'} rounded-full flex justify-center items-center`}>
      {mediaIcon()}
    </a>
  )
}
