import { theme } from '@/config/theme';

export const Loading = ({ message }: { message: string }) => {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" 
          style={{ borderColor: theme.colors.primary }} />
        <p className="mt-4 text-lg font-medium" 
          style={{ color: theme.colors.text.primary }}>
          {message}
        </p>
      </div>
    </div>
  );
};