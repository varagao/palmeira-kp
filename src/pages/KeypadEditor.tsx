
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { keypads, KeypadConfig } from "@/data/keypads";
import { toast } from "sonner";

const KeypadEditor = () => {
  const navigate = useNavigate();
  const [selectedKeypad, setSelectedKeypad] = useState<string>(keypads[0].id);
  
  // State for the JSON editor - load directly from keypads file
  const [keypadData, setKeypadData] = useState<string>(
    JSON.stringify(keypads, null, 2)
  );
  
  const handleSave = () => {
    try {
      // Parse and validate the JSON
      const updatedKeypads = JSON.parse(keypadData) as KeypadConfig[];
      
      toast.success("Keypad configurations validated! Note: Changes are only temporary in this demo.");
      toast.info("To make permanent changes, update the keypads.ts file directly.");
      
    } catch (error) {
      toast.error("Invalid JSON format. Please check your syntax.");
    }
  };
  
  const handleKeypadSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKeypad(e.target.value);
  };
  
  const exportConfigAsFile = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(keypadData);
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "keypad-config.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } catch (error) {
      toast.error("Failed to export configuration");
    }
  };
  
  // Function to handle file import
  const importConfigFromFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        if (e.target?.result) {
          try {
            // Validate JSON
            JSON.parse(e.target.result as string);
            setKeypadData(e.target.result as string);
            toast.success("Configuration imported successfully");
          } catch (error) {
            toast.error("Invalid JSON file");
          }
        }
      };
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#1E09BB] mb-8">Keypad Editor</h1>
      
      <div className="flex flex-col gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Select Keypad</label>
          <select 
            value={selectedKeypad}
            onChange={handleKeypadSelect}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {keypads.map(keypad => (
              <option key={keypad.id} value={keypad.id}>
                Keypad {keypad.number} - {keypad.subtitle}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Edit Configuration (JSON)</label>
          <Textarea 
            value={keypadData}
            onChange={(e) => setKeypadData(e.target.value)}
            className="font-mono text-sm h-[400px]"
          />
          <p className="text-sm text-gray-500 mt-2">
            Edit the JSON directly. Make sure to maintain the correct format.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-4">
          <Button onClick={handleSave} className="bg-[#1E09BB]">
            Validate Changes
          </Button>
          <Button onClick={() => navigate("/keypads")} variant="outline">
            Cancel
          </Button>
        </div>
        
        <div className="flex gap-4">
          <Button onClick={exportConfigAsFile} variant="outline">
            Export Config
          </Button>
          <div>
            <Input
              type="file"
              accept=".json"
              onChange={importConfigFromFile}
              className="hidden"
              id="import-file"
            />
            <label htmlFor="import-file">
              <Button variant="outline" onClick={() => document.getElementById('import-file')?.click()}>
                Import Config
              </Button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeypadEditor;
