const API_URL = "http://localhost:3010/api/v1/";
const token = localStorage.getItem("token") || "";

export const fecthPost = async (url: string, data: any) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    return {
      success: false,
      message: "Error al realizar la petición",
    };
  }
};

export const fectGet = async (url: string) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  } catch (error) {
    return {
      success: false,
      message: "Error al realizar la petición",
    };
  }
};
