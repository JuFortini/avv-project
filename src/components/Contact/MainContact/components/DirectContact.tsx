import { createClient } from "../../../../prismicio";
import { Typography } from "../../../../utils/Typography";
import { SocialMedia, SocialMediaTheme, SocialMediaType } from "../../../Footer/components/SocialMedia";
import { phoneFormatter } from "../../../../utils/phone-formatter";

const _getContacts = async () => {
  try {
    const client = createClient();
    const contact = await client.getSingle('contact');
    return contact;
  } catch (error) {
    console.log('error while getting contact from prismic', error);
  }
};

export const dynamic = "force-dynamic";

export async function DirectContact() {
  const personalShadow = 'shadow-[0_16px_32px_-16px_rgba(58,135,118,0.2)]';
  const _slice = await _getFirstContactSlice();

  async function _getFirstContactSlice() {
    const contacts = await _getContacts();
    if (contacts !== undefined) {
      const allSlices = contacts.data.slices;
      if (allSlices.length > 0) return allSlices.slice(0, 1);
    }
    return [];
  }

  if (_slice.length === 0) {
    return (<></>);
  }

  return (
    <div className="flex gap-8 items-center">
      {_slice[0].primary.photo.url !== null && _slice[0].primary.photo.url !== undefined ?
        <div
          className={`w-32 h-32 rounded-3xl border-4 bg-cover bg-center border-slate-50 ${personalShadow}`}
          style={{ backgroundImage: `url(${_slice[0].primary.photo.url})` }}
        /> :
        <></>
      }
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <Typography variant="p" className="font-bold">{_slice[0].primary.name}</Typography>
          <Typography variant="p">{_slice[0].primary.description}</Typography>
        </div>
        <div className="flex gap-2">
          {phoneFormatter(_slice[0].primary.phone).length > 0 ?
            <SocialMedia
              type={SocialMediaType.Telefone}
              theme={SocialMediaTheme.Dark}
              redirection=
              {`tel:${phoneFormatter(_slice[0].primary.phone)!}` ?? ''}
            /> :
            <></>
          }
          {phoneFormatter(_slice[0].primary.whatsapp).length > 0 ?
            <SocialMedia
              type={SocialMediaType.Whatsapp}
              theme={SocialMediaTheme.Dark}
              redirection=
              {`https://wa.me/${phoneFormatter(_slice[0].primary.whatsapp)!}/?t=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20visita%20da%20Associa%C3%A7%C3%A3o%20Vis%C3%A3o%20Volunt%C3%A1ria%20na%20minha%20comunidade.`}
            /> :
            <></>
          }
        </div>
      </div>
    </div>
  );
}
