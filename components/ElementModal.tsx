import { motion } from 'framer-motion';
import { Element } from '../hooks/useElementData';

interface ElementModalProps {
  element: Element;
  onClose: () => void;
}

export default function ElementModal({ element, onClose }: ElementModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
        layoutId={`element-${element.atomicNumber}`}
      >
        <h2 className="text-2xl font-bold mb-4">{element.name}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Symbol:</strong> {element.symbol}</p>
            <p><strong>Atomic Number:</strong> {element.atomicNumber}</p>
            <p><strong>Atomic Mass:</strong> {element.atomicMass}</p>
            <p><strong>Category:</strong> {element.category}</p>
            <p><strong>Period:</strong> {element.period}</p>
            <p><strong>Group:</strong> {element.group}</p>
          </div>
        </div>
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

