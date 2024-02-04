'use server';

export async function submitRequest(foprevState: any, formData: FormData) {
  try {
    const response = await fetch(
      'https://vop4f76uc3.execute-api.us-east-1.amazonaws.com',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          u: 'frontend',
          p: 'developer',
          note: formData.get('note')
        })
      }
    );
    if (!response.ok) {
      return {
        message: 'Failed to submit request'
      };
    }

    return { message: 'Request submitted' };
  } catch (error) {
    return {
      message: 'Failed to submit request'
    };
  }
}
