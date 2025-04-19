'use client';

export const signupUser = async (name, email, password, confirmPassword) => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword
      })
    });

    const data = await result.json();

    return data;
  } catch(err) {
    console.error(err);
  }
}

export const loginUser = async (email, password) => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await result.json();

    return data;
  } catch(err) {
    console.error(err);
  }
}

export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('userName');
  window.location.href = '/login';
} 

export const getUserData = async (token) => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await result.json();

    return data;
  } catch(err) {
    console.log(err);
  }
}