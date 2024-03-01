import BackButton from "@/components/ui/BackButton"

const Main = ({ params }: { params: { id: string, slug: string } }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Rotas \ {params.id} \ {params.slug} ...</h1>
      <BackButton/>
    </main>
  )
}

export default Main