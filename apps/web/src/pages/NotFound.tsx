import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 text-center">
      <p className="text-5xl font-bold text-text-h">404</p>
      <p className="mt-2 text-sm text-text">페이지를 찾을 수 없습니다</p>
      <Link
        to="/"
        className="mt-6 rounded-xl bg-surface px-5 py-2.5 text-sm font-medium text-text-h transition-colors hover:text-text"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
