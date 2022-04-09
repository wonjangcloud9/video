import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Select = styled.select`
  width: 30%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: solid 1px;
  margin-left: 10px;
  margin-bottom: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

export default function Home() {
  return (
    <Container>
      <Select>
        <option value="" hidden>
          지역
        </option>
        <option value="1">서울</option>
        <option value="2">경기</option>
        <option value="3">인천</option>
        <option value="4">강원</option>
        <option value="4">제주</option>
        <option value="4">부산</option>
        <option value="4">충남</option>
        <option value="4">전남</option>
        <option value="4">경북</option>
        <option value="4">경남</option>
        <option value="4">전북</option>
        <option value="4">울산</option>
        <option value="4">대전</option>
        <option value="4">충북</option>
        <option value="4">대구</option>
        <option value="4">광주</option>
      </Select>
      <Select>
        <option value="" hidden>
          건물 대상 용도
        </option>
        <option value="1">노유자시설</option>
        <option value="2">숙박시설</option>
        <option value="3">위락시설</option>
        <option value="4">의료시설(정신보건의료기관)</option>
        <option value="4">수련시설</option>
        <option value="4">복합건축물(1류에 속하는 시설이 있는 경우)</option>
        <option value="4">문화및 집회 시설</option>
        <option value="4">종교시설</option>
        <option value="4">의료시설(정신보건시설 제외)</option>
        <option value="4">교정 및 군사시설(군사시설 제외)</option>
        <option value="4">지하가</option>
        <option value="4">
          복합건축물(1류에 속하는 시설이 있는 경우 제외)
        </option>
        <option value="4">발전시설</option>
        <option value="4">판매시설</option>
        <option value="4">근린생활시설</option>
        <option value="4">운동시설</option>
        <option value="4">업무시설</option>
        <option value="4">방송통신시설</option>
        <option value="4">운수시설</option>
        <option value="4">공장</option>
        <option value="4">위험물 저장 및 처리시설</option>
        <option value="4">창고시설</option>
        <option value="4">공동주택(아파트 제외)</option>
        <option value="4">교육연구시설</option>
        <option value="4">항공기 및 자동차 관련시설</option>
        <option value="4">동물 및 식물 관련시설</option>
        <option value="4">분뇨 및 쓰레기 처리시설</option>
        <option value="4">군사시설</option>
        <option value="4">묘지 관련시설</option>
        <option value="4">관광휴게시설</option>
        <option value="4">장례식장</option>
        <option value="4">지하구</option>
        <option value="4">문화재</option>
      </Select>
      <Input placeholder="점검면적(㎡)" />
      <Input
        placeholder="세대수"
        aria-label="아파트인 경우 세대수를 적어주세요."
      />
    </Container>
  );
}
