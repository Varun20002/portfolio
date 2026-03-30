import React, { useState } from 'react';
import { Phone, PhoneCall, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const BOLNA_API_KEY  = 'bn-766ca42accde4d2d9e28d560bf5c34a1';
const BOLNA_AGENT_ID = '27d6d861-721c-40b7-ba6a-151988b3ef40';

/** Normalise the number to E.164 — strips spaces/dashes, prepends +91 if bare 10-digit */
function toE164(raw) {
  const digits = raw.replace(/[\s\-().]/g, '');
  if (digits.startsWith('+')) return digits;
  if (digits.length === 10) return `+91${digits}`;
  return digits; // pass through; server will validate
}

export default function BolnaDemo() {
  const [phone, setPhone]   = useState('');
  const [status, setStatus] = useState('idle'); // idle | calling | success | error
  const [errMsg, setErrMsg] = useState('');

  const handleCall = async (e) => {
    e.preventDefault();
    if (!phone.trim() || status !== 'idle') return;

    setStatus('calling');
    setErrMsg('');

    try {
      const res = await fetch('https://api.bolna.ai/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BOLNA_API_KEY}`,
        },
        body: JSON.stringify({
          agent_id: BOLNA_AGENT_ID,
          recipient_phone_number: toE164(phone.trim()),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || `Error ${res.status}`);
      }

      setStatus('success');
      setTimeout(() => { setStatus('idle'); setPhone(''); }, 6000);
    } catch (err) {
      setErrMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-[#FFF9ED] border-2 border-dashed border-[#D32F2F] p-6 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
        <Phone className="w-12 h-12" />
      </div>

      <p className="font-hand text-xl text-gray-600 mb-4 font-bold">
        Try it Live: Our AI agent will call you now.
      </p>

      <form onSubmit={handleCall} className="flex flex-wrap gap-3 relative z-10">
        <input
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={status !== 'idle'}
          className="flex-1 min-w-[200px] border-2 border-black px-4 py-2 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status !== 'idle'}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-black bg-[#D32F2F] px-6 font-marker text-base tracking-wide text-white shadow-[4px_4px_0px_#000] transition-all hover:translate-y-1 hover:bg-[#b71c1c] hover:shadow-none disabled:pointer-events-none disabled:opacity-50"
        >
          {status === 'idle'    && <><PhoneCall  className="w-4 h-4" /> Call me!</>}
          {status === 'calling' && <><Loader2    className="w-4 h-4 animate-spin" /> Calling...</>}
          {status === 'success' && <><CheckCircle2 className="w-4 h-4" /> Queued!</>}
          {status === 'error'   && <><AlertCircle className="w-4 h-4" /> Failed</>}
        </button>
      </form>

      {status === 'error' && errMsg && (
        <p className="text-[11px] font-mono mt-3 text-[#D32F2F]">⚠ {errMsg}</p>
      )}
      {status === 'success' && (
        <p className="text-[11px] font-mono mt-3 text-green-600">
          ✓ Call queued — you'll receive it in a few seconds!
        </p>
      )}
      {status !== 'error' && status !== 'success' && (
        <p className="text-[10px] font-mono mt-3 text-gray-400 italic">
          🔒 Number used for demo only. Not stored.
        </p>
      )}
    </div>
  );
}
