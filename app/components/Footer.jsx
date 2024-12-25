export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-6 text-center">
                    
          <p className="text-sm text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
          </p>
  
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://facebook.com/mshahed.antu"
              className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 10-11.5 9.88v-6.98H8.62v-2.9h1.88V9.66c0-1.84 1.1-2.86 2.77-2.86.8 0 1.64.15 1.64.15v1.81h-.92c-.91 0-1.2.57-1.2 1.15v1.38h2.04l-.33 2.9h-1.71v6.98A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.29 20.25c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.36 8.36 0 0022 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.2 8.2 0 01-2.6.99 4.1 4.1 0 00-7 3.74A11.65 11.65 0 013 4.62a4.1 4.1 0 001.27 5.47A4.08 4.08 0 013 9.11v.05a4.1 4.1 0 003.28 4.01 4.07 4.07 0 01-1.08.14c-.26 0-.52-.03-.77-.07a4.1 4.1 0 003.82 2.85A8.24 8.24 0 013 18.26a11.63 11.63 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 1.5A4 4 0 003.5 7.5v9A4 4 0 007.5 20.5h9A4 4 0 0020.5 16.5v-9A4 4 0 0016.5 3.5h-9zm4.5 4.25a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zm0 1.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm5.25-.25a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  