
import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                    isCompleted
                      ? "bg-secondary text-white"
                      : isCurrent
                      ? "bg-primary text-white"
                      : "bg-neutral-border text-neutral-muted"
                  }`}
                >
                  {isCompleted ? (
                    <Check size={16} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute w-full h-1 top-1/2 left-1/2 -translate-y-1/2 ${
                      isCompleted ? "bg-secondary" : "bg-neutral-border"
                    }`}
                    style={{ width: "calc(100% - 1rem)" }}
                  />
                )}
              </div>
              <span
                className={`text-xs mt-2 text-center ${
                  isCurrent ? "text-primary font-medium" : "text-neutral-muted"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
