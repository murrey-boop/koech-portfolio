export default function PortfolioCard({ project }) {
  return (
    <div style={{overflow:"hidden", borderRadius:16, border:"1px solid #f4d9d0", background:"#fffdf9"}}>
      <img
        src={project.image + "?w=600&q=80"}
        alt={project.title}
        style={{width:"100%", height:200, objectFit:"cover", display:"block"}}
      />
      <div style={{padding:20}}>
        <p style={{fontSize:"0.8rem", color:"#c97d60", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 6px"}}>
          {project.category}
        </p>
        <h3 style={{fontFamily:"'Playfair Display',Georgia,serif", fontSize:"1.1rem", color:"#271d1e", margin:0}}>
          {project.title}
        </h3>
      </div>
    </div>
  );
}
