

import { DashboardHeader } from "../components/DashboardHeader"
import DashboardOptions from "../components/DashboardOptions"
import SocietiesList from "../components/SocietiesList"



const Dashboard = () => {
  return (
    <div className="bg-light">
        <DashboardHeader />
        <DashboardOptions />
    </div>
  )
}

export default Dashboard