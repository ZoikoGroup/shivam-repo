import {
  MessageSquareText,
  Cpu,
  Wrench,
  MessagesSquare,
  ListChecks,
  Users,
  PlayCircle,
} from "lucide-react";
import { AiOutlineRobot, AiOutlineCalendar } from "react-icons/ai";
import FAQSection from "./components/home/FAQSection";
import BlackFridayHero from "./components/home/BlackFridayHero";
import ConnectingHearts from "./components/home/ConnectingHearts";
import PlanFinder from "./components/home/PlanFinder";
import GlobalCoverage from "./components/home/GlobalCoverage";
import JourneyPromo from "./components/home/JourneyPromo";
import ContactConsultation from "./components/home/ContactConsultation";
import CustomerFeedback from "./components/home/CustomerFeedback";

/* ================= FEATURE PROPS TYPE ================= */
type FeatureProps = {
  icon: React.ElementType;
  text: string;
};

/* ================= PAGE ================= */
export default function HomePage() {
  return (
    <main>
      {/* ================= BLACK FRIDAY OFFER SECTION ================= */}
      <BlackFridayHero />

      {/* ================= CONNECTING HEARTS SECTION ================= */}
      <ConnectingHearts />

      {/* ================= PLAN FINDER SECTION ================= */}
      <PlanFinder />

      {/* ================= GLOBAL COVERAGE (WHITE) ================= */}
      <GlobalCoverage />

      {/* ================= JOURNEY PROMO SECTION ================= */}
      <JourneyPromo />

      {/* ================= FAQ SECTION ================= */}

      <FAQSection />

      {/* ================= ContactConsultation SECTION ================= */}
      <ContactConsultation />

      {/* ================= CustomerFeedback SECTION ================= */}
      <CustomerFeedback />
    </main>
  );
}

/* ================= FEATURE COMPONENT ================= */
function Feature({ icon: Icon, text }: FeatureProps) {
  return (
    <div>
      <div className="mx-auto w-20 h-20 bg-[#00718A] rounded-full flex items-center justify-center mb-6">
        <Icon className="w-9 h-9 text-white" />
      </div>
      <p className="text-[16px] text-gray-700 leading-relaxed max-w-[420px] mx-auto">
        {text}
      </p>
    </div>
  );
}
