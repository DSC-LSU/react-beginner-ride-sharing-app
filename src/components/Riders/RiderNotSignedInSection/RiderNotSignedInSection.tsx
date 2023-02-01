import { PageSection } from "../../PageSection/PageSection";

import "./RiderNotSignedInSection.css";

export const RiderNotSignedInSection = () => {
  return (
    <PageSection
      className="RiderNotSignedInSection"
      sectionHeader={"Not Signed In"}
    >
      <p>
        You are not signed in. Please sign in to request a ride and see your
        ride request.
      </p>
    </PageSection>
  );
};
