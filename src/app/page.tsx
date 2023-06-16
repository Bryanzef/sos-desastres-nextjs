import HomePage from "../pages/Home";
import AlertsPage from "../pages/Alerts";
import PreparationPage from "../pages/Preparation";
import SheltersPage from "../pages/Shelters";
import DonationsPage from "../pages/Donations";
import LocalResourcesPage from "../pages/Resources";
import UsefulInfoPage from "@/pages/Info";
export default function Home() {
  return (
    <>
      <HomePage />
      <AlertsPage />
      <PreparationPage />
      <SheltersPage />
      <DonationsPage />
      <LocalResourcesPage />
      <UsefulInfoPage />
    </>
  );
}
