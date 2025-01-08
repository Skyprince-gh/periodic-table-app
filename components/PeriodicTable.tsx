import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useElementData, Element } from '../hooks/useElementData';
import ElementCard from './ElementCard';

export default function PeriodicTable() {
  const elements = useElementData();
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const getGridPosition = (element: Element) => {
    return {
      gridColumn: element.group,
      gridRow: element.period
    };
  };

  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Interactive Periodic Table</h1>
      <div className="grid grid-cols-18 gap-1 w-[1440px]">
        <AnimatePresence>
          {elements.map((element) => (
            <ElementCard
              key={element.atomicNumber}
              element={element}
              isSelected={selectedElement?.atomicNumber === element.atomicNumber}
              onClick={() => setSelectedElement(selectedElement?.atomicNumber === element.atomicNumber ? null : element)}
              style={getGridPosition(element)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

