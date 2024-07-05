export function phoneFormatter(phone: string | null | undefined) {
  if (phone === null || phone === undefined) {
    return '';
  }

  const isValidPhone = /\d+/g;
  let phoneFormatted = phone.match(isValidPhone)?.join('') ?? '';
  if (phoneFormatted.length < 11) {
    return '';
  }
  if (phoneFormatted.length < 13 && !phoneFormatted.startsWith('55')) {
    phoneFormatted = `55${phoneFormatted}`;
  }
  return phoneFormatted;
}
