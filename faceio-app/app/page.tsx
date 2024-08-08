//We import our Dashboard in the page.tsx to see our work

//Import needed
import EmployeeDashboard from "./components/EmployeeDashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <EmployeeDashboard />
    </main>
  );
}
