const API_URL = "http://localhost:3010/api/v1/";

export const fecthPost = async (url: string, data: any) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
