
const Footer = () => {
    return (
      <footer style={{ padding: '10px', backgroundColor: '#222', color: '#fff', textAlign: 'center' }}>
        <p>&copy; 2024 Abdul Basit. All rights reserved.</p>
  
        <p>Connect with me on:</p>
        <div style={{ margin: '10px 0' }}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Twitter
          </a>
        </div>
  
        <p>Email: <a href="mailto:basitshabbir08@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>basitshabbir08@gmail.com</a></p>
  
        <p>Built with Next.js | Designed by Abdul Basit.</p>
      </footer>
    );
  };
  
  export default Footer;
  