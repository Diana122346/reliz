.announcements {
    padding: 40px 20px;
    background-color: #fffaf7;
  }
  
  .hero-announcement {
    text-align: center;
    margin-bottom: 30px;
    color: #723c3c;
  }
  
  .filter-controls {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .filter-controls select {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  
  .announcement-list {
    display: grid;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .announcement-card {
    background-color: #ffecec;
    border-left: 6px solid #f88;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    transition: transform 0.3s;
  }
  
  .announcement-card:hover {
    transform: scale(1.02);
  }
  
  .announcement-card h3 {
    margin-top: 0;
  }
  
  .announcement-card button {
    background-color: #fbb;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;
  }
  
  .announcement-card button:hover {
    background-color: #ff7f7f;
  }
  
  .details {
    margin-top: 10px;
    display: none;
    color: #5a3a3a;
  }
  
  .details.visible {
    display: block;
  }
  