import React, { useState } from 'react';
import Modal from './Modal';

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => setOpen(true)} style={{ padding: '0.5rem 1.5rem', fontSize: '1rem', borderRadius: '8px', background: '#0057ff', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Open Modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 style={{ marginTop: 0 }}>Figma Style Modal</h2>
        <p>This is a demo modal. Click outside, press Escape, or use the button below to close.</p>
        <button onClick={() => setOpen(false)} style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem', borderRadius: '8px', background: '#eee', border: 'none', cursor: 'pointer' }}>
          Close
        </button>
      </Modal>
    </div>
  );
} 