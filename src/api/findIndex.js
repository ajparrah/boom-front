const API_URL =
  process.env.API_URL || 'https://stormy-bastion-00558.herokuapp.com/';
const API_HEADER = new Headers();
API_HEADER.append('Content-Type', 'application/json');

export const getFindIndex = async (arrayToSend) => {
  try {
    const url = `${API_URL}/findindex`;
    const response = await fetch(url, {
      method: 'POST',
      headers: API_HEADER,
      body: JSON.stringify({
        array: arrayToSend,
      }),
    });
    const data = await response.json();
    if (data.ok) {
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log('Something went wrong', error);
    throw new Error(error.message);
  }
};
