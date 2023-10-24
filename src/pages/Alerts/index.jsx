export default function AlertsPage() {

  const alerts = [
    {
      type: "Enchente",
      message:
        "Previsão de fortes chuvas e risco de enchentes na região. Fique atento!",
      date: "2023-06-16",
    },
    {
      type: "Deslizamento",
      message:
        "Alerta de risco de deslizamento de terra em áreas inclinadas. Tome precauções!",
      date: "2023-06-17",
    },
    // Adicione mais alertas se necessário
  ];

  return (
    <>
      <div className="container mx-auto p-4 min-h-screen ">
        <h1 className="text-4xl font-bold mb-4">Alertas</h1>

        {alerts.length > 0 ? (
          <ul className="divide-y divide-gray-300 text-center">
            {alerts.map((alert, index) => (
              <li key={index} className="py-4">
                <h2 className="text-2xl font-bold mb-2">{alert.type}</h2>
                <p className="mb-2">{alert.message}</p>
                <p className="text-gray-500">Data: {alert.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xl">Não há alertas no momento.</p>
        )}
      </div>
    </>
  );
}
