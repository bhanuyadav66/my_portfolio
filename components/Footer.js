export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-gray-800 text-gray-500">

      <p>
        © {new Date().getFullYear()} Allam Bhanu Prakash. All rights reserved.
      </p>

      <p className="mt-2 text-sm">
        Built with Next.js & Tailwind CSS
      </p>

    </footer>
  );
}