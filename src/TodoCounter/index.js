import './todocounter.css';
export { TodoCounter };

function TodoCounter({total, completed}) {
      if (total === 0) {
        return (
      <h1 style={{
        textAlign: 'center',
        fontsize: '90 px', 
      }}>Crea tu primer TO DO</h1>
        );
    } else {
      return (
      <h1 style={{
        textAlign: 'center',
        fontsize: '90 px',  
      }}>Has Completado {completed} de {total} TO DO'S</h1>
    );
    };
  }
