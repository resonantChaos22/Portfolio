interface workData {
  name: String;
  date: String;
  description: String;
  type: String;
  learningOutcomes: String[];
}

interface workProps {
  workData: workData;
}

export const Work = ({ workData }: workProps) => {
  return (
    <div
      className="h-[70vh] 2xl:pt-10"
      style={{ scrollSnapAlign: "start !important" }}
    >
      <div className=" text-5xl 2xl:text-7xl font-bold">{workData.name}</div>
      <div className="flex flex-row w-auto justify-between">
        <div className="2xl:text-base text-xs mt-2">{workData.date}</div>
        <div className="inline 2xl:text-lg text-xs font-bold text-teal-400 mt-2 mr-5">
          {workData.type}
        </div>
      </div>
      <div className="text-lg xl:text-xl 2xl:text-2xl mt-10">
        {workData.description}
      </div>
      <div className="2xl:text-5xl text-3xl font-bold text-teal-300 mt-10">
        Learning Outcomes-
      </div>
      <div className="mt-5">
        <ul className="list-disc list-inside text-lg xl:text-xl 2xl:text-2xl">
          {workData.learningOutcomes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
