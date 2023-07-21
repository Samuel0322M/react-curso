import './todocounter.css';

function TodoCounter({total, completed}) {
    return (
      <h1 style={{
        textAlign: 'center',
        fontsize: '90 px',  
      }}>Has Completado {completed} de {total} TO DO'S</h1>
    );
  }

export { TodoCounter };