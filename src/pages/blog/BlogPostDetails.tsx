import { useEffect } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeHeaderLogo from '../../components/HomeHeaderLogo';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import gtm from '../../lib/gtm';
import './BlogPostDetails.css';

const MarkdownWrapper = experimentalStyled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '& h2': {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.typography.h2.lineHeight,
    marginBottom: theme.spacing(3),
  },
  '& h3': {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.typography.h3.lineHeight,
    marginBottom: theme.spacing(3),
  },
  '& p': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(2),
  },
  '& li': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(1),
  },
}));

const BlogPostDetails: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Termos da política de privacidade</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
        }}
      >
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={6}
            width="100%"
          >
            <Link to="/">
              <HomeHeaderLogo />
            </Link>
          </Grid>
          <Grid
            item
            lg={2}
            md={3}
            sm={4}
            xs={6}
            pl={10}
            width="100%"
          >
            <Button className="LoginButtonXS">
              <Link
                style={{ textDecoration: 'none', color: '#474747' }}
                to="/dashboard/"
              >
                Entrar
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          minHeight: '100%',
          width: '100%',
        }}
      >
        <Box sx={{ py: 3 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Container>
              <MarkdownWrapper>
                <Typography
                  align="left"
                  color="textPrimary"
                  sx={{
                    fontWeight: 'fontWeightBold',
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Política de Privacidade dungeonsounds
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Como parte das nossas operações diárias, necessitamos coletar
                  dados pessoais de nossos clientes com o intuito de manter
                  atualizado a base de dados cadastrais para poder manter
                  regularizado toda e qualquer pendência que o perfil de cada
                  usuário possa ter.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  A privacidade de suas informações é de grande importância para
                  nós, e temos como política respeitar a confidencialidade da
                  informação e a privacidade das pessoas. Esta Política estipula
                  como ocorrem as operações de tratamento de dados pessoais em
                  conformidade com as leis e regulamentações vigentes.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  A nossa Política de Privacidade é regularmente revisada para
                  assegurar a conformidade com novas leis, regulamentações e
                  tecnologias, para que assim reflita qualquer mudança às nossas
                  operações e práticas de negócio.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Esta Política de Privacidade aplica-se às atividades de
                  tratamento da informação pessoal dos clientes, fornecedores,
                  colaboradores, parceiros e visitantes de nossas instalações e
                  de nossas plataformas digitais.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Considerações Gerais
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Respeitamos a privacidade de todos os titulares de dados
                  pessoais, estando, desta forma, comprometidos a tomar todas as
                  medidas possíveis para assegurar de maneira razoável a
                  proteção dos dados pessoais coletados.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Todas as informações são tratadas de acordo com as leis e
                  regulamentações de proteção de dados aplicáveis.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Procedimentos técnicos e organizacionais estão em vigor para
                  garantir que a sua informação esteja sempre segura. Como parte
                  destes procedimentos, regularmente treinamos e conscientizamos
                  todos os nossos colaboradores sobre a importância da
                  manutenção, salvaguarda e respeito da sua informação pessoal e
                  consideramos a violação da privacidade dos dados pessoais algo
                  muito sério, por isso, monitoramos constantemente e prevemos
                  medidas disciplinares apropriadas para eventuais
                  descumprimentos.
                </Typography>
                <ul>
                  <li>
                    Quando são fornecidos por meio do preenchimento de
                    formulários, questionários, e-mail, sites, aplicativos,
                    telefone, contratos ou por meio da entrega de documentos
                    pessoais, em situações que incluem, por exemplo, você:
                  </li>
                  <li>Ter ou pretender ter relação de trabalho conosco;</li>
                  <li>
                    Fornece ou pretende nos fornecer produtos e/ou serviços;
                  </li>
                  <li>
                    Solicitar nossos produtos ou serviços; criar uma conta nos
                    nossos Sites ou Aplicativos;
                  </li>
                  <li>Contratar nossos serviços;</li>
                  <li>
                    Solicitar o envio de materiais de marketing ou
                    institucionais;
                  </li>
                  <li>Participar de promoção ou pesquisa;</li>
                  <li>Nos contatar para transmitir algum feedback;</li>
                  <li>
                    Por meio de dados de acesso aos nossos Sites e Aplicativos;
                  </li>
                  <li>Por meio de fontes publicamente disponíveis.</li>
                </ul>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Quais dados de acesso são coletados pelos Sites e Aplicativos?
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Informações coletadas de usuários ao utilizar os Sites
                  incluem, entre outros, o navegador de acesso do usuário;
                  endereço do protocolo de Internet (IP); data e hora do acesso;
                  a localização do usuário; e as ações do usuário no site.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Informações coletadas de usuários ao utilizar os Aplicativos
                  incluem, entre outros, o modelo do dispositivo móvel e o
                  sistema operacional utilizado para o acesso; endereço do
                  protocolo de Internet (IP); data e hora do acesso, versão do
                  aplicativo; provedor de conexão do usuário; localização do
                  usuário; e as ações do usuário nos Aplicativo.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Quais informações são coletadas?
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Para cadastro em nosso website e posterior criação de uma
                  conta, os seguintes dados devem ser informados:
                </Typography>
                <ul>
                  <li>Nome completo;</li>
                  <li>Endereço;</li>
                  <li>Número de Telefone;</li>
                  <li>Documentos de identificação;</li>
                  <li>Data de Nascimento;</li>
                  <li>E-mail;</li>
                  <li>Participar de promoção ou pesquisa;</li>
                  <li>
                    Fornecer o consentimento sobre o recebimento de Newsletter;
                  </li>
                  <li>
                    Podemos solicitar informações pessoais adicionais se assim
                    considerarmos necessário.
                  </li>
                </ul>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Por que coletamos e utilizamos os seus dados pessoais?
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Podemos utilizar a sua informação pessoal para as seguintes
                  finalidades:
                </Typography>
                <ul>
                  <li>
                    Para criação da conta em nossa plataforma: o uso da sua
                    informação pessoal é necessário para criarmos sua conta em
                    nossa plataforma, para que tenha acesso a recursos e
                    funcionalidades relacionados aos nossos serviços ou a
                    conteúdo de cunho informativo.
                  </li>
                  <li>
                    Para execução dos serviços contratados: após abertura de
                    conta em nossa plataforma, será necessário utilizar os seus
                    dados pessoais para desempenhar visualizar informações e
                    cumprir com as nossas obrigações. Utilizaremos as
                    informações para envio de conteúdo informativo, caso dê o
                    seu consentimento no momento do cadastro.
                  </li>
                  <li>
                    Para envio de comunicados e pesquisas de satisfação:
                    ocasionalmente, podemos enviar-lhe comunicados e pesquisas
                    de satisfação como parte do nosso processo de feedback do
                    cliente. É do nosso legítimo interesse obter tais opiniões
                    para assegurar que os nossos serviços/produtos estão sendo
                    prestados no mais alto nível.
                  </li>
                  <li>
                    Para análise de comportamento em nossos Sites e Aplicativo:
                    os nossos Sites e Aplicativo podem conter ferramentas de
                    análise de dados que nos permitam analisar comportamentos.
                  </li>
                  <li>
                    Para publicidade: podemos utilizar os seus dados pessoais
                    para enviar comunicações de marketing por e-mail, telefone,
                    ou outras formas previamente concordadas (incluindo
                    campanhas) para assegurar que está sempre atualizado sobre
                    nossos serviços e o mercado em que atuamos. Ao enviarmos
                    comunicações de marketing, estas serão baseadas no seu
                    consentimento.
                  </li>
                </ul>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Você poderá consentir assinalando no momento do cadastro as
                  opções “Newsletters”:
                </Typography>
                <ul>
                  <li>
                    Para garantia da segurança patrimonial e da integridade
                    física: caso venha visitar nossas instalações, podemos
                    gravar a sua imagem através do nosso sistema de
                    monitoramento por razões de segurança. O gerenciamento das
                    câmeras e feito por uma empresa terceirizada.
                  </li>
                  <li>
                    Para salvaguarda dos legítimos interesses: Processamos dados
                    pessoais para salvaguardar nossos legítimos interesses.
                    Alguns exemplos de tais atividades incluem:
                  </li>
                  <li>
                    Dar início a reivindicações legais e preparação da nossa
                    defesa em casos de litígio;
                  </li>
                  <li>
                    Meios e processos estabelecidos para proporcionar segurança
                    tecnológica, prevenindo contra potenciais crimes, segurança
                    de ativos, e medidas contra invasão;
                  </li>
                  <li>
                    Estabelecer sistemas de monitoramento das nossas
                    instalações, por razões de segurança;
                  </li>
                  <li>
                    Personalizar, medir e melhorar seus serviços, bem como o seu
                    conteúdo e layout do site, sempre em prol do Usuário.
                  </li>
                </ul>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Obtendo o seu Consentimento
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Caso a finalidade da coleta para qualquer tratamento de dados
                  pessoais necessite do seu consentimento, este será fornecido
                  por meio dos nossos Sites. E-mails e Aplicativo.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Caso queira revogar o consentimento para que não façamos mais
                  o envio de comunicados e e-mails de marketing, o mesmo poderá
                  ser realizado por meio da opção de cancelamento presente no
                  rodapé dos e-mails.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Compartilhamento de dados pessoais
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Observados os critérios definidos nesta Política, não
                  divulgaremos dados pessoais de nossos clientes a uma terceira
                  parte, exceto:
                </Typography>
                <ul>
                  <li>
                    Para atendimento à medida necessária dentro dos termos das
                    leis, regras ou regulações aplicáveis;
                  </li>
                  <li>Perante a existência de obrigação de divulgação;</li>
                  <li>Por legítimo interesse que exija a divulgação; ou</li>
                  <li>A pedido do cliente, mediante o seu consentimento.</li>
                </ul>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  As entidades terceiras para as quais são compartilhadas
                  informações pessoais de forma a desempenhar os serviços
                  contratados, devem executar o processamento de forma a
                  garantir o cumprimento com as obrigações legais. Ainda assim,
                  exigimos que as organizações que manuseiam ou obtêm esses
                  dados pessoais, reconheçam a criticidade desta informação,
                  assumam respeitar todos os direitos individuais de privacidade
                  e cumpram com todas as leis relevantes de proteção de dados.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Como parte do uso dos seus dados para os fins acima
                  mencionados, podemos divulgar a sua informação pessoal a:
                </Typography>
                <ul>
                  <li>
                    Entidades terceiras tais como prestadores de serviços
                    comerciais e consultores especializados contratados para
                    serviços administrativos, financeiros, legais, segurança,
                    pesquisa e outros serviços;
                  </li>
                  <li>
                    Entidades terceiras que estejam realizando trabalhos de
                    Auditoria;
                  </li>
                  <li>
                    Prestadores de serviços de pagamento e/ou instituições
                    bancárias, para geração e controle de pagamentos;
                  </li>
                  <li>
                    Na eventualidade de divulgarmos os seus dados pessoais a
                    partes empresariais, tais como empresas de pagamentos, de
                    forma a desempenhar os serviços solicitados pelos clientes,
                    as referidas partes podem armazenar a sua informação de
                    forma a cumprir com as suas obrigações legais;
                  </li>
                  <li>
                    Qualquer pessoa ou empresa desde que tenhamos o seu
                    consentimento;
                  </li>
                  <li>
                    Os clientes aceitam e consentem que podemos ocasionalmente
                    analisar os dados recolhidos quando visita os nossos Sites e
                    Aplicativo ou por outros meios, como questionários, para
                    fins estatísticos de forma a melhorar e aprimorar os nossos
                    serviços.
                  </li>
                </ul>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Transferência internacional dos dados
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Tratamos as suas informações pessoais em território nacional.
                  Além disso, mantém clausulas específicas para assegurar o
                  correto tratamento, alinhadas com as leis e regulamentações
                  brasileiras.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Segurança e privacidade dos dados pessoais
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Implementamos medidas protetivas razoáveis contra ameaças
                  físicas, administrativas e técnicas para proteger suas
                  informações pessoais de acesso, uso e divulgação não
                  autorizados. Também exigimos que nossos fornecedores protejam
                  tais informações contra acesso, uso e divulgação não
                  autorizados.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Armazenamento de informação pessoal e período de retenção
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Manteremos as suas informações pessoais durante o tempo
                  necessário para cumprir com os fins para os quais as
                  informações são tratadas ou por outros motivos válidos para
                  reter suas informações pessoais, como por exemplo o
                  cumprimento de obrigações legais.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Consultar seus Dados Pessoais
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  As finalidades para os quais os dados são tratados estão
                  descritas neste documento. Em caso de dúvidas adicionais, nos
                  contate através do site.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Alterar seus Dados Pessoais
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Se desejar alterar seus dados pessoais, o mesmo poderá ser
                  feito através da plataforma em edição de perfil de cadastro.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Solicitar o cancelamento de tratamento dos seus Dados Pessoais
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Se desejar que não realizemos mais o processamento da sua
                  informação pessoal, entre em contato pelo site dungeonsounds.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Contatos
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Encarregado pelo tratamento de proteção de dados: o
                  responsável pela proteção de dados o qual inspeciona questões
                  relacionadas a lei 13.709 e a esta Política de Privacidade.
                  Caso tenha alguma dúvida sobre como consultar seus dados e
                  exercer seus direitos de titular, nos contate pelo site
                  dungeonsounds.
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="h6"
                >
                  Aviso Legal
                </Typography>
                <Typography
                  align="justify"
                  color="textPrimary"
                  sx={{
                    mt: 3,
                  }}
                  variant="body1"
                >
                  Não nos responsabilizamos pelo uso indevido ou perda dos dados
                  pessoais a que não temos acesso ou controle. Ficamos também
                  isentos de responsabilidade diante do uso ilegal e não
                  autorizado dessa informação como consequência de uso indevido
                  ou desvio das suas credenciais de acesso, conduta negligente
                  ou maliciosa como consequência de atos ou omissões da sua
                  parte ou de alguém autorizado em seu nome.
                </Typography>
              </MarkdownWrapper>
            </Container>
          </Grid>
        </Box>
      </Box>
      <footer className="Home-footer">
        <div className="box6" />
        <h1 className="FooterLabel">2021 © QODELESS</h1>
      </footer>
    </div>
  );
};

export default BlogPostDetails;
