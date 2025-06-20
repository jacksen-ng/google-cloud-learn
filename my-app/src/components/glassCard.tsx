import PostStats from './PostStats';

export default function GlassCard({ 
    title, 
    description, 
    date,
    badge,
    postId
}: { 
    title: string; 
    description: string; 
    date: string;
    badge?: string;
    postId: string;
}) {
    return (
        <div className="group backdrop-blur-md bg-white/30 dark:bg-zinc-900/40 
            border border-zinc-200 dark:border-zinc-700/60
            p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:bg-white/50 dark:hover:bg-zinc-800/50
            transition duration-300 ease-in-out">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-violet-600 
                    dark:group-hover:text-violet-400 transition-colors duration-200">
                    {title}
                </h2>
                
                {badge && (
                    <span className="text-xs px-2 py-1 rounded-full 
                        bg-indigo-100 dark:bg-indigo-900/50 
                        text-indigo-700 dark:text-indigo-300 font-medium
                        self-start">
                        {badge}
                    </span>
                )}
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">{description}</p>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <div className="flex items-center gap-3">
                    <time className="text-xs px-2 py-1 rounded-full 
                        bg-violet-100/70 dark:bg-violet-900/30 
                        text-violet-700 dark:text-violet-300 font-medium">
                        {date}
                    </time>
                    <PostStats postId={postId} />
                </div>
                
                <span className="text-violet-500 dark:text-violet-400 text-sm font-medium opacity-0 
                    group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1
                    transition-all duration-200">
                    Read more →
                </span>
            </div>
        </div>
    );
}