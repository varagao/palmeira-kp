
import { keypads } from "@/data/keypads";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const KeypadsList = () => {
  return (
    <div className="bg-[#CCFFF2] min-h-screen flex flex-col items-center">
      <div className="max-w-md w-full px-6 py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#1E09BB] uppercase mb-4">
          Keypads
        </h1>
        <Separator className="w-full h-0.5 bg-[#1E09BB] mb-6" />

        <div className="grid grid-cols-3 gap-6 w-full mb-6">
          {keypads.map((keypad) => (
            <Link
              key={keypad.id}
              to={`/keypad/${keypad.id}`}
              className="flex flex-col items-center text-[#1E09BB] hover:opacity-80 transition-opacity"
            >
              <div className="text-7xl font-light mb-1">{keypad.number}</div>
              <div className="text-sm uppercase text-center">
                {keypad.subtitle}
              </div>
            </Link>
          ))}
        </div>

        <Separator className="w-full h-0.5 bg-[#1E09BB] mb-6" />

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/keypad-editor">
            <Button className="bg-[#1E09BB] hover:bg-[#1E09BB]/90 text-white uppercase">
              Edit Keypad Configurations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeypadsList;
