import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  const isUserPage = location.pathname === '/user';

  
  return (
    <header className="border-b bg-surface">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center border rounded-md">
            <span className="material-symbols-outlined">format_bold</span>
          </div>
          <span>Blue Chat</span>
        </div> 

        <div className={`flex items-center gap-4 ${isUserPage && 'hidden'}`}>
          <span className="material-symbols-outlined cursor-pointer hover:text-text-h">search</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-text-h">add</span>
        </div>
      </div>
    </header>
  );
}
