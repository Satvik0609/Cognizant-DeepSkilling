import { CohortsData } from "./Cohort";
import CohortDetails from "./CohortDetails";

function App() {
    return (
        <div>
            {CohortsData.map((cohort) => (
                <CohortDetails
                    key={cohort.cohortCode}
                    cohort={cohort}
                />
            ))}
        </div>
    );
}

export default App;