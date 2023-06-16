export default function PreparationPage() {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Preparação para Emergências
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Kit de Emergência</h2>
          <p>Monte um kit de emergência com os seguintes itens:</p>
          <ul className="list-none list-inside ml-4 mt-2">
            <li>Água potável</li>
            <li>Alimentos não perecíveis</li>
            <li>Medicamentos essenciais</li>
            <li>Kits de primeiros socorros</li>
            <li>Lanterna</li>
            <li>Pilhas</li>
            <li>Rádio portátil</li>
            <li>Roupas extras</li>
            <li>Itens de higiene pessoal</li>
            <li>Dinheiro em espécie</li>
            <li>Documentos importantes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Plano Familiar</h2>
          <p>Crie um plano familiar para situações de desastre que inclua:</p>
          <ul className="list-nonelist-inside ml-4 mt-2">
            <li>Pontos de encontro designados</li>
            <li>Rotas de evacuação</li>
            <li>Contatos de emergência</li>
            <li>Procedimentos de comunicação</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Informações e Recursos</h2>
          <p>
            Obtenha informações adicionais e recursos sobre preparação para
            emergências:
          </p>
          <ul className="list-none list-inside ml-4 mt-2">
            <li>
              <a
                href="https://www.defesacivil.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Defesa Civil do Brasil
              </a>
            </li>
            <li>
              <a
                href="https://www.ready.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ready.gov
              </a>
            </li>
            <li>
              <a
                href="https://www.redcross.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Cruz Vermelha
              </a>
            </li>
          </ul>
        </section>

        {/* Adicione mais seções ou conteúdo conforme necessário */}
      </div>
    </div>
  );
}
