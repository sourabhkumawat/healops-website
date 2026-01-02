'use client';

import { useEffect, useState, useRef } from 'react';
import { Terminal } from 'lucide-react';
import { LogLine, LogEntry } from '@/components/molecules/log-line';

const SEQUENCE: Omit<LogEntry, 'id' | 'timestamp'>[] = [
    { type: 'system', message: 'System initialized', detail: 'v2.4.0-stable' },
    { type: 'info', message: 'GET /api/health 200 OK', detail: '12ms' },
    { type: 'info', message: 'GET /api/users 200 OK', detail: '45ms' },
    { type: 'info', message: 'POST /api/auth/login 200 OK', detail: '120ms' },
    { type: 'info', message: 'GET /api/dashboard 200 OK', detail: '89ms' },
    { type: 'error', message: 'ConnectionRefusedError: Redis', detail: 'cache.ts:42' },
    { type: 'agent', message: 'HealOps detected anomaly', detail: 'High Error Rate' },
    { type: 'agent', message: 'Analyzing trace ID tx_9a2b3c...', detail: 'Root Cause Analysis' },
    { type: 'agent', message: 'Identified issue: Redis connection pool exhaustion', detail: 'Confidence: 99.8%' },
    { type: 'agent', message: 'Generating fix...', detail: 'Scaling pool size' },
    { type: 'success', message: 'Fix applied automatically', detail: 'Pool size: 20 -> 50' },
    { type: 'success', message: 'Verification passed', detail: 'Latency < 50ms' },
    { type: 'info', message: 'GET /api/dashboard 200 OK', detail: '42ms' },
    { type: 'info', message: 'GET /api/users 200 OK', detail: '38ms' },
];

export function LogTerminal() {
    const [logs, setLogs] = useState<LogEntry[]>([
        { id: 'init-1', timestamp: '10:00:00', type: 'system', message: 'Cluster: us-east-1a connected' },
        { id: 'init-2', timestamp: '10:00:01', type: 'system', message: 'Observability stream active' },
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [, setCurrentIndex] = useState(0);

    // Add logs loop
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = (prev + 1) % SEQUENCE.length;
                const entry = SEQUENCE[prev];

                const newLog: LogEntry = {
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: getTime(),
                    ...entry
                };

                setLogs((currentLogs) => {
                    const newLogs = [...currentLogs, newLog];
                    if (newLogs.length > 8) return newLogs.slice(1); // Keep last 8 lines
                    return newLogs;
                });

                return nextIndex;
            });
        }, 1200); // Add a new log every 1.2s

        return () => clearInterval(interval);
    }, []);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl shadow-2xl overflow-hidden h-[400px] flex flex-col font-mono text-xs md:text-sm">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/50">
                    <Terminal className="w-3 h-3" />
                    live-production-logs
                </div>
            </div>

            {/* Log Area */}
            <div
                ref={scrollRef}
                className="flex-1 p-4 overflow-hidden space-y-3"
            >
                {logs.map((log) => (
                    <LogLine key={log.id} log={log} />
                ))}

                {/* Typing cursor effect */}
                <div className="w-2 h-4 bg-primary/50 animate-pulse" />
            </div>

            {/* Status Bar */}
            <div className="px-4 py-2 border-t border-white/5 bg-black/40 text-[10px] text-muted-foreground flex justify-between">
                <span>STATUS: MONITORING</span>
                <span className="text-primary">AGENT: ACTIVE</span>
            </div>
        </div>
    );
}

function getTime() {
    const now = new Date();
    return now.toISOString().split('T')[1].split('.')[0];
}
