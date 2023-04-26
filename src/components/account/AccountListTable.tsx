import { useState } from 'react';
import type { ChangeEvent, FC, MouseEvent } from 'react';
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import PencilAltIcon from '../../icons/PencilAlt';
import Trash from '../../icons/Trash';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import type { Account } from '../../models/account';
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import TableListBulkActions from '../common/TableListBulkActions';
import DevicesOther from '@material-ui/icons/DevicesOther';
import { Link as RouterLink } from 'react-router-dom';

interface AccountListTableProps { accounts: Account[]; getAccount: any; deleteAccount: any; }
const getStatusLabel = (enumValue: any): JSX.Element => {
  if (enumValue === undefined) return (<Label> </Label>);
  const map = {
    1: { color: 'success', text: 'Ativo' },
    2: { color: 'success', text: 'Inativo' },
    3: { color: 'success', text: 'Banido' }
  };
  const { text, color }: any = map[enumValue];
  return (<Label color={color}>{text}</Label>);
};
const applyPagination = (accounts: Account[], page: number, limit: number): Account[] => accounts.slice(page * limit, page * limit + limit);

const AccountListTable: FC<AccountListTableProps> = (props) => {
  const { accounts, getAccount, deleteAccount, ...other } = props;
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const handleSelectAllAccounts = (event: ChangeEvent<HTMLInputElement>): void => { setSelectedAccounts(event.target.checked ? accounts.map((account) => account.id) : []); };
  const handleSelectOneAccount = (
    event: ChangeEvent<HTMLInputElement>,
    accountId: string
  ): void => {
    if (!selectedAccounts.includes(accountId)) {
      setSelectedAccounts((prevSelected) => [...prevSelected, accountId]);
    } else {
      setSelectedAccounts((prevSelected) => prevSelected.filter((id) => id !== accountId));
    }
  };
  const handleOpenModal = (event): void => { let accountId = event.target.id; if (!event.target.id) { accountId = event.currentTarget.id; } getAccount(accountId); };
  const handleDeleteAccount = (event): void => { let accountId = event.target.id; if (!event.target.id) { accountId = event.currentTarget.id; } deleteAccount(accountId); };
  const handlePageChange = (event: MouseEvent<HTMLButtonElement> | null, newPage: number): void => { setPage(newPage); };
  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => { setLimit(parseInt(event.target.value, 10)); };

  // QODELESS [TABLE-START {ACCOUNT}] - Tabela geral da entidade
  return (
    <>
      <Card {...other}>
        <CardHeader title="Account Items" />
        <Divider />
        <Scrollbar>
          <Box sx={{ minWidth: 1150 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAccounts.length === accounts.length}
                      color="primary"
                      indeterminate={selectedAccounts.length > 0 && selectedAccounts.length < accounts.length}
                      onChange={handleSelectAllAccounts}
                    />
                  </TableCell>
                  <TableCell>Parceiro</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applyPagination(accounts, page, limit).map((account) => {
                  const isAccountSelected = selectedAccounts.includes(account.id);
                  return (
                    <TableRow
                      hover
                      key={account.id}
                      style={{ whiteSpace: 'nowrap' }}
                      selected={selectedAccounts.indexOf(account.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isAccountSelected}
                          color="primary"
                          onChange={(event): void => handleSelectOneAccount(event, account.id)}
                          value={isAccountSelected}
                        />
                      </TableCell>
                      <TableCell>
                        {account.name}
                        <Typography
                          color="textSecondary"
                          variant="body2"
                        >
                          {account?.createdAt.toLocaleDateString()}
                        </Typography>
                      </TableCell>
                      <TableCell>{account.description}</TableCell>
                      <TableCell>{getStatusLabel(account.status)}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          id={account?.id}
                          onClick={handleOpenModal}
                        >
                          <SportsEsportsIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          component={RouterLink}
                          to="/device"
                        >
                          <DevicesOther fontSize="small" />
                        </IconButton>
                        <IconButton
                          id={account?.id}
                          onClick={handleOpenModal}
                        >
                          <PencilAltIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          id={account?.id}
                          onClick={handleDeleteAccount}
                        >
                          <Trash fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          count={accounts.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
      <TableListBulkActions
        open={selectedAccounts.length > 0}
        selected={selectedAccounts}
      />
    </>
  );
};

export default AccountListTable;
