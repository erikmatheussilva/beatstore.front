import { useState } from 'react';
import type { ChangeEvent, FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardHeader, Divider, IconButton, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core';
import PencilAltIcon from '../../icons/PencilAlt';
import Trash from '../../icons/Trash';
import type { User } from '../../models/user';
import Scrollbar from '../Scrollbar';
// import Label from '../Label';
import Clock from 'src/icons/Clock';

interface UserListTableProps { users: User[]; getUser: any; deleteUser: any; getUsers: any; }

// const getStatusLabel = (enumValue: any): JSX.Element => {
//   if (!enumValue) return (<Label />);
//   const map = {
//     1: { text: 'Pago' },
//     2: { text: 'Em atraso' },
//     3: { text: 'Em acordo' },
//     4: { text: 'Acordo em atraso' },
//     5: { text: 'Pagamento pendente' },
//     6: { text: 'A Pagar' },
//   };
//   const { text }: any = map[enumValue];
//   return (<Label>{text}</Label>);
// };

const applyPagination = (users: User[], page: number, limit: number): User[] => users.slice(page * limit, page * limit + limit);

const UserListTable: FC<UserListTableProps> = (props) => {
  const { users, getUser, deleteUser, getUsers, ...other } = props;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const handleOpenModal = (userProp: User): void => {
    getUser(userProp);
  };

  const handleDeleteUser = (event): void => { let { id } = event.target; if (!event.target.id) { id = event.currentTarget.id; } deleteUser(id); };
  const handlePageChange = (event: MouseEvent<HTMLButtonElement> | null, newPage: number): void => { setPage(newPage); };
  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => { setLimit(parseInt(event.target.value, 10)); };

  // QODELESS [TABLE-START {DWELLER}] - Tabela geral da entidade
  return (
    <>
      <Card {...other}>
        <CardHeader
          title="Usuários"
        />
        <Divider />
        <Scrollbar>
          <Box sx={{ minWidth: 1150 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Contato de Celular</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {applyPagination(users, page, limit).map((user) => (
                  <TableRow
                    hover
                    key={user.id}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.cellPhone}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <IconButton
                        id={user.id}
                        onClick={() => handleOpenModal(user)}
                      >
                        <PencilAltIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        id={user.id}
                        onClick={handleDeleteUser}
                      >
                        <Trash fontSize="small" />
                      </IconButton>
                      <IconButton
                        component={Link}
                        to={`/user/${user.id}/trackings`}
                      >
                        <Clock fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          labelRowsPerPage="Linhas por página"
          count={users.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </>
  );
};
// QODELESS [TABLE-START {DWELLER}] - Tabela geral da entidade

export default UserListTable;
