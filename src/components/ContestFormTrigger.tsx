import { openContestForm } from "@/lib/tally";

interface ContestFormTriggerProps {
  className?: string;
  children?: React.ReactNode;
}

const ContestFormTrigger = ({
  className = "",
  children = "Apply Now — It's Free →",
}: ContestFormTriggerProps) => (
  <button
    onClick={openContestForm}
    className={className}
    aria-label="Open contest application form"
  >
    {children}
  </button>
);

export default ContestFormTrigger;
