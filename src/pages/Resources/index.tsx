export default function LocalResourcesPage() {
  const localResources = [
    {
      type: "Número de Emergência",
      name: "Serviço de Emergência Local",
      phone: "123-456-789",
    },
    {
      type: "Serviço de Apoio",
      name: "Centro de Assistência aos Desabrigados",
      phone: "987-654-321",
    },
    // Adicione mais recursos locais se necessário
  ];

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Recursos Locais</h1>

        {localResources.length > 4 ? (
          <ul className="list-none">
            {localResources.map((resource, index) => (
              <li key={index} className="mb-4">
                <h2 className="text-2xl font-bold">{resource.type}</h2>
                <h3 className="text-xl font-bold">{resource.name}</h3>
                <p className="mt-2">Telefone: {resource.phone}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">
            Não há recursos locais disponíveis no momento.
          </p>
        )}

        {/* Adicione mais conteúdo relacionado a recursos locais, como links úteis ou informações adicionais */}
      </div>
    </div>
  );
}
