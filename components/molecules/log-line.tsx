'use client';

export type LogType = 'info' | 'error' | 'success' | 'agent' | 'system';

export interface LogEntry {
    id: string;
    timestamp: string;
    type: LogType;
    message: string;
    detail?: string;
}

export function LogLine({ log }: { log: LogEntry }) {
    return (
        <div className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="text-muted-foreground/30 shrink-0 select-none">
                {log.timestamp}
            </span>
            <div className="flex-1 break-words">
                {log.type === 'info' && (
                    <span className="text-muted-foreground">
                        <span className="text-blue-400 font-bold mr-2">[INFO]</span>
                        {log.message}
                        {log.detail && <span className="text-muted-foreground/50 ml-2">({log.detail})</span>}
                    </span>
                )}
                {log.type === 'error' && (
                    <span className="text-red-300">
                        <span className="text-red-500 font-bold mr-2">[ERROR]</span>
                        {log.message}
                        {log.detail && <span className="text-red-500/50 ml-2">at {log.detail}</span>}
                    </span>
                )}
                {log.type === 'agent' && (
                    <span className="text-primary">
                        <span className="text-primary font-bold mr-2">[AGENT]</span>
                        {log.message}
                        {log.detail && <span className="text-primary/50 ml-2">&gt;&gt; {log.detail}</span>}
                    </span>
                )}
                {log.type === 'success' && (
                    <span className="text-green-400">
                        <span className="text-green-500 font-bold mr-2">[FIXED]</span>
                        {log.message}
                        {log.detail && <span className="text-green-500/50 ml-2">✓ {log.detail}</span>}
                    </span>
                )}
                {log.type === 'system' && (
                    <span className="text-muted-foreground/50 italic">
                        {log.message}
                    </span>
                )}
            </div>
        </div>
    );
}
