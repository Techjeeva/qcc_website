import React, { useState } from "react";

const states = ["|0⟩", "|1⟩", "|+⟩", "|−⟩"];

export default function QuantumChannel() {
  const [state, setState] = useState(0);
  const [eve, setEve] = useState(false);
  const [transmitted, setTransmitted] = useState(false);

  const sendPhoton = () => {
    setTransmitted(false);
    window.setTimeout(() => setTransmitted(true), 120);
    window.setTimeout(() => setTransmitted(false), 1900);
  };

  return (
    <section className="qchannel">
      <div className="qchannel-head">
        <div>
          <div className="quantum-section-label">02 / QUANTUM CHANNEL</div>
          <h2>Send a quantum state.<br /><span>Protect the message.</span></h2>
        </div>
        <p>
          A visual introduction to quantum communication: Alice prepares a
          quantum state, a photon travels through the channel, and Bob measures it.
          Eve can be introduced to visualize how interception disturbs the system.
        </p>
      </div>

      <div className="qchannel-stage">
        <div className="qperson alice-person">
          <div className="qavatar">A</div>
          <strong>ALICE</strong>
          <small>TRANSMITTER</small>
          <div className="qstate">{states[state]}</div>
        </div>

        <div className="qbeam">
          <div className="qbeam-line" />
          <div className={\`qphoton-live \${transmitted ? "travel" : ""}\`} />
          <span className="qbeam-label">QUANTUM CHANNEL</span>
          {eve && <div className="eve-node"><b>EVE</b><small>INTERCEPT</small></div>}
        </div>

        <div className="qperson bob-person">
          <div className="qavatar">B</div>
          <strong>BOB</strong>
          <small>RECEIVER</small>
          <div className="qstate">{transmitted && eve ? "|?⟩" : states[state]}</div>
        </div>
      </div>

      <div className="qchannel-controls">
        <div className="qcontrol-group">
          <span>PREPARE STATE</span>
          <div className="qstate-buttons">
            {states.map((item, index) => (
              <button key={item} onClick={() => setState(index)} className={state === index ? "active" : ""}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="qcontrol-group">
          <span>CHANNEL SECURITY</span>
          <button className={\`eve-toggle \${eve ? "danger" : ""}\`} onClick={() => setEve(!eve)}>
            {eve ? "EVE INTERCEPTION: ON" : "EVE INTERCEPTION: OFF"}
          </button>
        </div>

        <button className="send-photon" onClick={sendPhoton}>
          TRANSMIT PHOTON <b>→</b>
        </button>
      </div>

      <div className={\`qsecurity-note \${eve ? "warning" : ""}\`}>
        <i />
        {eve
          ? "Interception changes the observed state — demonstrating the disturbance principle used in quantum security."
          : "Secure channel ready. Choose a state and transmit a photon from Alice to Bob."}
      </div>
    </section>
  );
}
