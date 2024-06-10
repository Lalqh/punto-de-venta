const API_URL = "http://localhost:3010/api/v1/";


export const fecthPost = async (url: string, data: any) => {
  const token = localStorage.getItem("token") || "";
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

export const fecthPut = async (url: string, data: any) => {
  const token = localStorage.getItem("token") || "";
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "PUT",
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
  const token = localStorage.getItem("token") || "";
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

export const fectDelete = async (url: string) => {
  const token = localStorage.getItem("token") || "";
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "DELETE",
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
