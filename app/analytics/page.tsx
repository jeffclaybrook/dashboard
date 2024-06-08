import Main from "@/components/main"
import BarGraph from "@/components/bar-graph"
import LineGraphAlt from "@/components/line-graph-alt"
import PieGraph from "@/components/pie-graph"

const Analytics = () => {
  return (
    <Main title="Notifications">
      <section className="grid md:grid-cols-2">
        <BarGraph />
        <LineGraphAlt />
        <PieGraph />
      </section>
    </Main>
  )
}

export default Analytics