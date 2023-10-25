export default function DonationsPage() {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Doações</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Como Fazer Doações</h2>
        <p>
          Veja como você pode ajudar fazendo doações para ajudar as pessoas
          afetadas por desastres naturais:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>
            Verifique os itens necessários: Entre em contato com organizações de
            ajuda local para saber quais são os itens mais necessários.
          </li>
          <li>
            Doe suprimentos: Contribua com alimentos não perecíveis, água,
            roupas, produtos de higiene pessoal e outros itens essenciais.
          </li>
          <li>
            Faça doações em dinheiro: Considere fazer doações em dinheiro para
            organizações de ajuda humanitária que estão trabalhando na área.
          </li>
          <li>
            Informe-se sobre pontos de coleta: Descubra os locais de coleta mais
            próximos para doações físicas e as formas de doação em dinheiro.
          </li>
          <li>
            Compartilhe informações: Ajude a divulgar informações sobre como
            doar em suas redes sociais e para amigos e familiares.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Organizações de Ajuda</h2>
        <p>
          Aqui estão algumas organizações de ajuda humanitária que você pode
          considerar fazer doações:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Nome da Organização 1</li>
          <li>Nome da Organização 2</li>
          <li>Nome da Organização 3</li>
        </ul>
      </section>

             {/* Adicionar mais seções ou conteúdo conforme necessário */}
    </div>
  );
}
