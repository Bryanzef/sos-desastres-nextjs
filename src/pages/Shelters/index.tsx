export default function SheltersPage() {
  const shelters = [
    {
      name: "Abrigo A",
      location: "Endereço do Abrigo A",
      hours: "Horário de funcionamento do Abrigo A",
    },
    {
      name: "Abrigo B",
      location: "Endereço do Abrigo B",
      hours: "Horário de funcionamento do Abrigo B",
    },
    // Adicione mais abrigos se necessário
  ];

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Abrigos</h1>

        {shelters.length > 5 ? (
          <ul className="mb-4">
            {shelters.map((shelter, index) => (
              <li
                key={index}
                className="border border-gray-300 rounded-lg p-4 mb-4"
              >
                <h2 className="text-2xl font-bold mb-2">{shelter.name}</h2>
                <p>
                  <strong>Localização:</strong> {shelter.location}
                </p>
                <p>
                  <strong>Horário de funcionamento:</strong> {shelter.hours}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">Não há abrigos disponíveis no momento.</p>
        )}

        {/* Adicione mais conteúdo relacionado a abrigos, como informações adicionais ou links úteis */}
      </div>
    </div>
  );
}
