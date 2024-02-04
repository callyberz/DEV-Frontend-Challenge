'use server';

export async function submitRequest(formData) {
  const response = await fetch(
    'https://vop4f76uc3.execute-api.us-east-1.amazonaws.com',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include'
      },
      body: JSON.stringify({
        u: 'frontend',
        p: 'developer',
        note: formData.get('note')
      })
    }
  );

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to submit request');
  }
}
