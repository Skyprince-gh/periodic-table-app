import { motion } from 'framer-motion';
import Image from 'next/image';
import { Element } from '../hooks/useElementData';

interface ElementCardProps {
  element: Element;
  isSelected: boolean;
  onClick: () => void;
  style: React.CSSProperties;
}

const categoryColors: { [key: string]: string } = {
  'Alkali Metal': 'bg-red-500',
  'Alkaline Earth Metal': 'bg-orange-400',
  'Transition Metal': 'bg-yellow-300',
  'Post-Transition Metal': 'bg-green-400',
  Metalloid: 'bg-teal-400',
  Nonmetal: 'bg-blue-400',
  Halogen: 'bg-indigo-400',
  'Noble Gas': 'bg-purple-400',
  Lanthanide: 'bg-pink-400',
  Actinide: 'bg-rose-400',
  Unknown: 'bg-gray-400',
};

export default function ElementCard({
  element,
  isSelected,
  onClick,
  style,
}: ElementCardProps) {
  const bgColor = categoryColors[element.category] || 'bg-gray-400';

  return (
    <motion.div
      layout
      className={`${bgColor} rounded shadow cursor-pointer overflow-hidden`}
      style={style}
      onClick={onClick}
      initial={{ width: 80, height: 80 }}
      animate={{
        width: isSelected ? 500 : 80,
        height: isSelected ? 500 : 80,
        zIndex: isSelected ? 10 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <motion.div className="p-2 gap-5 flex flex-col justify-between">
        <div className="text-xs">{element.atomicNumber}</div>
        <motion.div className="text-xl font-bold" layout="position">
          {element.symbol}
        </motion.div>
        <motion.div className="text-xs truncate" layout="position">
          {element.name}
        </motion.div>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2"
          >
            <p>
              <strong>Atomic Mass:</strong> {element.atomicMass}
            </p>
            <p>
              <strong>Category:</strong> {element.category}
            </p>
            <p>
              <strong>Period:</strong> {element.period}
            </p>
            <p>
              <strong>Group:</strong> {element.group}
            </p>
            <div className="relative w-full h-32">
              <Image
                src={element.image}
                alt={`Image of ${element.name}`}
                layout="fill"
                objectFit="cover"
                className="rounded"
                priority
              />
            </div>
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                element.name + ' element'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Learn More
            </a>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
