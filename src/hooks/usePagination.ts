import { ITableSortOptions } from '@/components';
import { useEffect, useState } from 'react';

interface IUsePagination {
  limit: number;
  page: number;
  sortBy: ITableSortOptions;
}
interface IUsePaginationProps {
  page?: IUsePagination['page'];
  initialSortBy?: IUsePagination['sortBy'];
  limit?: IUsePagination['limit'];
  initialItemsPerPage?: number;
}

export function usePagination({
  initialItemsPerPage = 5,
  initialSortBy = { key: 'createdAt', direction: 'asc' },
  limit = 10,
  page = 1,
}: IUsePaginationProps = {}) {
  const [currentPage, setCurrentPage] = useState<IUsePagination['page']>(page);
  const [totalPages, setTotalPages] = useState(limit);
  const [sort, setSort] = useState<ITableSortOptions>(initialSortBy);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return {
    currentPage,
    totalPages,
    sort,
    setCurrentPage,
    setTotalPages,
    setSort,
    itemsPerPage,
    setItemsPerPage,
  };
}
