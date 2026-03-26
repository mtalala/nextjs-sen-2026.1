export async function POST(request) {
  try {
    const response = await fetch("http://172.31.18.11:25000/api/mission", {
      method: "POST",
    });

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Erro ao conectar com o backend" },
      { status: 500 }
    );
  }
}