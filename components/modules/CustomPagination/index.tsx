import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function CustomPagination({ table }: { table: any }) {
  const RenderPages = () => {
    const { pageIndex } = table.getState().pagination;
    const pageCount = table.getPageCount();

    let startPage = Math.max(0, pageIndex - 1); // Start two pages before the current page if possible
    let endPage = Math.min(pageCount, startPage + 3); // Ensure we only show up to 3 pages

    // Adjust the start page if we're near the end
    if (endPage - startPage < 3) {
      startPage = Math.max(0, endPage - 3);
    }

    let pages = [];
    for (let i = startPage; i < endPage; i++) {
      pages.push(
        <PaginationItem key={i} onClick={() => table.setPageIndex(i)}>
          <PaginationLink isActive={i === pageIndex}>{i + 1}</PaginationLink>
        </PaginationItem>,
      );
    }
    return pages;
  };

  return (
    <Pagination className="p-3">
      <PaginationContent>
        <PaginationItem
          className={
            !table.getCanPreviousPage()
              ? "cursor-not-allowed hover:no-underline"
              : "hover:underline"
          }
        >
          <PaginationPrevious
            onClick={() => table.getCanPreviousPage() && table.previousPage()}
          />
        </PaginationItem>
        {table.getState().pagination.pageIndex > 1 &&
          table.getPageCount() > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
        {RenderPages()}
        {table.getState().pagination.pageIndex + 2 < table.getPageCount() &&
          table.getPageCount() > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
        <PaginationItem>
          <PaginationNext
            className={
              !table.getCanNextPage()
                ? "cursor-not-allowed hover:no-underline"
                : "hover:underline"
            }
            onClick={() => table.getCanNextPage() && table.nextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
