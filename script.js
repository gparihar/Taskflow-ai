*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:'Poppins',sans-serif;
  background:#0f172a;
  color:white;
}

a{
  text-decoration:none;
}

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 8%;
  position:fixed;
  width:100%;
  top:0;
  z-index:1000;
  background:rgba(15,23,42,0.9);
  backdrop-filter:blur(10px);
}

.logo{
  font-size:1.5rem;
  font-weight:700;
  color:#38bdf8;
}

.nav-links{
  display:flex;
  list-style:none;
  gap:30px;
}

.nav-links a{
  color:white;
}

.btn{
  background:#38bdf8;
  color:white;
  padding:10px 20px;
  border-radius:8px;
}

.hero{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:0 20px;
}

.hero-content{
  max-width:800px;
}

.hero h1{
  font-size:4rem;
  margin-bottom:20px;
}

.hero p{
  color:#cbd5e1;
  font-size:1.1rem;
  line-height:1.8;
}

.hero-buttons{
  margin-top:30px;
}

.primary-btn,
.secondary-btn{
  display:inline-block;
  padding:14px 28px;
  border-radius:10px;
  margin:10px;
}

.primary-btn{
  background:#38bdf8;
  color:white;
}

.secondary-btn{
  border:1px solid #38bdf8;
  color:#38bdf8;
}