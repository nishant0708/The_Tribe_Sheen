import { Breakpoint } from "react-socks"
import { DashboardMobile } from "../DashboardMobile/DashboardMobile"
import { Dashboard } from "./Dashboard"

export const DashboardComponent = () => {
    return ( 
        <div>
            <Breakpoint medium down>
                <DashboardMobile />
            </Breakpoint>

            <Breakpoint medium only>
                <DashboardMobile />
            </Breakpoint>

            <Breakpoint medium up>
                <Dashboard />
            </Breakpoint> 
        </div>
    )
}