"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
  Button,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

export default function Tabel(props) {
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  let list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setPage((prev) => prev + 1);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(
        cursor || "https://swapi.py4e.com/api/people/?search=",
        { signal }
      );
      let json = await res.json();

      if (!cursor) {
        setIsLoading(false);
      }

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const hasMore = page < 9;

  return (
    <Table
      className="bg-birublend rounded-lg"
      removeWrapper
      isHeaderSticky
      aria-label="Example table with client side sorting"
      bottomContent={
        hasMore && !isLoading ? (
          <div className="flex w-full justify-center">
            <Button
              isDisabled={list.isLoading}
              variant="flat"
              onPress={list.loadMore}
            >
              {list.isLoading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
      }
      classNames={{
        base: `${props.height} overflow-scroll`,
        table: "min-h-[420px]",
      }}
    >
      <TableHeader>
        <TableColumn className="text-white text-base bg-birumudabgt  " key="name">
          Name
        </TableColumn>
        <TableColumn className="text-white bg-birumudabgt text-base" key="height">
          Short Description
        </TableColumn>
        <TableColumn
          className="text-white bg-birumudabgt text-base"
          key={`${props.keyKolom3}`}
        >
          {props.kolom3}
        </TableColumn>
        <TableColumn
          className="text-white bg-birumudabgt text-base"
          key={`${props.keyKolom4}`}
        >
          {props.kolom4}
        </TableColumn>
        <TableColumn
          className="text-white bg-birumudabgt text-base"
          key="birth_year"
        >
          Details
        </TableColumn>
      </TableHeader>
      <TableBody
        className="bg-white"
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>
                {/* Ubah baris dengan key "birth_year" menjadi tombol "Detail" */}
                {columnKey === "birth_year" ? (
                  <Button className="bg-white text-birublend" variant="success">
                    Detail
                  </Button>
                ) : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
