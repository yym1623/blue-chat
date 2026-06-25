import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/",  icon: "home" },
  { to: "/chat", icon: "forum" },
  // { to: "/lock", icon: "lock" }, 
  // { to: "/play",  icon: "video_chat" },
  { to: "/settings", icon: "more_horiz" }
] as const;


export function Footer() {
  return (
    <footer className="border-t border-text/10 bg-surface">
      <nav className="flex items-stretch">
        {tabs.map(({ to,  icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              [
                "flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg py-2 text-[11px] font-medium transition-colors active:bg-bg/60 hover:text-text-h",
                isActive ? "text-text-h" : "text-text",
              ].join(" ")
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className="material-symbols-outlined text-[22px] leading-none"
                  style={
                    isActive
                      ? { fontVariationSettings: "'FILL' 1, 'wght' 500" }
                      : { fontVariationSettings: "'FILL' 0, 'wght' 400" }
                  }
                >
                  {icon}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}
