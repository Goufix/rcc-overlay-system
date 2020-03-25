import React, { useState } from "react";
import { Input } from "../../components/Input";
import * as S from "./styles";

export function Home() {
  const [value, setValue] = useState("");
  return (
    <div>
      <S.Title> RCC SYSTEM OVERLAY </S.Title>
      <form>
        <Input value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>
  );
}
