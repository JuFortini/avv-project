export const EmailState = {
  Loading: 'loading',
  Success: 'success',
  Error: 'error',
}

export type EmailState = typeof EmailState[keyof typeof EmailState]

export type FormData = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export async function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  try {
    await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return EmailState.Success;
  } catch (error) {
    return EmailState.Error;
  }
}
