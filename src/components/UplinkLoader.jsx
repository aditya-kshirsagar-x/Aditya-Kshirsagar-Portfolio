import React, { useEffect } from 'react';

export default function UplinkLoader({ onFinished }) {
    useEffect(() => {
        const TICKS = 56, MARK_EVERY = 8;
        const root = document.documentElement;
        const fit = () => root.style.setProperty('--s', Math.min(window.innerWidth / 1200, window.innerHeight / 800));
        window.addEventListener('resize', fit, { passive: true });
        fit();

        const bar = document.getElementById('bar');
        if (!bar) return;
        bar.innerHTML = '';
        const ticks = [];
        for (let i = 0; i < TICKS; i++) {
            const t = document.createElement('i');
            t.className = 'tick' + ((i + 1) % MARK_EVERY === 0 ? ' mk' : '');
            bar.appendChild(t);
            ticks.push(t);
        }

        const KF = [
            [0, 0], [0.045, 9], [0.115, 9.6], [0.16, 22], [0.205, 23], [0.30, 38], [0.345, 39.5],
            [0.40, 53], [0.475, 54], [0.545, 68], [0.60, 69], [0.665, 81], [0.735, 82],
            [0.80, 92], [0.855, 93], [0.925, 99], [0.985, 99.4], [1.0, 100]
        ];
        const RUN = 8600, HOLD = 1600, BLANK = 420, LOOP = RUN + HOLD + BLANK;
        const easeOut = x => 1 - Math.pow(1 - x, 2.1);
        const valueAt = u => {
            if (u >= 1) return 100;
            for (let i = 0; i < KF.length - 1; i++) {
                const [t0, v0] = KF[i], [t1, v1] = KF[i + 1];
                if (u <= t1) return v0 + (v1 - v0) * easeOut((u - t0) / (t1 - t0));
            }
            return 100;
        };

        const PHASES = [
            [0, 'INITIALIZING CORE SYSTEMS'],
            [24, 'ESTABLISHING SECURE UPLINK'],
            [52, 'SYNCHRONIZING NODE ARRAY'],
            [78, 'DECRYPTING PAYLOAD STREAM'],
            [100, 'UPLINK ESTABLISHED']
        ];
        const phaseFor = p => { let t = PHASES[0][1]; for (const [k, v] of PHASES) if (p >= k) t = v; return t; };

        const num = document.getElementById('num');
        const dots = document.getElementById('dots');
        const haze = document.getElementById('haze');
        const stage = document.getElementById('stage');
        const plate = document.getElementById('plate');
        const stat = document.querySelector('.status');

        const barW = 604, tickW = 5.4, gap = (barW - TICKS * tickW) / (TICKS - 1), pitch = tickW + gap;
        let start = performance.now();
        let lastLit = -1, lastPct = -1, lastDots = -1, lastPhase = '', cycle = 0;
        let animId;

        function frame(now) {
            const e = (now - start) % LOOP;
            const c = Math.floor((now - start) / LOOP);

            if (c > 0 && onFinished) {
                onFinished();
                return;
            }

            if (c !== cycle) {
                cycle = c;
                if (stage) {
                    stage.classList.remove('reset');
                    void stage.offsetWidth;
                    stage.classList.add('reset');
                }
            }

            let pct = e < RUN ? valueAt(e / RUN) : (e < RUN + HOLD ? 100 : 0);
            let visible = e < RUN + HOLD ? true : (e - RUN - HOLD) % 220 < 130;

            const shown = Math.round(pct);
            if (shown !== lastPct && num) {
                num.textContent = String(shown);
                lastPct = shown;
                const ph = phaseFor(shown);
                if (ph !== lastPhase && stat) {
                    lastPhase = ph;
                    stat.firstChild.nodeValue = ph;
                }
            }
            if (num && num.parentElement) num.parentElement.style.opacity = visible ? '' : '.22';

            const lit = Math.round(pct / 100 * TICKS);
            if (lit !== lastLit) {
                for (let i = 0; i < TICKS; i++) {
                    const on = i < lit;
                    if (ticks[i] && ticks[i].classList.contains('on') !== on) ticks[i].classList.toggle('on', on);
                }
                if (lit > lastLit && lastLit >= 0 && lit > 0 && ticks[lit - 1]) {
                    const h = ticks[lit - 1];
                    h.classList.remove('flash'); void h.offsetWidth; h.classList.add('flash');
                    if (haze) { haze.classList.remove('pulse'); void haze.offsetWidth; haze.classList.add('pulse'); }
                }
                if (haze) haze.style.setProperty('--lit-w', (lit > 0 ? (lit - 1) * pitch + tickW + gap / 2 : 0) + 'px');
                if (lit === TICKS && plate) { plate.classList.remove('hit'); void plate.offsetWidth; plate.classList.add('hit'); }
                lastLit = lit;
            }

            const d = shown >= 100 ? 0 : Math.floor(((now - start) / 380) % 4);
            if (d !== lastDots && dots) { dots.textContent = '...'.slice(0, d); lastDots = d; }

            animId = requestAnimationFrame(frame);
        }
        animId = requestAnimationFrame(frame);

        return () => {
            window.removeEventListener('resize', fit);
            cancelAnimationFrame(animId);
        };
    }, [onFinished]);

    return (
        <div className="fixed inset-0 bg-black z-50 overflow-hidden font-mono select-none">
            <style>{`
        :root { --s: 1; --bg: #000000; --green: #2fe07d; --green-dim: rgba(55,225,130,.26); --line: rgba(120,255,185,.46); --ink-hi: #d9f4e6; }
        .pool { position:fixed; inset:0; pointer-events:none; background:radial-gradient(ellipse 60% 44% at 50% 52%, rgba(24,150,92,.17) 0%, rgba(10,58,38,.08) 38%, transparent 100%); }
        .scene { position:fixed; inset:0; overflow:hidden; background: #000000; }
        .stage { position:absolute; left:50%; top:50%; width:1200px; height:800px; transform:translate(-50%,-50%) scale(var(--s)); transform-origin:center; }
        .stage > * { position:absolute; }
        .plate { left:530px; top:270px; width:140px; height:84px; background:var(--line); clip-path:polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px); }
        .plate::after { content:""; position:absolute; inset:1.2px; background:linear-gradient(180deg,#07251a,#041a12); clip-path:polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px); }
        .plate.hit { animation:plateHit .5s ease-out; }
        @keyframes plateHit { 0% { background:#c8ffe2; } 100% { background:var(--line); } }
        .brk { width:9px; height:9px; pointer-events:none; }
        .brk::before, .brk::after { content:""; position:absolute; background:var(--green); opacity:.9; }
        .brk::before { width:9px; height:1.2px; } .brk::after { width:1.2px; height:9px; }
        .brk.tr { left:661px; top:270px; } .brk.tr::before { right:0; top:0; } .brk.tr::after { right:0; top:0; }
        .brk.bl { left:530px; top:345px; } .brk.bl::before { left:0; bottom:0; } .brk.bl::after { left:0; bottom:0; }
        .readout { left:530px; top:284.9px; width:140px; height:0; text-align:center; line-height:1; color:var(--green); text-shadow:0 0 4px rgba(70,235,145,.6); }
        .readout b { font-size:47px; font-weight:280; letter-spacing:2.4px; }
        .readout u { font-size:15px; text-decoration:none; opacity:.62; position:relative; top:-1px; left:3px; }
        .haze { left:298px; top:438px; width:0; height:0; pointer-events:none; }
        .haze i { position:absolute; left:0; top:0; width:calc(var(--lit-w,0px) + 250px); height:250px; transform:translate(-125px,-128px); background:radial-gradient(ellipse 50% 50% at center, rgba(56,225,140,.26) 0%, transparent 100%); filter:blur(6px); transition:width .16s linear; }
        .haze i.pulse { animation:hazePulse .3s ease-out; }
        @keyframes hazePulse { 0% { filter:blur(6px) brightness(1.3); } 100% { filter:blur(6px) brightness(1); } }
        .bar { left:298px; top:420px; width:604px; height:44px; display:flex; justify-content:space-between; align-items:flex-end; }
        .tick { width:5.4px; height:32px; background:var(--green-dim); transform:skewX(12deg); }
        .tick.mk { height:44px; }
        .tick.on { background:#33cf76; box-shadow:0 0 4px rgba(95,240,155,.6); }
        .tick.flash { animation:ignite .32s ease-out; }
        @keyframes ignite { 0% { background:#dcffec; box-shadow:0 0 11px #fff; } 100% { background:#33cf76; } }
        .barlabel { left:298px; top:396.4px; font-size:20.4px; font-weight:500; color:var(--ink-hi); }
        .status { left:0; top:507px; width:1200px; text-align:center; font-size:14px; font-weight:500; letter-spacing:1.42px; color:#9fd0b6; }
        .status .dots { letter-spacing:-1.9px; margin-left:-6px; }
        .marker { width:0; height:0; position:absolute; }
        .marker i { position:absolute; background:var(--green); opacity:.72; }
        .marker .h { width:9px; height:1.2px; } .marker .v { width:1.2px; height:9px; }
        .marker .a-h, .marker .a-v { left:-17px; top:-17px; }
        .marker .dia { left:-4px; top:-4px; width:8px; height:8px; background:var(--green); transform:rotate(45deg); }
        .m-tl { left:274px; top:340px; } .m-tr { left:926px; top:340px; }
        .m-bl { left:274px; top:508px; } .m-br { left:926px; top:508px; }
        .rail { left:0; top:0; width:1200px; height:800px; position:absolute; }
        .rail.right { transform:scaleX(-1); }
        .rail .wire { left:104px; top:433px; width:92px; height:1.4px; background:rgba(120,255,185,.24); position:absolute; }
        .rail .cap { top:428px; height:5px; background:#2bd074; position:absolute; }
        .rail .cap.a { left:104px; width:10px; } .rail .cap.b { left:181px; width:15px; }
        .mod { left:204px; top:404px; width:36px; height:62px; position:absolute; }
        .mod .hatch { top:0; width:36px; height:2px; background:#cfe8da; position:absolute; }
        .mod .ret { top:8px; left:3px; width:30px; height:30px; border-radius:50%; border:1.3px solid rgba(206,235,220,.82); position:absolute; }
        .mod .dot { top:12.5px; left:15.5px; width:5px; height:5px; border-radius:50%; background:var(--green); position:absolute; }
        .mod .slab { top:46px; width:36px; height:5px; background:#dcefe4; position:absolute; }
        .mod .led { top:55px; height:2.6px; background:#9dc3b0; position:absolute; }
        .scan { position:fixed; inset:0; pointer-events:none; opacity:.18; background:repeating-linear-gradient(to bottom, rgba(160,255,205,.05) 0 1px, transparent 1px 3px); }
      `}</style>

            <div className="pool"></div>
            <div className="scene">
                <div className="stage" id="stage">
                    <div className="haze"><i id="haze"></i></div>
                    <div className="plate" id="plate"></div>
                    <div className="brk tr"></div><div className="brk bl"></div>
                    <div className="readout"><b id="num">50</b><u>%</u></div>

                    <div className="barlabel">UPLINK</div>
                    <div className="bar" id="bar"></div>
                    <div className="status">ESTABLISHING SECURE UPLINK<span className="dots" id="dots">...</span></div>

                    <div className="marker m-tl"><i className="h a-h"></i><i className="v a-v"></i><i className="dia"></i></div>
                    <div className="marker m-tr"><i className="h a-h"></i><i className="v a-v"></i><i className="dia"></i></div>
                    <div className="marker m-bl"><i className="h a-h"></i><i className="v a-v"></i><i className="dia"></i></div>
                    <div className="marker m-br"><i className="h a-h"></i><i className="v a-v"></i><i className="dia"></i></div>

                    <div className="rail left">
                        <div className="wire"></div><div className="cap a"></div><div className="cap b"></div>
                        <div className="mod"><div className="hatch"></div><div className="ret"></div><div className="dot"></div><div className="slab"></div></div>
                    </div>
                    <div className="rail right">
                        <div className="wire"></div><div className="cap a"></div><div className="cap b"></div>
                        <div className="mod"><div className="hatch"></div><div className="ret"></div><div className="dot"></div><div className="slab"></div></div>
                    </div>
                </div>
            </div>
            <div className="scan"></div>
        </div>
    );
}