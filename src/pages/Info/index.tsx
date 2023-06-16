export default function UsefulInfoPage() {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Informações Úteis
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Preparação para Desastres</h2>
          <p>
            Aqui estão algumas dicas e informações úteis para se preparar antes
            da ocorrência de desastres naturais:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Monte um kit de emergência com itens essenciais.</li>
            <li>
              Crie um plano familiar com pontos de encontro e rotas de
              evacuação.
            </li>
            <li>
              Fique atento às orientações da Defesa Civil e autoridades locais.
            </li>
            <li>Conheça os riscos e perigos específicos da sua região.</li>
            <li>
              Mantenha-se informado por meio de rádio, TV e fontes confiáveis de
              notícias.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Procedimentos de Segurança
          </h2>
          <p>
            Em caso de desastre, siga os procedimentos de segurança recomendados
            pelas autoridades competentes:
          </p>
          <ul className="list-none pl-6 mt-2">
            <li>
              Procure abrigo em local seguro e elevado, evitando áreas
              inundadas.
            </li>
            <li>
              Mantenha-se afastado de linhas elétricas, postes e árvores caídas.
            </li>
            <li>Evite transitar por estradas alagadas ou danificadas.</li>
            <li>
              Desconecte aparelhos eletrônicos da tomada e feche o registro de
              gás, se necessário.
            </li>
            <li>
              Siga as instruções para evacuação, se for recomendado pelas
              autoridades.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Recuperação e Apoio</h2>
          <p>
            Após um desastre, siga estas orientações para recuperação e buscar
            apoio:
          </p>
          <ul className="list-none pl-6 mt-2">
            <li>
              Entre em contato com a Defesa Civil para relatar danos e buscar
              assistência.
            </li>
            <li>
              Procure apoio emocional junto a serviços de assistência social e
              psicológica.
            </li>
            <li>
              Verifique se há programas de ajuda financeira para reparos e
              reconstrução.
            </li>
            <li>Apoie seus vizinhos e a comunidade, oferecendo ajuda mútua.</li>
          </ul>
        </section>

        {/* Adicione mais seções ou conteúdo conforme necessário */}
      </div>
    </div>
  );
}
