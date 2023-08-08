import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from 'common/context/Usuario';

function Login() {
  const history = useHistory();

  return (
    <Container>
      <UsuarioContext.Consumer>
        {({ nome, setNome, saldo, setSaldo }) => (
          <>
            <Titulo>
              Insira o seu nome
            </Titulo>
            <InputContainer>
              <InputLabel>
                Nome
              </InputLabel>
              <Input
                value={nome}
                type="text"
                onChange={(event) => setNome(event.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Saldo
              </InputLabel>
              <Input
                value={saldo}
                onChange={(event) => setSaldo(event.target.value)}
                type="number"
                startAdornment={
                  <InputAdornment position="start">
                    R$
                  </InputAdornment>
                }
              />
            </InputContainer>
            <Button
              onClick={() => { history.push("/feira") }}
              variant="contained"
              color="primary"
            >
              Avançar
            </Button>
          </>
        )}
      </UsuarioContext.Consumer>
    </Container>
  )
};

export default Login;