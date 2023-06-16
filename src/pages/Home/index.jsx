import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 min-h-full text-center">
      <p className="text-2xl font-bold mb-4 text-center bg-zinc-800/75">
        {" "}
        Este site tem como objetivo ajudar pessoas em tempos de desastres
        naturais.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-2">Números de Emergência</h2>
        <ul className="list-none pl-6">
          <li>
            <strong>Polícia:</strong> 123-456-789
          </li>
          <li>
            <strong>Bombeiros:</strong> 987-654-321
          </li>
          <li>
            <strong>Defesa Civil:</strong> 555-555-555
          </li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Recursos Importantes</h2>
        <ul className="list-disc pl-6">
          <li>
            <Link href="/Alerts" className="text-blue-500 hover:underline">
              Alertas
            </Link>
            : Fique informado sobre os desastres naturais em sua região.
          </li>
          <li>
            <Link href="/Preparation" className="text-blue-500 hover:underline">
              Preparação para Emergências
            </Link>
            : Saiba como se preparar antes da ocorrência de desastres.
          </li>
          <li>
            <Link href="/Shelters" className="text-blue-500 hover:underline">
              Abrigos
            </Link>
            : Encontre abrigos disponíveis em sua área durante desastres.
          </li>
          <li>
            <Link href="/Donations" className="text-blue-500 hover:underline">
              Doações
            </Link>
            : Saiba como ajudar com doações de suprimentos e recursos.
          </li>
          <li>
            <Link href="/Resources" className="text-blue-500 hover:underline">
              Recursos Locais
            </Link>
            : Acesse serviços de emergência e informações úteis em sua região.
          </li>
          <li>
            <Link href="/Info" className="text-blue-500 hover:underline">
              Informações Úteis
            </Link>
            : Encontre links e recursos adicionais relacionados a desastres
            naturais.
          </li>
        </ul>
      </section>

      {/* Adicione mais seções ou conteúdo conforme necessário */}
    </div>
  );
}
