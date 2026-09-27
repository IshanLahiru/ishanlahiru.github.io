import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ITEM_TYPE = 'CARD';
type Status = 'todo' | 'done';
interface CardData {
  id: string;
  text: string;
  status: Status;
}

const initialCards: CardData[] = [
  { id: '1', text: 'Install react-dnd & the HTML5 backend', status: 'todo' },
  { id: '2', text: 'Wrap the app in <DndProvider>', status: 'todo' },
  { id: '3', text: 'Make a card draggable with useDrag', status: 'todo' },
  { id: '4', text: 'Make a column droppable with useDrop', status: 'done' }
];

const Card: React.FC<{ card: CardData }> = ({ card }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id: card.id },
    collect: (monitor) => ({ isDragging: monitor.isDragging() })
  }));

  return (
    <div
      ref={drag as unknown as React.Ref<HTMLDivElement>}
      className={`cursor-grab select-none rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 text-sm text-white transition-opacity active:cursor-grabbing ${
        isDragging ? 'opacity-30' : 'opacity-100'
      }`}
    >
      {card.text}
    </div>
  );
};

const Column: React.FC<{
  title: string;
  cards: CardData[];
  onDropCard: (id: string) => void;
}> = ({ title, cards, onDropCard }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item: { id: string }) => onDropCard(item.id),
    collect: (monitor) => ({ isOver: monitor.isOver() })
  }));

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>}
      className={`min-h-[190px] flex-1 rounded-xl border p-4 transition-colors ${
        isOver ? 'border-orange-500/60 bg-orange-500/5' : 'border-white/10'
      }`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">{title}</p>
      <div className="space-y-2">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        {cards.length === 0 && <p className="text-xs text-slate-600">Drop a card here</p>}
      </div>
    </div>
  );
};

const DndDemo: React.FC = () => {
  const [cards, setCards] = useState(initialCards);

  const moveCard = (id: string, status: Status) => {
    setCards((prev) => prev.map((card) => (card.id === id ? { ...card, status } : card)));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Column
          title="To Do"
          cards={cards.filter((card) => card.status === 'todo')}
          onDropCard={(id) => moveCard(id, 'todo')}
        />
        <Column
          title="Done"
          cards={cards.filter((card) => card.status === 'done')}
          onDropCard={(id) => moveCard(id, 'done')}
        />
      </div>
      <p className="mt-3 text-xs text-slate-500">Drag a card between columns with a mouse (desktop only).</p>
    </DndProvider>
  );
};

export default DndDemo;
